<?php

class DbHandler {

  private $conn,$func;
  function __construct() {
    require_once '../include/DbConnect.php';
    $db = new DbConnect();
    $this->conn = $db->connect();
    require_once '../include/DbFunction.php';
    $this->func = new DbFunction();
    require_once '../include/PassHash.php';
    // require_once '../../assets/controller/class.main.php';
    // $this->main = new main();
  }
  public function update_payment($type,$ordercode,$price,$type_pament) {
    $mount = array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    $sql_log = "INSERT INTO `log_payment` ( `payment_name`, `payment_price`, `payment_code`,`payment_type`,
      `payment_date`, `payment_status`) VALUES
      ('-', '$price', '$ordercode', '$type_pament', NOW(), '$type')";
      $sql_log = $this->conn->prepare($sql_log);
      $sql_log->execute();
      $sql_update = "UPDATE `shop_bookings` SET `Booking_Payment_Status` = '$type' WHERE Booking_Code = '$ordercode'";
      $sql_update = $this->conn->prepare($sql_update);
      $sql_update->execute();

      if($type == 1){

        $sql_booking = "SELECT *,b.user_id as userID FROM `shop_bookings` a left join `shop_package` b on a.Package_ID = b.id
        left join `data_user_account` c on a.Booking_User_ID = c.user_id WHERE `Booking_Code` LIKE '$ordercode'";
        $sql_booking = $this->conn->prepare($sql_booking);
        $sql_booking->execute();
        $resultBooking = $sql_booking->get_result();
        while($resBook = $resultBooking->fetch_assoc())
        {
          $e_email = $resBook['user_email'];
          $e_cos = $resBook['Booking_Cos'];
          $e_tax = $resBook['Booking_Tax'];
          $e_price = $resBook['Booking_Price'];
          $e_packet_name = $resBook['name_package'];
          $e_tour_date = $resBook['Booking_Date'];
          $e_payment_date = $resBook['Booking_Time'];
          $e_name_user = $resBook['Booking_Fullname'];
          $e_name_official = $resBook['user_firstname'] . " " . $resBook['user_lastname'];
          if($resBook['Booking_Payment_Type'] == '1'){
            $e_type_payment = "Credit Card";
          }else{
            $e_type_payment = "Paypal";
          }
          $e_detail = $resBook['Booking_Guest'];

          $sql_shop = "SELECT * FROM `data_user_account` WHERE `user_id` = '".$resBook['userID']."'";
          $sql_shop = $this->conn->prepare($sql_shop);
          $sql_shop->execute();
          $result_shop = $sql_shop->get_result();
          while($resShop = $result_shop->fetch_assoc())
          {
            $e_name_official = $resShop['user_firstname'] . " " . $resShop['user_lastname'];
          }

          // $sqlUser = "SELECT * FROM data_user_account WHERE user_id = '".$resBook["id_user_booking"]."'";
          $getdata = array();
          $title = $resBook["user_firstname"] . " " . $resBook["user_lastname"];
          $message = "Buy your package";
          $getdata["typeNoti"] = "buyPacket";
          $sql = "SELECT * FROM data_device_register WHERE member_id='".$resBook["userID"]."' AND device_uuid != ''";
          $stmt = $this->conn->prepare($sql);
          $stmt->execute();
          $result = $stmt->get_result();
          $data = json_encode($getdata);
          if($result->num_rows > 0){
            define( 'API_ACCESS_KEY', 'AIzaSyC71MK0GrfVX3x0ZjqcFzXgPCn5VeDh2kg' );
            while($res = $result->fetch_assoc())
            {
              $registrationIds = $res['device_uuid'];
              $msg = array(
                'messageKey' 	=> $message,
                'title'		=> $title,
                'body' => $message,
                'sound' => 'true',
                'tickerText'	=> 'Ticker text here...Ticker text here...Ticker text here',
                'vibrate'	=> 1,
                'sound'		=> 1,
                'largeIcon'	=> 'large_icon',
                'smallIcon'	=> 'small_icon',
                'urlto'	=> 'asdasdsa',
                'moreData'=> $data
              );

              if ($res["device_platform"] == '2') {
                $arrayToSend = array('to' => $registrationIds, 'notification' => $msg,'priority'=>'high' );
              }else{
                $arrayToSend = array('to' => $registrationIds, 'data' => $msg,'priority'=>'high');
              }
              $headers = array(
                'Authorization: key=' . API_ACCESS_KEY,
                'Content-Type: application/json'
              );
              $ch = curl_init();
              curl_setopt($ch, CURLOPT_USERPWD, "myusername:mypassword");
              curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
              // curl_setopt( $ch,CURLOPT_URL, 'https://android.googleapis.com/gcm/send' );
              curl_setopt( $ch,CURLOPT_POST, true );
              curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
              curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
              curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
              curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $arrayToSend ) );
              curl_exec($ch );
              curl_close( $ch );
            }
            $sql_in = "INSERT INTO `data_user_notification` (`noti_detail`, `noti_post_id`, `noti_user_doer`, `noti_user_ owner`, `noti_type`, `noti_time`)
            VALUES ('$message', '".$ordercode."', '".$resBook["Booking_User_ID"]."', '".$resBook["userID"]."', '3', NOW())";
            $stmt_in = $this->conn->prepare($sql_in);
            $stmt_in->execute();
          }
        }
        $email = $e_email;
        $namesent = 'Adventure Earth - Thailand';
        $message = '    <div style="width: 50%;display: inline-block;max-width: 500px;margin: auto;position: absolute;left: 0;right: 0;border: solid 1px #cacaca;">
        <div class="">
        <img src="https://myadventureearth.com/api/imgmockup/header2.png" alt="" style="width: 100%;">
        </div>
        <div class="" style="margin: 15px 25px;">
        <div class="" style="border-bottom: solid 0.5px rgba(127, 71, 192, 0.9);padding-bottom:10px;">
        <span style="color: #cf4985;font-size: 20px;">Hello '.$e_name_user.'</span><br>
        <span style="font-size:14px;">Thank you ! for you recent transaction on </span> <span style="color:#cf4985;font-size:14px;">Adventure Earth</span>
        </div>
        <div class="" style="padding: 15px 25px;margin-top: 15px;margin-bottom: 15px;padding: 15px;border: solid rgba(183, 183, 183, 0.2);border-radius: 3px;">
        <div class="" style="padding-bottom: 10px;border-bottom: solid 0.5px rgba(127, 71, 192, 0.9);">
        <div class="" style="color: #7f47c0;">
        '.$e_packet_name.'
        </div>
        <div class="" style="color: #888;">
        '.$e_detail.'
        </div>
        <div class="" style="color: #888;">
        '.$e_name_official.'
        </div>
        </div>
        <div class="" style="padding: 10px;border-bottom: solid 0.5px rgba(127, 71, 192, 0.9);">
        <table style="width:100%;">
        <tr style="color:#888;">
        <td style="width:40%">Trip cost :</td>
        <td style="text-align: right;">'.$e_cos.' ฿</td>
        </tr>
        <tr style="color:#888;">
        <td>Tax :</td>
        <td style="text-align: right;">'.$e_tax.' ฿</td>
        </tr>
        <tr>
        <td></td>
        <td style="color:#7f47c0;text-align: right;font-size: 18px;">Total price : '.$e_price.' ฿</td>
        </tr>
        </table>
        </div>
        <div class="" style="padding:10px;padding: 10px 0px 0px 0px;font-size:12px;color:#888;">
        <span>Order No : '.$ordercode.'</span><br>
        <span>Transaction date : '.$e_payment_date.'</span><br>
        <span>Payment : '.$e_type_payment.'</span><br>
        </div>
        </div>
        <div class="" style="font-size: 12px;">
        This e-mail message will serve as your receipt
        </div>
        </div>
        <div class="" style="position:relative;">
        <img src="https://myadventureearth.com/api/imgmockup/footer2.png" alt="" style="width: 100%;vertical-align: bottom;">
        </div>
        </div>';
        $result = $this->func->sendEmail("adventureearth.ibusiness@gmail.com","Adventureearth",$email,$namesent,"Paymetn",$message,"123456");
      }
      if($type == 2){
        $sql_order = $this->conn->prepare("SELECT * FROM `shop_bookings` WHERE `Booking_Code` = '".$ordercode."'");
        $sql_order->execute();
        $result = $sql_order->get_result();
        while ($res = $result->fetch_assoc()) {
          $date = explode(' ',$res["Booking_Date"]);
          $month_number = array_search($date[0], $mount);
          $full = $date[2].'-'.sprintf("%02d", ($month_number+1)).'-'.sprintf("%02d", $date[1]);
          $update_order = "UPDATE `shop_package_stock` SET `balance` = `balance` + ".$res["qly"]." WHERE `id_shop_package` = '".$res["shop_id"]."' AND `date` LIKE '$full%'";
          $sql_update_order = $this->conn->prepare($update_order);
          $sql_update_order->execute();
        }
      }
      return true;
    }
    public function check_order_booking($orderId) {
      $sql = $this->conn->prepare("SELECT * FROM `shop_bookings` WHERE `booking_code` = '".$orderId."'");
      $sql->execute();
      $result = $sql->get_result();
      while ($res = $result->fetch_assoc()) {
        return $res["Booking_Payment_Status"];
      }
    }

    public function package_rate_save($Package_ID,$Booking_Code,$User_ID,$Score,$comment) {
      $sql = $this->conn->prepare("INSERT INTO `shop_package_rate` (`Rate_Package_ID`, `Rate_Booking_Code`, `Rate_User_ID`, `Rate_Friendly`, `Rate_Area`, `Rate_Language`, `Rate_Average`, `Rate_Review`, `Rate_Date`)
      VALUES ('$Package_ID', '".$Booking_Code."', '$User_ID', '', '', '', '$Score', '$comment', NOW())");
      $sql->execute();
      if ($sql) {
        return true;
      }else{
        return false;
      }
    }


    public function saveCoverImage($user_id,$image) {
      $imageData=str_replace(" ","+",$image);
      $imageData=str_replace('\n',"",$imageData);
      $textreturn = $this->func->check_baseimg_ext($imageData);
      $today = date("Y-m-d-H-i-s").rand(11111,99999).'.'.$textreturn['ext'];
      $uploadFileNew = $this->func->uploadfilePosttest($imageData, "data_cover", $user_id, $today, $imageData);
      $uploadFileNew = explode("../../", $uploadFileNew[0]);
      $supdateCover = "UPDATE `data_user_account` SET `user_coverImg` = '".$uploadFileNew[1]."' WHERE `data_user_account`.`user_id` = '".$user_id."'";
      $stmtin = $this->conn->prepare($supdateCover);
      $stmtin->execute();
      if($stmtin){
        return true;
      }else {
        return null;
      }
    }

    public function updateNotiRead($noti_id) {

      $supdateCover = "UPDATE `data_user_notification` SET `noti_read` = '1' WHERE `data_user_notification`.`noti_id` = '".$noti_id."'";
      $stmtin = $this->conn->prepare($supdateCover);
      $stmtin->execute();
      if($stmtin){
        return true;
      }else {
        return null;
      }

    }


    public function check_payment_st($order_id) {
      $text = "SELECT * FROM `shop_bookings` WHERE `Booking_Code` = '".$order_id."'";
      $sql = $this->conn->prepare($text);
      $sql->execute();
      $res= $sql->get_result();
      while ($result = $res->fetch_assoc()) {
        return $result;
      }
      return null;

    }

    public function countCoconut($idPost, $type) {
      if($type != "TAT"){
        return $this->count_number('data_photo_like','photo_id',$idPost);
      }else{
        return $this->count_number('photo_like_tat','tat_post_id',$idPost);
      }
    }

    public function noti_read_all($user_id) {
      $sql = "UPDATE `data_user_notification` SET `noti_read_all` = '1' WHERE `noti_user_ owner` = '".$user_id."'";
      $sql = $this->conn->prepare($sql);
      $sql->execute();
      if($sql){
        return true;
      }else{
        return null;
      }
    }

    public function get_booking_category() {
      $sql = "SELECT * FROM `data_booking_category` WHERE `status` = '1'";
      $sql = $this->conn->prepare($sql);
      $sql->execute();
      $res= $sql->get_result();
      $resSql = [];
      while ($result = $res->fetch_assoc()) {
        $resSql[] = $result;
      }
      if($res->num_rows > 0){
        return $resSql;
      }else{
        return null;

      }
    }



    public function getCoverImage($user_id) {
      $sumpost = "0";
      $sql = "SELECT *  FROM `data_photos` where user_id = '$user_id' and photo_status != 0";
      $sql = $this->conn->prepare($sql);
      $sql->execute();
      $ressum = $sql->get_result();
      $sumpost = $ressum->num_rows;


      $supdateCover = "SELECT `user_coverImg` FROM `data_user_account` WHERE `user_id` = '".$user_id."'";
      $stmtin = $this->conn->prepare($supdateCover);
      $stmtin->execute();
      $res= $stmtin->get_result();
      $tag = array();
      $image = "";
      while ($result = $res->fetch_assoc()) {
        $image =  $result["user_coverImg"];
      }
      if($image != ""){
        $array = array(
          "totalPost" => $sumpost,
          "coverPath" => "https://myadventureearth.com/".$image
        );
        return $array;
      }else {
        $array = array(
          "totalPost" => $sumpost,
          "coverPath" => ""
        );
        return $array;
      }

    }


    public function get_infomation($user_id) {
      $sql = $this->conn->prepare("SELECT * FROM `data_user_account` WHERE `user_id` = '$user_id'");
      $sql->execute();
      $result = $sql->get_result();
      while ($res = $result->fetch_assoc()) {
        $sql_tag = $this->conn->prepare("SELECT * FROM `data_get_tag` a
          LEFT JOIN `data_tag` b on a.tag_id = b.tag_id WHERE a.user_id = '$user_id'");
          $sql_tag->execute();
          $result_tag = $sql_tag->get_result();
          $tag = array();
          while ($res_tag = $result_tag->fetch_assoc()) {
            $array = array(
              "tag_id" => $res_tag["tag_id"],
              "tag_name" => $res_tag["tag_name"],
            );
            $tag[] = $array;
          }
          $response = array(
            'profile_tag'=> $tag,
            'profile_address'=> $res["store_address"],
            'profile_phone'=> $res["store_telephone"],
            'profile_about'=> $res["store_about"],
          );
        }
        return $response;
      }

      public function send_noti_test() {
        $getdata = json_decode("", true);
        $title = "test -- test";
        $message = "Like your post";
        // $getdata["sum_like"] = "1";
        $getdata["typeNoti"] = "comment";
        $data = json_encode($getdata);
        $sql = "SELECT * FROM data_device_register WHERE member_id='2' AND device_uuid != ''";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->get_result();
        if($result->num_rows > 0){
          define( 'API_ACCESS_KEY', 'AIzaSyC71MK0GrfVX3x0ZjqcFzXgPCn5VeDh2kg' );
          while($res = $result->fetch_assoc())
          {
            $registrationIds = $res['device_uuid'];
            $msg = array(
              'messageKey' 	=> $message,
              'title'		=> $title,
              'body' => $message,
              'sound' => 'true',
              'tickerText'	=> 'Ticker text here...Ticker text here...Ticker text here',
              'vibrate'	=> 1,
              'sound'		=> 1,
              'largeIcon'	=> 'large_icon',
              'smallIcon'	=> 'small_icon',
              'urlto'	=> 'asdasdsa',
              'moreData'=> $data
            );

            if ($res["device_platform"] == '2') {
              $arrayToSend = array('to' => $registrationIds, 'notification' => $msg,'priority'=>'high' );
            }else{
              $arrayToSend = array('to' => $registrationIds, 'data' => $msg,'priority'=>'high');
            }
            $headers = array(
              'Authorization: key=' . API_ACCESS_KEY,
              'Content-Type: application/json'
            );

            $ch = curl_init();

            curl_setopt($ch, CURLOPT_USERPWD, "myusername:mypassword");
            curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
            // curl_setopt( $ch,CURLOPT_URL, 'https://android.googleapis.com/gcm/send' );
            curl_setopt( $ch,CURLOPT_POST, true );
            curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
            curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
            curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
            curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $arrayToSend ) );
            curl_exec($ch );
            curl_close( $ch );
          }
        }
        echo "string";
        exit();
      }



      public function savephotoold() {
        // $sql= $this->conn->prepare("SELECT * FROM `data_photos` WHERE photo_path_img = '' and photo_path_img_normal = '' and photo_path_img_original != ''");
        $sql= $this->conn->prepare("SELECT * FROM `data_photos` WHERE photo_path_img != '' and photo_path_img_normal != ''");
        $sql->execute();
        $result = $sql->get_result();
        while ($res = $result->fetch_assoc()) {
          // $lastId = explode('/',$res["photo_path_img_original"])[2];
          // $original = $folder_name = $nameiamge = $namefile = 0;
          // $this->updatePhotoResize($res["photo_id"],$original,$folder_name,$nameiamge,$namefile);
          $text = htmlspecialchars($res["photos_text_google"],ENT_QUOTES);
          $sql= "INSERT INTO `data_path_photo`
          (path_url,path_url_resize,path_post_id,path_date,path_google_text,path_width,path_height) VALUES
          ('".$res["photo_path_img_normal"]."','".$res["photo_path_img"]."','".$res["photo_id"]."'
            ,NOW(),'".$text."','".$res["photo_width"]."','".$res["photo_height"]."'
          )";
          $stmt = $this->conn->prepare($sql);
          $stmt->execute();
        }
        exit();
      }
      public function update_text_search() {
        $sql = $this->conn->prepare("SELECT * FROM `data_photos`");
        $sql->execute();
        $result = $sql->get_result();
        while ($res = $result->fetch_assoc()) {
          $text_search = "";
          $sql_feeling = $this->conn->prepare("SELECT * FROM `data_feeling_tx` WHERE feeling_tx_id = '".$res["feeling_tx_id"]."'");
          $sql_feeling->execute();
          $result_feeling = $sql_feeling->get_result();
          while ($res_feeling = $result_feeling->fetch_assoc()) {
            $text_search = $text_search.$res_feeling["feeling_tx_name"].' , ';
          }
          $sql_type = $this->conn->prepare("SELECT * FROM `data_TypeLocation` WHERE TypeLocation_id = '".$res["TypeLocation_id"]."'");
          $sql_type->execute();
          $result_type = $sql_type->get_result();
          while ($res_type = $result_type->fetch_assoc()) {
            $text_search = $text_search.$res_type["TypeLocation_name"];
          }
          $update = $this->conn->prepare("UPDATE `data_photos` SET `text_search` = '$text_search' WHERE `data_photos`.`photo_id` = '".$res["photo_id"]."'");
          $update->execute();

        }
        echo "string";
        exit();
      }

      public function get_package_province() {
        $sql = "SELECT * FROM `shop_package` a LEFT JOIN `data_province` b on a.package_province = b.province_id GROUP BY package_province";
        // exit();
        $sql = $this->conn->prepare($sql);
        $sql->execute();
        $result = $sql->get_result();
        $province = [];
        if($result->num_rows != 0){
          while ($res = $result->fetch_assoc()) {
            // if($res["province_id"] != null){
            $array = array(
              'province_id' => $res["province_id"],
              'province_name_th' => $res["province_name_th"],
              'province_name_en' => $res["province_name_en"],
            );
            // }
            $province[] = $array;
          }
          return $province;
        }else{
          return null;
        }

      }

      public function get_rate_package($package_id,$user_id,$booking_id,$type) {
        $where = "";
        if($type == 'booking'){
          $where = " Rate_User_ID = '$user_id' AND Rate_Package_ID = '$package_id' AND Rate_Booking_Code = '$booking_id'";
        }else{
          $where = " Rate_Package_ID = '$package_id'";
        }
        $sql = "SELECT *, sum(Rate_Friendly) AS Friendly, sum(Rate_Area) AS Area, sum(Rate_Language) AS Language
        , sum(Rate_Average) AS Average , count(Rate_ID) as countID  FROM `shop_package_rate` WHERE $where";
        $sql = $this->conn->prepare($sql);
        $sql->execute();
        $result = $sql->get_result();
        $array = array(
          // "Friendly" => 0,
          // "Area" => 0,
          // "Language" => 0,
          "Average" => 0,
          "Count" => 0,
          "Review" => array()
        );

        while ($res = $result->fetch_assoc()) {
          if($res["countID"] != "0"){
            $arrayReview = [];
            if($type != 'booking'){
              $sqlReview = "SELECT spr.*, spi.*, dua.user_firstname, dua.user_lastname, dua.user_path_img, GROUP_CONCAT(Review_Path) as image_path FROM `shop_package_rate` spr
              LEFT JOIN `shop_review_img` spi on spr.Rate_Booking_Code = spi.Review_Booking_Code
              LEFT JOIN `data_user_account` dua on spr.Rate_User_ID = dua.user_id
              WHERE `Rate_Package_ID` LIKE '$package_id'";
              $sqlReview = $this->conn->prepare($sqlReview);
              $sqlReview->execute();
              $resultReview = $sqlReview->get_result();
              while ($resReview  = $resultReview->fetch_assoc()) {
                $arrayReview[] = $resReview;
              }
            }
            $array = array(
              // "Friendly" => round($res["Friendly"] / $res["countID"], 1),
              // "Area" => round($res["Area"] / $res["countID"], 1),
              // "Language" => round($res["Language"] / $res["countID"], 1),
              "Average" => round($res["Average"] / $res["countID"], 1),
              "Count" => $res["countID"],
              "Review" => $arrayReview
            );
          }
        }
        return $array;
      }

      public function get_package($user_lat,$user_lng,$widthphone,$type,$province_id,$activity_id) {
        $i = 0;
        $sql_sec = $this->conn->prepare("SELECT * FROM `shop_session_main` WHERE `Session_Page` LIKE '2' AND `Section_Status` LIKE '0' AND `Session_Page` = '2'");
        $sql_sec->execute();
        $result_sec = $sql_sec->get_result();
        $main_session = "";
        while ($res_sec = $result_sec->fetch_assoc()) {
          $sql_sub = $this->conn->prepare("SELECT * FROM `shop_session_sub` WHERE `Sub_Main_ID` = '".$res_sec["Section_ID"]."' AND `Sub_Status` = '0'");
          $sql_sub->execute();
          $result_sub = $sql_sub->get_result();
          $sub_session = [];

          while ($res_sub = $result_sub->fetch_assoc()) {
            $where = "";
            if($res_sub["Sub_Tag_ID"] != ""){
              $tagKey = explode(',',$res_sub["Sub_Tag_ID"]);
              foreach ($tagKey as $key => $value) {
                if($key == 0){
                  $where = $where."WHERE tag_name LIKE '%$value%'";
                }else{
                  $where = $where." or tag_name LIKE '%$value%'";
                }
              }
            }
            $where2 = "";
            if($res_sub["Sub_Category"] != ""){
              $where2 = " and catagory_id = '".$res_sub["Sub_Category"]."'";
            }
            // if($i == 1){
            //   echo "string";
            //   exit();
            // }
            $sql_tag = $this->conn->prepare("SELECT * FROM `shop_tag` $where GROUP BY shop_package_id ORDER BY `shop_tag`.`id` DESC");
            $sql_tag->execute();
            $result_tag = $sql_tag->get_result();
            $tag = [];
            while ($res_tag = $result_tag->fetch_assoc()) {
              $array = array(
                "shop_package_id" => $res_tag["shop_package_id"],
                "tag_name" => $res_tag["tag_name"],
              );
              $tag[] = $array;
            }

            // print_r($tag);
            $package = [];
            foreach ($tag as $key => $value) {
              if($type == 'feed'){
                $sql_package = "SELECT *, sp.id as PID FROM `shop_package` as sp LEFT JOIN `shop_package_pin` as spp on sp.id = spp.id_shop
                WHERE (sp.Key_id = '".$value["shop_package_id"]."' or sp.id = '".$value["shop_package_id"]."')
                and (select id from `shop_package`
                  where Key_id = sp.Key_id order by time_stam desc limit 1 ) = '".$value["shop_package_id"]."' ORDER BY sp.time_stam DESC";
                }else if($type == 'explore'){
                  $province_where = '';
                  $activity_where = '';
                  if($province_id != ''){
                    $province_where = " and package_province = '".$province_id."'";
                  }
                  if($activity_id != ''){
                    $activity_where = " and catagory_id = '".$activity_id."'";
                  }

                  $sql_package = "SELECT *, sp.id as PID FROM `shop_package` as sp LEFT JOIN `shop_package_pin` as spp on sp.id = spp.id_shop
                  WHERE (sp.Key_id = '".$value["shop_package_id"]."' or sp.id = '".$value["shop_package_id"]."')
                  and (select id from `shop_package`
                    where Key_id = sp.Key_id order by time_stam desc limit 1 ) = '".$value["shop_package_id"]."' $province_where $activity_where ORDER BY sp.time_stam DESC";
                  }
                  // echo $sql_package . ' - - ';
                  $sql_package = $this->conn->prepare($sql_package);
                  $sql_package->execute();
                  $result_package = $sql_package->get_result();
                  // echo $result_package->num_rows . " ^_^ ";
                  if($result_package->num_rows != 0){

                    while ($res_package = $result_package->fetch_assoc()) {

                      // get stock
                      // echo $res_package["id"] . ' < -- > ';
                      $stock = array();
                      $sql_stock = $this->conn->prepare("SELECT * FROM `shop_package_stock` WHERE `id_shop_package` = '".$res_package["PID"]."'");
                      $sql_stock->execute();
                      $result_stock = $sql_stock->get_result();
                      if($result_stock->num_rows > 0){
                        while ($res_stock = $result_stock->fetch_assoc()) {
                          $array = array(
                            "date" => $res_stock["date"],
                            "qly" => $res_stock["qly"],
                            "balance" => $res_stock["balance"],
                          );
                          $stock[] = $array;
                        }
                      }


                      // get img //
                      $img = array();
                      // echo "SELECT * FROM `shop_img` WHERE id_shop = '".$res_package["id"]."'";
                      $sql_img = $this->conn->prepare("SELECT * FROM `shop_img` WHERE id_shop = '".$res_package["PID"]."'");
                      $sql_img->execute();
                      $result_img = $sql_img->get_result();
                      if($result_img->num_rows > 0){
                        while ($res_img = $result_img->fetch_assoc()) {
                          $img_array = array(
                            "img_resize" => BASE_URL.$res_img['resize300'],
                            "img_fullsize" => BASE_URL.$res_img['resize800'],
                            "sizeimg_resize" => $this->func->NewgetFullsize($res_img['width'],$res_img['hight'],$widthphone),
                            "sizeimg_fullsize" => $this->func->NewgetFullsize($res_img['width'],$res_img['hight'],$widthphone),
                          );
                          $img[]=$img_array;
                        }
                      }else{
                        $img_array = array(
                          "img_resize" => BASE_URL,
                          "img_fullsize" => BASE_URL,
                          "sizeimg_resize" => "",
                          "sizeimg_fullsize" => "",
                        );
                        $img[]=$img_array;
                      }

                      // get timeable //
                      $countTime = '';
                      $i = 0;
                      $timeable = array();
                      $sql_timeable = $this->conn->prepare("SELECT * FROM `shop_timeable` WHERE id_shop = '".$res_package["PID"]."'");
                      $sql_timeable->execute();
                      $result_timeable = $sql_timeable->get_result();
                      while ($res_timeable = $result_timeable->fetch_assoc()) {
                        if($result_timeable->num_rows > 0){
                          $i++;
                          $timeable_array = array(
                            "timeable_time" => $res_timeable['time_activity'],
                            "timeable_activity" => $res_timeable['activity'],
                          );
                          $timeable[]=$timeable_array;

                          if($result_timeable->num_rows == $i){
                            $start  = date_create($timeable[0]['timeable_time']);
                            $end 	= date_create($timeable[count($timeable)-1]['timeable_time']); // Current time and date
                            $diff  	= date_diff( $start, $end );
                            $Arraytime =[
                              [$diff->y,'Year'],
                              [$diff->m,'Month'],
                              [$diff->d,'Day'],
                              [$diff->h,'Hour'],
                              [$diff->i,'min'],
                              [$diff->s,'sec'],
                            ];
                            for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                              if ($Arraytime[$i][0]!=0) {
                                $countTime = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                                break;
                              }
                            }
                          }
                        }
                      }
                      // get price //
                      $price = array();
                      $sql_price = $this->conn->prepare("SELECT * FROM `shop_package_attribute` WHERE id_shop = '".$res_package["PID"]."'");
                      $sql_price->execute();
                      $result_price = $sql_price->get_result();
                      while ($res_price = $result_price->fetch_assoc()) {
                        if($result_price->num_rows > 0){
                          $price_array = array(
                            "price_type" => $res_price['id'],
                            "price_name" => $res_price['user_type'],
                            "price" => $res_price['price'],
                            "num_of_peple" => 0
                          );
                          $price[]=$price_array;
                        }
                      }

                      // get province //
                      $province = [];
                      $sql_province = $this->conn->prepare("SELECT * FROM `data_province` WHERE `province_id` = '".$res_package["package_province"]."'");
                      $sql_province->execute();
                      $result_province = $sql_province->get_result();
                      while ($res_province = $result_province->fetch_assoc()) {
                        if($result_province->num_rows > 0){
                          $province_array = array(
                            "province_name_th" => $res_province['province_name_th'],
                            "province_name_en" => $res_province['province_name_en'],
                            "province_id" => $res_province['province_id'],
                          );
                          $province = $province_array;
                        }
                      }
                      //get shop //
                      $user = array();
                      $sql_user = "SELECT * FROM `data_user_account` a
                      LEFT JOIN `data_country` b on a.country_id = b.country_id
                      LEFT JOIN `data_user_location` c on a.user_id = c.user
                      WHERE user_id = '".$res_package["user_id"]."'";
                      $stmt_user = $this->conn->prepare($sql_user);
                      $stmt_user->execute();
                      $result_user = $stmt_user->get_result();
                      while ($res_user = $result_user->fetch_assoc()) {
                        if($result_user->num_rows > 0){
                          $sql_tex = "SELECT * FROM `shop_type_share` WHERE `id` = '".$res_user["shop_type_share"]."'";
                          $stmt_tex = $this->conn->prepare($sql_tex);
                          $stmt_tex->execute();
                          $result_tex = $stmt_tex->get_result();
                          while ($res_tex = $result_tex->fetch_assoc()) {
                            $tex = $res_tex["share"];
                          }
                          $start  = date_create($res_user['timeUpdate']);
                          $end 	= date_create(); // Current time and date
                          $diff  	= date_diff( $start, $end );
                          $Arraytime =[
                            [$diff->y,'years'],
                            [$diff->m,'months'],
                            [$diff->d,'d'],
                            [$diff->h,'hr'],
                            [$diff->i,'min'],
                            [$diff->s,'sec'],
                          ];
                          $time = "";
                          for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                            if ($Arraytime[$i][0]!=0) {
                              $time = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                              break;
                            }
                          }
                          //check type file if svg not convert
                          $type = explode(".",$res["country_flag_32"])[1];
                          $imgPath = '';
                          if ($type != 'svg') {
                            $imgPath = strtolower(explode("-",$res_user["country_flag_32"])[0]).'.svg';
                          }else{
                            $imgPath = $res_user["country_flag_32"];
                          }
                          //check type file if svg not convert

                          $user_array = array(
                            "country_id" => $res_user["country_id"],
                            "country_img_name" => $res_user["country_img_name"],
                            "country_img_path" => BASE_URL.'data/flags/'.$imgPath,
                            "country_name_en" => $res_user["country_name_en"],
                            "country_name_th" => $res_user["country_name_th"],
                            "user_firstname" => html_entity_decode($res_user["user_firstname"], ENT_QUOTES),
                            "user_id" => $res_user["user_id"],
                            "user_lastname" => html_entity_decode($res_user["user_lastname"], ENT_QUOTES),
                            "user_path_img" => BASE_URL.$res_user["user_path_img"],
                            "user_time" => $time . ' ago',
                          );
                          $user = $user_array;
                        }
                      }
                      //get meeting
                      $meeting = array();
                      $sql_meeting = "SELECT * FROM `shop_locations_meeting` WHERE shop_id = '".$res_package["PID"]."'";
                      $stmt_meeting = $this->conn->prepare($sql_meeting);
                      $stmt_meeting->execute();
                      $result_meeting = $stmt_meeting->get_result();
                      while ($res_meeting = $result_meeting->fetch_assoc()) {
                        if($result_meeting->num_rows > 0){
                          $meeting_array = array(
                            "id_meet" => $res_meeting['id'],
                            "name_meet" => $res_meeting['meet_name'],
                            "meet_address" => $res_meeting['meet_address'],
                            "meet_lat" => $res_meeting['meeting_lat'],
                            "meet_lng" => $res_meeting['meeting_lng'],
                            "meet_tyep" => $res_meeting['type'],
                            "meet_price" => $res_meeting['SeaterPrice'],
                            "meet_seater" => $res_meeting['Seater'],
                            "time_meeting" => $res_meeting['time_meeting'],
                          );
                          $meeting[]=$meeting_array;
                        }
                      }
                      $accident = [];
                      $sql_accident = $this->conn->prepare("SELECT * FROM `shop_insurance` WHERE `id_shop` = '".$res_package["PID"]."'");
                      $sql_accident->execute();
                      $result_accident = $sql_accident->get_result();
                      while ($res_accident = $result_accident->fetch_assoc()) {
                        $accident = array(
                          "accident_chooser" => false,
                          "accident_name" => 'ประกันภัย',
                          "accident_detail" => $res_accident["detail"],
                          "accident_price" => $res_accident["price"],
                        );
                      }
                      $typePay = [];
                      // echo "SELECT * FROM `shop_type_pay` WHERE `id_shop_package` = '".$res_package["PID"]."' AND `status`";
                      $sqlPayment = $this->conn->prepare("SELECT * FROM `shop_type_pay` WHERE `id_shop_package` = '".$res_package["PID"]."' AND `status`");
                      $sqlPayment->execute();
                      $result_Payment = $sqlPayment->get_result();
                      while ($res_Payment = $result_Payment->fetch_assoc()) {
                        $typePay[] = $res_Payment;
                      }

                      $package_array = array(
                        "packet_id" => $res_package["PID"],
                        "packet_name" => $res_package["name_package"],
                        "address" => $res_package["address"],
                        "locality" => $res_package["locality"],
                        "packet_detail" => $res_package["detail"],
                        "conditions" => $res_package["conditions"],
                        "Special_Requirements" => $res_package["Special_Requirements"],
                        "Cancellation_terms" => $res_package["Cancellation_terms"],
                        "catagory_id" => $res_package["catagory_id"],
                        "type_pay" => $typePay,
                        "package_province" => $res_package["package_province"],
                        "package_room_key" => $res_package["package_room_key"],
                        'accident' => $accident,
                        "img" => $img,
                        "timeable" => $timeable,
                        "package_price" => $price,
                        "user" => $user,
                        "packet_meeting" => $meeting,
                        "province" => $province,
                        "package_time" => $countTime,
                        "package_qly" => $res_package["qly"],
                        'package_lat' => $res_package["latitude"],
                        'package_lng' => $res_package["longitude"],
                        'tour_extra_price' => $res_package["priceExtra"],
                        'tour_less' => $res_package["qlyPrivate"],
                        "tour_private" => $res_package["private"],
                        'package_rate' => $this->get_rate_package($res_package["PID"],'','','package'),
                        "time" => $stock,
                        "st_show" => '1'
                      );
                      $package[] = $package_array;
                    }
                  }

                  // print_r($package);
                }
                $sub = array(
                  "Sub_ID" => $res_sub["Sub_ID"],
                  "Sub_Title" => $res_sub["Sub_Title"],
                  "Sub_Category" => $res_sub["Sub_Category"],
                  "Sub_Tag_ID" => $res_sub["Sub_Tag_ID"],
                  "Sub_Package" => $package,
                );
                if(count($package) != 0){
                  $sub_session[] = $sub;
                }
                $i++;
              }
              $session = array(
                "Section_ID" => $res_sec["Section_ID"],
                "Section_Title" => $res_sec["Section_Title"],
                "Section_Sub" => $sub_session,
                "Section_ST" => '0'
              );
              $main_session[] = $session;
              // print_r($main_session);
            }
            if($main_session != ""){
              return $main_session;
            }else{
              return null;
            }

          }


          public function get_packet_data($type_query,$widthphone,$province,$activity) {
            $output = [];
            $whereP = '';
            $whereA = '';
            $max = ["cou" => 0];
            if($type_query == 'popular'){
              if($province != ''){
                $whereP = "AND b.package_province = '".$province."'";
              }
              if($activity != ''){
                $whereA = "AND b.package_activity = '".$activity."'";
              }

              $sql = "SELECT group_concat(id) as groups FROM `shop_package` GROUP BY Key_id";
              $sql = $this->conn->prepare($sql);
              $sql->execute();
              $result = $sql->get_result();
              $max = ["cou" => 0];
              while ($res = $result->fetch_assoc()) {
                $sqls = "SELECT * ,(SELECT  COUNT(Booking_ID) as counted FROM `shop_bookings`
                WHERE Package_ID IN (".$res["groups"].") ORDER BY Booking_ID DESC ) as cou FROM `shop_package`
                WHERE `id` IN (".$res["groups"].") ORDER BY id DESC LIMIT 1";
                $sqls = $this->conn->prepare($sqls);
                $sqls->execute();
                $results = $sqls->get_result();
                while ($ress = $results->fetch_assoc()) {
                  if($max["cou"] < $ress["cou"]){
                    $max = $ress;
                  }
                }
              }
              if($max["cou"] != 0){
                $sql = "SELECT * , b.id AS packet_id, b.user_id AS packet_user FROM
                `shop_package` b LEFT JOIN `data_booking_category` c on b.catagory_id = c.cat_id
                LEFT JOIN `shop_package_pin` d on b.id = d.id_shop
                WHERE b.id = '".$max["id"]."' AND c.status = '1'  $whereP $whereA";
              }

            }
            if($max["cou"] == 0){
              return null;
            }
            $sql = $this->conn->prepare($sql);
            $sql->execute();
            $result = $sql->get_result();
            while ($res = $result->fetch_assoc()) {
              // get tag //
              $tag = array();
              // $sql_tag = $this->conn->prepare("SELECT * FROM `data_tag` WHERE tag_id IN (".$res["tag"].")");
              //
              // $sql_tag->execute();
              // $result_tag = $sql_tag->get_result();
              // while ($res_tag = $result_tag->fetch_assoc()) {
              //   if($result_tag->num_rows > 0){
              //     $tag_array = array(
              //         "tag_id" => $res_tag['tag_id'],
              //         "tag_name" => $res_tag['tag_name'],
              //     );
              //     $tag[]=$tag_array;
              //   }
              // }
              // get time
              $times = array();
              $sql_time = $this->conn->prepare("SELECT * FROM `shop_package_stock` WHERE id_shop_package = '".$res["packet_id"]."'");
              $sql_time->execute();
              $result_time = $sql_time->get_result();
              while ($res_time = $result_time->fetch_assoc()) {
                if($result_time->num_rows > 0){
                  $tag_array = array(
                    "date" => $res_time['date'],
                    "qly" => $res_time['qly'],
                    "balance" => $res_time['balance']
                  );
                  $times[]=$tag_array;
                }
              }


              // get img //
              $img = array();
              $sql_img = $this->conn->prepare("SELECT * FROM `shop_img` WHERE id_shop = '".$res["packet_id"]."'");
              $sql_img->execute();
              $result_img = $sql_img->get_result();
              if($result_img->num_rows > 0){
                while ($res_img = $result_img->fetch_assoc()) {
                  $img_array = array(
                    "img_resize" => BASE_URL.$res_img['resize300'],
                    "img_fullsize" => BASE_URL.$res_img['resize800'],
                    "sizeimg_resize" => $this->func->NewgetFullsize($res_img['width'],$res_img['hight'],$widthphone),
                    "sizeimg_fullsize" => $this->func->NewgetFullsize($res_img['width'],$res_img['hight'],$widthphone),
                  );
                  $img[]=$img_array;
                }
              }else{
                $img_array = array(
                  "img_resize" => BASE_URL,
                  "img_fullsize" => BASE_URL,
                  "sizeimg_resize" => "",
                  "sizeimg_fullsize" => "",
                );
                $img[]=$img_array;
              }
              // get timeable //
              $countTime = '';
              $i = 0;
              $timeable = array();
              $sql_timeable = $this->conn->prepare("SELECT * FROM `shop_timeable` WHERE id_shop = '".$res["packet_id"]."'");
              $sql_timeable->execute();
              $result_timeable = $sql_timeable->get_result();
              while ($res_timeable = $result_timeable->fetch_assoc()) {
                // if($result_timeable->num_rows > 0){
                //
                //   $timeable_array = array(
                //       "timeable_time" => $res_timeable['time_activity'],
                //       "timeable_activity" => $res_timeable['activity'],
                //     );
                //   $timeable[]=$timeable_array;
                // }
                if($result_timeable->num_rows > 0){
                  $i++;
                  $timeable_array = array(
                    "timeable_time" => $res_timeable['time_activity'],
                    "timeable_activity" => $res_timeable['activity'],
                  );
                  $timeable[]=$timeable_array;

                  if($result_timeable->num_rows == $i){
                    $start  = date_create($timeable[0]['timeable_time']);
                    $end 	= date_create($timeable[count($timeable)-1]['timeable_time']); // Current time and date
                    $diff  	= date_diff( $start, $end );
                    $Arraytime =[
                      [$diff->y,'Year'],
                      [$diff->m,'Month'],
                      [$diff->d,'Day'],
                      [$diff->h,'Hour'],
                      [$diff->i,'min'],
                      [$diff->s,'sec'],
                    ];
                    for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                      if ($Arraytime[$i][0]!=0) {
                        $countTime = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                        break;
                      }
                    }
                  }
                }
              }
              // get price //
              $price = array();
              $sql_price = $this->conn->prepare("SELECT * FROM `shop_package_attribute` WHERE id_shop = '".$res["packet_id"]."'");
              $sql_price->execute();
              $result_price = $sql_price->get_result();
              while ($res_price = $result_price->fetch_assoc()) {
                if($result_price->num_rows > 0){
                  $price_array = array(
                    "price_type" => $res_price['id'],
                    "price_name" => $res_price['user_type'],
                    "price" => $res_price['price'],
                    "num_of_peple" => 0
                  );
                  $price[]=$price_array;
                }
              }

              // get province //
              $province = [];
              $sql_province = $this->conn->prepare("SELECT * FROM `data_province` WHERE `province_id` = '".$res["package_province"]."'");
              $sql_province->execute();
              $result_province = $sql_province->get_result();
              while ($res_province = $result_province->fetch_assoc()) {
                if($result_province->num_rows > 0){
                  $province_array = array(
                    "province_name_th" => $res_province['province_name_th'],
                    "province_name_en" => $res_province['province_name_en'],
                    "province_id" => $res_province['province_id'],
                  );
                  $province=$province_array;
                }
              }
              //get shop //
              $user = array();
              $sql_user = "SELECT * FROM `data_user_account` a
              LEFT JOIN `data_country` b on a.country_id = b.country_id
              LEFT JOIN `data_user_location` c on a.user_id = c.user
              WHERE user_id = '".$res["packet_user"]."'";
              $stmt_user = $this->conn->prepare($sql_user);
              $stmt_user->execute();
              $result_user = $stmt_user->get_result();
              while ($res_user = $result_user->fetch_assoc()) {
                if($result_user->num_rows > 0){
                  $sql_tex = "SELECT * FROM `shop_type_share` WHERE `id` = '".$res_user["shop_type_share"]."'";
                  $stmt_tex = $this->conn->prepare($sql_tex);
                  $stmt_tex->execute();
                  $result_tex = $stmt_tex->get_result();
                  while ($res_tex = $result_tex->fetch_assoc()) {
                    $tex = $res_tex["share"];
                  }
                  $start  = date_create($res_user['timeUpdate']);
                  $end 	= date_create(); // Current time and date
                  $diff  	= date_diff( $start, $end );
                  $Arraytime =[
                    [$diff->y,'years'],
                    [$diff->m,'months'],
                    [$diff->d,'d'],
                    [$diff->h,'hr'],
                    [$diff->i,'min'],
                    [$diff->s,'sec'],
                  ];
                  $time = "";
                  for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                    if ($Arraytime[$i][0]!=0) {
                      $time = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                      break;
                    }
                  }
                  //check type file if svg not convert
                  $type = explode(".",$res["country_flag_32"])[1];
                  $imgPath = '';
                  if ($type != 'svg') {
                    $imgPath = strtolower(explode("-",$res_user["country_flag_32"])[0]).'.svg';
                  }else{
                    $imgPath = $res_user["country_flag_32"];
                  }
                  //check type file if svg not convert

                  $user_array = array(
                    "country_id" => $res_user["country_id"],
                    "country_img_name" => $res_user["country_img_name"],
                    "country_img_path" => BASE_URL.'data/flags/'.$imgPath,
                    "country_name_en" => $res_user["country_name_en"],
                    "country_name_th" => $res_user["country_name_th"],
                    "user_firstname" => html_entity_decode($res_user["user_firstname"], ENT_QUOTES),
                    "user_id" => $res_user["user_id"],
                    "user_lastname" => html_entity_decode($res_user["user_lastname"], ENT_QUOTES),
                    "user_path_img" => BASE_URL.$res_user["user_path_img"],
                    "user_time" => $time . ' ago',
                  );
                  $user = $user_array;
                }
              }
              //get meeting
              $meeting = array();
              $sql_meeting = "SELECT * FROM `shop_locations_meeting` WHERE shop_id = '".$res["packet_id"]."'";
              $stmt_meeting = $this->conn->prepare($sql_meeting);
              $stmt_meeting->execute();
              $result_meeting = $stmt_meeting->get_result();
              while ($res_meeting = $result_meeting->fetch_assoc()) {
                if($result_meeting->num_rows > 0){
                  $meeting_array = array(
                    //     id_meet: 11,
                    // name_meet: "Activity location",
                    // meet_address: "Don Mueang, Bangkok, Thailand",
                    // meet_lat: 13.9213788,
                    // meet_lng: 100.5753476,
                    // meet_tyep: 1,
                    // meet_price: 0,
                    // meet_seater: 0
                    "id_meet" => $res_meeting['id'],
                    "name_meet" => $res_meeting['meet_name'],
                    "meet_address" => $res_meeting['meet_address'],
                    "meet_lat" => $res_meeting['meeting_lat'],
                    "meet_lng" => $res_meeting['meeting_lng'],
                    "meet_tyep" => $res_meeting['type'],
                    "meet_price" => $res_meeting['SeaterPrice'],
                    "meet_seater" => $res_meeting['Seater'],
                    "time_meeting" => $res_meeting['time_meeting'],
                  );
                  $meeting[]=$meeting_array;
                }
              }
              $accident = [];
              $sql_accident = $this->conn->prepare("SELECT * FROM `shop_insurance` WHERE `id_shop` = '".$res["packet_id"]."'");
              $sql_accident->execute();
              $result_accident = $sql_accident->get_result();
              while ($res_accident = $result_accident->fetch_assoc()) {
                $accident = array(
                  "accident_chooser" => false,
                  "accident_name" => 'ประกันภัย',
                  "accident_detail" => $res_accident["detail"],
                  "accident_price" => $res_accident["price"],
                );
              }
              $array = array(
                // 'packet_distant' => number_format((float)($res['distant']*2), 1, '.', ''),
                'packet_id' => $res["packet_id"],
                'tour_private' => $res["private"],
                'packet_category' => $res["cat_name"],
                'packet_name' => $res["name_package"],
                'packet_condition' => $res["conditions"],
                'packet_address' => $res["address"],
                'packet_detail' => $res["detail"],
                // 'packet_recursive' => explode(",",$res["recursive"]),
                'packet_start' => $res["date_start"],
                'packet_end' => $res["date_end"],
                'tour_start' => $res["open_tour"],
                'tour_end' => $res["close_tour"],
                'private' => $res["private"],
                'package_qly' => $res["qly"],
                'tour_type' => $res["onday_or_recur"],
                'packet_meeting' => $meeting,
                'accident' => $accident,
                // 'packet_meeting_lat' => $res["lat_meeting"],
                // 'packet_meeting_lng' => $res["long_meeting"],
                'package_price' => $price,
                'packet_tax' => $tex,
                'tag' => $tag,
                'img' => $img,
                'timeable' => $timeable,
                'user' => $user,
                'time' => $times,
                'province' => $province,
                'package_time' => $countTime,
                'package_lat' => $res["latitude"],
                'package_lng' => $res["longitude"],
                'package_room_key' => $res["package_room_key"]
              );
              $output[] = $array;
            }
            return $output;
          }







          public function get_packet($category,$widthphone,$lat,$lng,$type,$user,$tag_id) {
            if($type == 'tags'){
              if($category == ""){
                $sql = $this->conn->prepare("SELECT * ,a.id AS packet_id,a.user_id AS packet_user, (3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(c.latitude)) * COS(
                  RADIANS(c.longitude) - RADIANS($lng)) + SIN(RADIANS($lat)
                ) * SIN(RADIANS(c.latitude)))) as distant
                FROM `shop_package` a LEFT JOIN `data_booking_category` b on a.catagory_id = b.cat_id
                LEFT JOIN `shop_package_pin` c on a.id = c.id
                WHERE b.status = '1' AND `date_start` <= NOW() AND `date_end` >= NOW() AND find_in_set('".$tag_id."',`tag`) <> 0 ORDER BY distant ASC");
              }else{
                $sql = $this->conn->prepare("SELECT * ,a.id AS packet_id,a.user_id AS packet_user, (3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(c.latitude)) * COS(
                  RADIANS(c.longitude) - RADIANS($lng)) + SIN(RADIANS($lat)
                ) * SIN(RADIANS(c.latitude)))) as distant
                FROM `shop_package` a LEFT JOIN `data_booking_category` b on a.catagory_id = b.cat_id
                LEFT JOIN `shop_package_pin` c on a.id = c.id
                WHERE b.status = '1' AND `date_start` <= NOW() AND `date_end` >= NOW() AND catagory_id = $category AND find_in_set('".$tag_id."',`tag`) <> 0  ORDER BY distant ASC");
              }

            }else if($type == 'profile'){
              $sql = $this->conn->prepare("SELECT * ,a.id AS packet_id,a.user_id AS packet_user, (3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(c.latitude)) * COS(
                RADIANS(c.longitude) - RADIANS($lng)) + SIN(RADIANS($lat)
              ) * SIN(RADIANS(c.latitude)))) as distant
              FROM `shop_package` a LEFT JOIN `data_booking_category` b on a.catagory_id = b.cat_id
              LEFT JOIN `shop_package_pin` c on a.id = c.id
              WHERE a.user_id = '$user' AND b.status = '1' AND `date_start` <= NOW() AND `date_end` >= NOW()");
            }else if($type == 'getnear'){
              $sql = $this->conn->prepare("SELECT * ,a.id AS packet_id,a.user_id AS packet_user, (3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(c.latitude)) * COS(
                RADIANS(c.longitude) - RADIANS($lng)) + SIN(RADIANS($lat)
              ) * SIN(RADIANS(c.latitude)))) as distant
              FROM `shop_package` a LEFT JOIN `data_booking_category` b on a.catagory_id = b.cat_id
              LEFT JOIN `shop_package_pin` c on a.id = c.id WHERE b.status = '1' AND `date_start` <= NOW() AND `date_end` >= NOW() ORDER BY distant ASC");
            }else if($type == 'bookingagain'){
              $sql = $this->conn->prepare("SELECT * ,a.id AS packet_id,a.user_id AS packet_user, (3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(c.latitude)) * COS(
                RADIANS(c.longitude) - RADIANS($lng)) + SIN(RADIANS($lat)
              ) * SIN(RADIANS(c.latitude)))) as distant
              FROM `shop_package` a LEFT JOIN `data_booking_category` b on a.catagory_id = b.cat_id
              LEFT JOIN `shop_package_pin` c on a.id = c.id WHERE b.status = '1' AND a.id = '".$category."' AND `date_start` <= NOW() AND `date_end` >= NOW() ORDER BY distant ASC");
            }else if($type == 'search'){
              $sql = $this->conn->prepare("SELECT * ,a.id AS packet_id,a.user_id AS packet_user, (3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(c.latitude)) * COS(
                RADIANS(c.longitude) - RADIANS($lng)) + SIN(RADIANS($lat)
              ) * SIN(RADIANS(c.latitude)))) as distant
              FROM `shop_package` a LEFT JOIN `data_booking_category` b on a.catagory_id = b.cat_id
              LEFT JOIN `shop_package_pin` c on a.id = c.id
              WHERE `name_package` LIKE '%".$category."%' AND b.status = '1' AND `date_start` <= NOW() AND `date_end` >= NOW()
              ORDER BY distant ASC");
            }else{
              $sql = $this->conn->prepare("SELECT * ,a.id AS packet_id,a.user_id AS packet_user, (3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(c.latitude)) * COS(
                RADIANS(c.longitude) - RADIANS($lng)) + SIN(RADIANS($lat)
              ) * SIN(RADIANS(c.latitude)))) as distant
              FROM `shop_package` a LEFT JOIN `data_booking_category` b on a.catagory_id = b.cat_id
              LEFT JOIN `shop_package_pin` c on a.id = c.id
              WHERE catagory_id = $category AND b.status = '1' AND `date_start` <= NOW() AND `date_end` >= NOW() ORDER BY distant ASC");
            }

            $sql->execute();
            $result = $sql->get_result();
            if($result->num_rows > 0){


              while ($res = $result->fetch_assoc()) {

                // get stock
                $stock = array();
                $sql_stock = $this->conn->prepare("SELECT * FROM `shop_package_stock` WHERE `id_shop_package` = '".$res["packet_id"]."'");
                $sql_stock->execute();
                $result_stock = $sql_stock->get_result();
                if($result_stock->num_rows > 0){
                  while ($res_stock = $result_stock->fetch_assoc()) {
                    $array = array(
                      "date" => $res_stock["date"],
                      "qly" => $res_stock["qly"],
                      "balance" => $res_stock["balance"],
                    );
                    $stock[] = $array;
                  }
                }

                // get tag //
                $tag = array();
                $sql_tag = $this->conn->prepare("SELECT * FROM `data_tag` WHERE tag_id IN (".$res["tag"].")");
                $sql_tag->execute();
                $result_tag = $sql_tag->get_result();
                while ($res_tag = $result_tag->fetch_assoc()) {
                  if($result_tag->num_rows > 0){
                    $tag_array = array(
                      "tag_id" => $res_tag['tag_id'],
                      "tag_name" => $res_tag['tag_name'],
                    );
                    $tag[]=$tag_array;
                  }
                }
                // get img //
                $img = array();
                $sql_img = $this->conn->prepare("SELECT * FROM `shop_img` WHERE id_shop = '".$res["packet_id"]."'");
                $sql_img->execute();
                $result_img = $sql_img->get_result();
                if($result_img->num_rows > 0){
                  while ($res_img = $result_img->fetch_assoc()) {
                    $img_array = array(
                      "img_resize" => BASE_URL.$res_img['resize300'],
                      "img_fullsize" => BASE_URL.$res_img['resize800'],
                      "sizeimg_resize" => $this->func->NewgetFullsize($res_img['width'],$res_img['hight'],$widthphone),
                      "sizeimg_fullsize" => $this->func->NewgetFullsize($res_img['width'],$res_img['hight'],$widthphone),
                    );
                    $img[]=$img_array;
                  }
                }else{
                  $img_array = array(
                    "img_resize" => BASE_URL,
                    "img_fullsize" => BASE_URL,
                    "sizeimg_resize" => "",
                    "sizeimg_fullsize" => "",
                  );
                  $img[]=$img_array;
                }
                // get timeable //
                $timeable = array();
                $sql_timeable = $this->conn->prepare("SELECT * FROM `shop_timeable` WHERE id_shop = '".$res["packet_id"]."'");
                $sql_timeable->execute();
                $result_timeable = $sql_timeable->get_result();
                while ($res_timeable = $result_timeable->fetch_assoc()) {
                  if($result_timeable->num_rows > 0){
                    $timeable_array = array(
                      "timeable_time" => $res_timeable['time_activity'],
                      "timeable_activity" => $res_timeable['activity'],
                    );
                    $timeable[]=$timeable_array;
                  }
                }
                // get price //
                $price = array();
                $sql_price = $this->conn->prepare("SELECT * FROM `shop_package_attribute` WHERE id_shop = '".$res["packet_id"]."'");
                $sql_price->execute();
                $result_price = $sql_price->get_result();
                while ($res_price = $result_price->fetch_assoc()) {
                  if($result_price->num_rows > 0){
                    $price_array = array(
                      "price_type" => $res_price['id'],
                      "price_name" => $res_price['user_type'],
                      "price" => $res_price['price'],
                      "num_of_peple" => 0
                    );
                    $price[]=$price_array;
                  }
                }
                //get shop //
                $user = array();
                $sql_user = "SELECT * FROM `data_user_account` a
                LEFT JOIN `data_country` b on a.country_id = b.country_id
                LEFT JOIN `data_user_location` c on a.user_id = c.user
                WHERE user_id = '".$res["packet_user"]."'";
                $stmt_user = $this->conn->prepare($sql_user);
                $stmt_user->execute();
                $result_user = $stmt_user->get_result();
                while ($res_user = $result_user->fetch_assoc()) {
                  if($result_user->num_rows > 0){
                    $sql_tex = "SELECT * FROM `shop_type_share` WHERE `id` = '".$res_user["shop_type_share"]."'";
                    $stmt_tex = $this->conn->prepare($sql_tex);
                    $stmt_tex->execute();
                    $result_tex = $stmt_tex->get_result();
                    while ($res_tex = $result_tex->fetch_assoc()) {
                      $tex = $res_tex["share"];
                    }
                    $start  = date_create($res_user['timeUpdate']);
                    $end 	= date_create(); // Current time and date
                    $diff  	= date_diff( $start, $end );
                    $Arraytime =[
                      [$diff->y,'years'],
                      [$diff->m,'months'],
                      [$diff->d,'d'],
                      [$diff->h,'hr'],
                      [$diff->i,'min'],
                      [$diff->s,'sec'],
                    ];
                    $time = "";
                    for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                      if ($Arraytime[$i][0]!=0) {
                        $time = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                        break;
                      }
                    }

                    //check type file if svg not convert
                    $type = explode(".",$res["country_flag_32"])[1];
                    $imgPath = '';
                    if ($type != 'svg') {
                      $imgPath = strtolower(explode("-",$res_user["country_flag_32"])[0]).'.svg';
                    }else{
                      $imgPath = $res_user["country_flag_32"];
                    }
                    //check type file if svg not convert

                    $user_array = array(
                      "country_id" => $res_user["country_id"],
                      "country_img_name" => $res_user["country_img_name"],
                      "country_img_path" => BASE_URL.'data/flags/'.$imgPath,
                      "country_name_en" => $res_user["country_name_en"],
                      "country_name_th" => $res_user["country_name_th"],
                      "user_firstname" => html_entity_decode($res_user["user_firstname"], ENT_QUOTES),
                      "user_id" => $res_user["user_id"],
                      "user_lastname" => html_entity_decode($res_user["user_lastname"], ENT_QUOTES),
                      "user_path_img" => BASE_URL.$res_user["user_path_img"],
                      "user_time" => $time . ' ago',
                    );
                    $user[] = $user_array;
                  }
                }
                //get meeting
                $meeting = array();
                $sql_meeting = "SELECT * FROM `shop_locations_meeting` WHERE shop_id = '".$res["packet_id"]."'";
                $stmt_meeting = $this->conn->prepare($sql_meeting);
                $stmt_meeting->execute();
                $result_meeting = $stmt_meeting->get_result();
                while ($res_meeting = $result_meeting->fetch_assoc()) {
                  if($result_meeting->num_rows > 0){
                    $meeting_array = array(
                      "id_meet" => $res_meeting['id'],
                      "name_meet" => $res_meeting['meet_name'],
                      "meet_address" => $res_meeting['meet_address'],
                      "meet_lat" => $res_meeting['meeting_lat'],
                      "meet_lng" => $res_meeting['meeting_lng'],
                    );
                    $meeting[]=$meeting_array;
                  }
                }

                $array = array(
                  'packet_distant' => number_format((float)($res['distant']*2), 1, '.', ''),
                  'packet_id' => $res["packet_id"],
                  'packet_category' => $res["cat_name"],
                  'packet_name' => $res["name_package"],
                  'packet_condition' => $res["conditions"],
                  'packet_address' => $res["detail"],
                  'packet_province' => '',
                  'packet_detail' => $res["detail"],
                  'packet_recursive' => explode(",",$res["recursive"]),
                  'packet_start' => $res["date_start"],
                  'packet_end' => $res["date_end"],
                  'tour_start' => $res["open_tour"],
                  'tour_end' => $res["close_tour"],
                  'tour_type' => $res["onday_or_recur"],
                  'packet_meeting' => $meeting,
                  // 'packet_meeting_lat' => $res["lat_meeting"],
                  // 'packet_meeting_lng' => $res["long_meeting"],
                  'packet_price' => $price,
                  'packet_tax' => $tex,
                  'tag' => $tag,
                  'img' => $img,
                  'timeable' => $timeable,
                  'user' => $user,
                  'time' => $stock
                );
                $output[] = $array;

              }
              return $output;
            }else{
              return NULL;
            }
          }

          function get_noti($user_id,$widthphone,$lat,$long,$numLoad) {
            $output = [];
            $LoadMoreLimit = 50;
            // echo "SELECT * FROM `data_user_notification` WHERE `noti_user_ owner` = '$user_id' ORDER BY `noti_time` DESC LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
            // echo "SELECT * FROM `data_user_notification` WHERE `noti_user_ owner` = '$user_id' ORDER BY `noti_time` DESC LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
            $stmt = $this->conn->prepare("SELECT * FROM `data_user_notification` WHERE `noti_user_ owner` = '$user_id' ORDER BY `noti_time` DESC LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit");
            $stmt->execute();
            $result = $stmt->get_result();
            $i = 0;
            if($result->num_rows > 0){
              while($res = $result->fetch_assoc())
              {
                if($res["noti_type"] == '2' || $res["noti_type"] == '3'){
                  $post = array(
                    'photo_caption' => ''
                  );
                }else{
                  if($res["noti_type_user"] == '1'){
                    $post = $this->getDatafeed($user_id,'1','0',$widthphone,$res['noti_post_id'],'notification',$lat,$long,'','','');
                  }else{
                    $sqlTour = "SELECT a.* , b.province_name_en , d.*, (
                      3959
                      * ACOS( COS(RADIANS($lat))
                      * COS(RADIANS(a.attraction_lat))
                      * COS(RADIANS(a.attraction_long)- RADIANS($long))
                      + SIN(RADIANS($lat))
                      * SIN(RADIANS(a.attraction_lat)))) as distant
                      FROM `data_attraction` a
                      LEFT JOIN data_province b on a.province_id = b.province_id
                      LEFT JOIN data_attraction_img d on a.attraction_id = d.attraction_id
                      WHERE a.picture_file_path != '' AND d.attraction_img_status = 1
                      AND a.attraction_id = '".$res['noti_post_id']."'";
                      // echo $sqlTour;
                      // exit();
                      $stmttour = $this->conn->prepare($sqlTour);
                      $stmttour->execute();
                      $resulttour = $stmttour->get_result();
                      if($resulttour->num_rows > 0){
                        $stmttour->close();
                        $outputtour = array();

                        while($resTAT = $resulttour->fetch_assoc())
                        {
                          $typeTatName = '';
                          $typeLo= explode(',' , $resTAT['attraction_categories']);
                          // echo "SELECT * FROM data_TypeLocation WHERE TypeLocation_id = '".$typeLo[0]."'";
                          $sqldata = $this->conn->prepare("SELECT * FROM data_TypeLocation WHERE TypeLocation_id = '".$typeLo[0]."'");
                          $sqldata->execute();
                          $resultdata = $sqldata->get_result();
                          while($resdata = $resultdata->fetch_assoc())
                          {
                            $typeTatName=$resdata['TypeLocation_name'];
                          }

                          $comment = "";
                          $timecomment = "";
                          $userId = "";
                          $sumComment = "";
                          $fullNameComment = "";
                          $user_comment_img = "";



                          /*** check your comment in post ***/
                          $status_comment_sql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                          WHERE user_status = 1 AND  com_photo_id = '".$resTAT["attraction_id"]."' and com_status != 1 and com_type = 'TAT ' and com_user_id = '$user_id' ORDER BY com_no DESC";
                          $stmtStatusComment = $this->conn->prepare($status_comment_sql);
                          $stmtStatusComment->execute();
                          $resultStatusComment = $stmtStatusComment->get_result();
                          $status_comment = false;
                          if ($resultStatusComment->num_rows>0) {
                            $status_comment = true;
                          }
                          $stmtStatusComment->close();
                          /*** check your comment in post ***/


                          $commentsql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                          WHERE user_status = 1 AND  com_photo_id = '".$resTAT["attraction_id"]."' and com_status != 1 and com_type = 'TAT' ORDER BY com_no DESC";
                          // exit();
                          $stmtComment = $this->conn->prepare($commentsql);
                          $stmtComment->execute();
                          $resultComment = $stmtComment->get_result();
                          $sumComment = $resultComment->num_rows;

                          if($resultComment->num_rows > 0){
                            while($resComment = $resultComment->fetch_assoc()){
                              $comment = $resComment['com_comment'];
                              $userId = $resComment['com_user_id'];
                              $user_comment_img = $resComment['user_path_img'];
                              $start  = date_create($resComment['com_date_comment']);
                              $end 	= date_create(); // Current time and date
                              $diff  	= date_diff( $start, $end );
                              $Arraytime =[
                                [$diff->y,'years'],
                                [$diff->m,'months'],
                                [$diff->d,'d'],
                                [$diff->h,'hr'],
                                [$diff->i,'min'],
                                [$diff->s,'sec'],
                              ];
                              $fullNameComment = $resComment['user_firstname'] . " " . $resComment['user_lastname'];
                              for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                                if ($Arraytime[$i][0]!=0) {
                                  if($Arraytime[$i][1] == 'sec'){
                                    $timecomment = '1 min';
                                  }else{
                                    $timecomment = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                                  }
                                  break;
                                }
                              }
                              break;
                            }
                          }
                          $imgresize = [];
                          $video = array(
                            'path_full' => BASE_URL.$resTAT['attraction_img_path'],
                            'path_resize' => BASE_URL.$resTAT['attraction_img_path'],
                            'path_height' => $this->func->NewgetFullsize($resTAT['photo_width'],$resTAT['photo_height'],$widthphone),
                            'number' => 1,
                            'type' => 1,
                          );
                          $imgresize[] = $video;

                          $sql2="SELECT * FROM photo_like_tat where tat_user_id = '".$user_id."' and tat_post_id = '".$resTAT["attraction_id"]."'";
                          $stmt2 = $this->conn->prepare($sql2);
                          $stmt2->execute();
                          $result2 = $stmt2->get_result();
                          $status_like = false;

                          if ($result2->num_rows>0) {
                            $status_like = true;
                          }
                          $sum_like = $this->count_number('photo_like_tat','tat_post_id',$resTAT['attraction_id']);
                          $imgLike = [];
                          $likeSql = $this->conn->prepare("SELECT * FROM photo_like_tat LEFT JOIN data_user_account on photo_like_tat.tat_user_id = data_user_account.user_id WHERE tat_post_id = '".$resTAT['attraction_id']."'");
                          $likeSql->execute();
                          $resultLike = $likeSql->get_result();
                          while($resLike = $resultLike->fetch_assoc())
                          {
                            array_push($imgLike,"https://www.myadventureearth.com/".$resLike['user_path_img']);
                          }
                          $sql2="SELECT * FROM data_photo_bookmark where photo_id = '".$resTAT['attraction_id']."' and user_id='".$user_id."' and post_type = '2'";
                          $stmt2 = $this->conn->prepare($sql2);
                          $stmt2->execute();
                          $result2 = $stmt2->get_result();
                          $status_bookmark = false;
                          if ($result2->num_rows>0) {
                            $status_bookmark = true;
                          }

                          if ($resTAT['attraction_img_path']!="" && $typeLo[0] !="") {
                            $distant_de = number_format((float)($resTAT['distant']*2), 1, '.', '');
                            if($distant_de < 10){
                              $dis = $distant_de;
                            }else{
                              $dis = number_format((float)($resTAT['distant']*2), 0, '.', '');
                            }


                            $response = array(
                              "distant" => $dis,
                              "user_id" => 'TAT',
                              "checkshow" => 0,
                              "checkCard" => 0,
                              'hashtag'=> $resTAT['attraction_name'],
                              "photo_id" => $resTAT['attraction_id'],
                              "photo_caption" => html_entity_decode($resTAT['attraction_name']),
                              "photo_location" => $resTAT['attraction_address'],
                              "photo_locationText" => $resTAT['attraction_address'],
                              "photo_la" => $resTAT['attraction_lat'],
                              "photo_long" => $resTAT['attraction_long'],
                              "photo_share" => '',
                              "TypeLocation_id" => $typeLo[0],
                              "TypeLocation_name" => $typeTatName,
                              "photo_province" => $resTAT['province_name_en'],
                              // 'time'=>$time,
                              "user_firstname" => 'Tourism Authority of Thailand',
                              "user_lastname" => '',
                              "user_path_img" => 'https://myadventureearth.com/api/v1/img/tat.jpg',
                              "country_name_th" => 'ประเทศไทย',
                              "country_name_en" => 'Thailand',
                              "feeling_id" => '',
                              "feeling_name" => '',
                              "photo_img" => BASE_URL.$resTAT['attraction_img_path'],
                              "photo_img_Full" => BASE_URL.$resTAT['attraction_img_path'],
                              "user_img" => 'https://myadventureearth.com/api/v1/img/tat.jpg',
                              "sum_like" => '0',
                              "followers" => '',
                              "following" => '',
                              "status_like" => $status_like,
                              "status_bookmark"=>'true',
                              'linkshared'=>BASE_URL_WEB.'ShearTAT.php?method=share&user=tat&id='.$resTAT['attraction_id'],
                              'sizeheight'=>$this->func->Newgetsize($resTAT['photo_width'],$resTAT['photo_height'],$widthphone),
                              'sizeFullheight'=>$this->func->NewgetFullsize($resTAT['photo_width'],$resTAT['photo_height'],$widthphone),
                              'numtype'=>$numLoad,
                              'positionY'=>$resTAT['photo_height'],
                              'nameLocation'=>$resTAT['attraction_address'],
                              'distance'=>'',
                              // 'room_name'=>$this->get_room_name($user_id,$res['user_id'])."",
                              'hashtag'=>$resTAT['attraction_name'],
                              'status_show'=>true,
                              'pictureResize'=>$imgresize,
                              "comment" => $comment,
                              "comment_user_img" => BASE_URL.$user_comment_img,
                              "userIdComment" => $userId,
                              "timeComment" => $timecomment,
                              "status_comment" => $status_comment,
                              "countComment" => $sumComment,
                              "fulnameComment" => $fullNameComment,
                              "comment_key" => $resTAT['key_room'],
                              "imageLike" => $imgLike,
                              "sum_like" => $sum_like,
                              "status_bookmark"=>$status_bookmark,
                            );
                            $post[0][] = $response;
                            // print_r($post);
                          }
                        }
                      }
                    }
                  }
                  $user = array();
                  $sql_user = "SELECT * FROM `data_user_account` a
                  LEFT JOIN `data_country` b on a.country_id = b.country_id
                  LEFT JOIN `data_user_location` c on a.user_id = c.user
                  WHERE user_id = '".$res["noti_user_doer"]."'";
                  $stmt_user = $this->conn->prepare($sql_user);
                  $stmt_user->execute();
                  $result_user = $stmt_user->get_result();

                  while ($res_user = $result_user->fetch_assoc()) {
                    if($result_user->num_rows > 0){

                      //check type file if svg not convert
                      $type = explode(".",$res_user["country_flag_32"])[1];
                      $imgPath = '';
                      if ($type != 'svg') {
                        $imgPath = strtolower(explode("-",$res_user["country_flag_32"])[0]).'.svg';
                      }else{
                        $imgPath = $res_user["country_flag_32"];
                      }
                      //check type file if svg not convert


                      $user_array = array(
                        "country_id" => $res_user["country_id"],
                        "country_img_name" => $res_user["country_img_name"],
                        "country_img_path" => BASE_URL.'data/flags/'.$imgPath,
                        "country_name_en" => $res_user["country_name_en"],
                        "country_name_th" => $res_user["country_name_th"],
                        "user_firstname" => html_entity_decode($res_user["user_firstname"], ENT_QUOTES),
                        "user_id" => $res_user["user_id"],
                        "user_lastname" => html_entity_decode($res_user["user_lastname"], ENT_QUOTES),
                        "user_path_img" => BASE_URL.$res_user["user_path_img"]
                      );
                      $user[] = $user_array;
                    }
                  }
                  $start  = date_create($res['noti_time']);
                  $end 	= date_create(); // Current time and date
                  $diff  	= date_diff( $start, $end );
                  $Arraytime =[
                    [$diff->y,'years'],
                    [$diff->m,'months'],
                    [$diff->d,'d'],
                    [$diff->h,'hr'],
                    [$diff->i,'min'],
                    [$diff->s,'sec'],
                  ];
                  $time = "";
                  for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                    if ($Arraytime[$i][0]!=0) {
                      $time = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                      break;
                    }
                  }
                  if(count($user) != 0){
                    $array = array(
                      'post' => $post,
                      'user' => $user[0],
                      'time' => $time,
                      'detail' => $res["noti_detail"],
                      'noti_post_id' => $res["noti_post_id"],
                      'noti_type' => $res["noti_type"],
                      'noti_read' => $res["noti_read"],
                      'noti_id' => $res["noti_id"],
                      'noti_time' => $res["noti_time"],
                      "noti_read_all" => $res["noti_read_all"],
                    );
                    if($post != null){
                      $output[] = $array;
                    }
                  }
                }
                return $output;
              }else{
                return NULL;
              }
            }


            function payment($meeting_hotel,$packet_peple,$email,$user_id,$packet_id,$packet_qly,$packet_total_price,$packet_cos_priec,$packet_tax_priec,$packet_date_select,$fullname,$tel,
            $country,$type_pament,$id_meet,$accident_chooser) {
              $dt = new DateTime($packet_date_select);
              $date = $dt->format('Y-m-d');
              $sql = $this->conn->prepare("SELECT * FROM `shop_booking` WHERE `booking_date` = '$packet_date_select' AND `statuspayment` = '0'");
              $sql->execute();
              $result = $sql->get_result();
              while($res = $result->fetch_assoc())
              {
                $tiem2 = strtotime(date('Y-m-d H:i:s'));
                $tiem = strtotime($res["date"]);
                if((Int)(($tiem2 - $tiem)/60) > 60){
                  $sql_update = "UPDATE `shop_package_stock` SET `balance` = `balance` + ".$res["qly"]." WHERE `id_shop_package` = '$packet_id' AND `date` LIKE '$date%'";
                  $sql_update = $this->conn->prepare($sql_update);
                  $sql_update->execute();
                  $sql_update_booking = "UPDATE `shop_booking` SET `statuspayment` = '2' WHERE `id` = '".$res["id"]."'";
                  $sql_update_booking = $this->conn->prepare($sql_update_booking);
                  $sql_update_booking->execute();
                }
              }
              $sql = "UPDATE `shop_package_stock` SET `balance` = `balance` - $packet_qly WHERE `id_shop_package` = '$packet_id' AND `date` LIKE '$date%'";
              $command = htmlspecialchars($sql, ENT_QUOTES);
              $datee = new DateTime();
              $timestamp = $datee->getTimestamp();
              $sql_log = $this->conn->prepare("INSERT INTO `Log_sql_stock` (`log_sql`, `log_date` , `log_timesamp`) VALUES ('$command', NOW(), '$timestamp')");
              $sql_log->execute();
              $sql = $this->conn->prepare($sql);
              if($sql->execute()){
                // get stock
                $stock = array();
                $sql_stock = $this->conn->prepare("SELECT * FROM `shop_package_stock` WHERE `id_shop_package` = '".$res["id"]."'");
                $sql_stock->execute();
                $result_stock = $sql_stock->get_result();
                if($result_stock->num_rows > 0){
                  while ($res_stock = $result_stock->fetch_assoc()) {
                    $array = array(
                      "date" => $res_stock["date"],
                      "qly" => $res_stock["qly"],
                      "balance" => $res_stock["balance"],
                    );
                    $stock[] = $array;
                  }
                }
                $ran = $this->random_forg();
                $keyr = $this->random_forgkey();
                $key = ceil((1+(Int)$keyr)/2);
                $orderdate = date('y-m-d');
                $exorder = explode('-',$orderdate);
                $ordercode = "AE".$exorder[0].$exorder[1].$exorder[2].$ran.$key;

                $sql_packet = $this->conn->prepare("SELECT * ,a.id AS packet_id,a.user_id AS packet_user
                  FROM `shop_package` a LEFT JOIN `data_booking_category` b on a.catagory_id = b.cat_id
                  LEFT JOIN `shop_package_pin` c on a.id = c.id
                  LEFT JOIN `data_user_account` d on a.user_id = d.user_id
                  LEFT JOIN `shop_type_share` e on d.shop_type_share = e.id
                  WHERE a.id = '$packet_id'");
                  $sql_packet->execute();
                  $result_packet = $sql_packet->get_result();
                  while($res_packet = $result_packet->fetch_assoc())
                  {
                    $commission = ($packet_cos_priec / 100) * $res_packet["share"];
                    // $sql_in = "INSERT INTO `shop_booking`
                    // (`booking_code`, `user_id`, `id_user_booking`, `shop_id`, `namepackage`, `qly`, `catagory_id`,
                    //   `price`, `date_start`, `date_end`, `detail`, `tage`, `feeling`, `statuspayment`, `date`, `booking_fullname`,
                    //   `booking_email`, `booking_tel`, `booking_country`, `booking_date`, `booking_peple` , `booking_payment`, `booking_tax`, `booking_cos`, `booking_commission`,
                    //    `booking_share_commission`, `booking_accident`, `booking_conditions`, `booking_meeting`, `meeting_lat`, `meeting_lng`, `book_meeting_location`) VALUES
                    //   ('$ordercode', '".$res_packet["user_id"]."', '$user_id', '$packet_id', '".$res_packet["name_package"]."', '$packet_qly', '".$res_packet["catagory_id"]."',
                    //     '$packet_total_price', '".$res_packet["date_start"]."', '".$res_packet["date_end"]."', '".htmlspecialchars($res_packet["detail"], ENT_QUOTES)."', '".$res_packet["tag"]."',
                    //     '', '', NOW(), '$fullname', '$email', '$tel', '$country', '$packet_date_select', '$packet_peple', '$type_pament','$packet_text_priec',
                    //     '$packet_cos_priec', '$commission', '".$res_packet["share"]."','$accident', '$condition','$packet_meeting' , '$meet_lat' , '$meet_lng', '$meet_address')";
                    //   $sql_in = $this->conn->prepare($sql_in);
                    //   $sql_in->execute();
                    $sql_in = "INSERT INTO `shop_bookings` (`Booking_Code`, `Package_ID`, `Booking_Date`, `Booking_User_ID`, `Booking_Fullname`,
                      `Booking_Email`, `Booking_Tel`, `Booking_Country`, `Booking_Guest`, `Booking_Qly`, `Booking_Cos`, `Booking_Tax`, `Booking_Price`, `Booking_Com`
                      , `Booking_Shard`, `Booking_Payment_Type`, `Booking_Payment_Status`, `Accident_Status`, `Meeting_ID`, `Meeting_Hotel`) VALUES
                      ('$ordercode', '$packet_id', '$packet_date_select', '$user_id', '$fullname', '$email', '$tel', '$country', '$packet_peple', '$packet_qly', '$packet_cos_priec'
                        , '$packet_tax_priec', '$packet_total_price', '$commission', '".$res_packet["share"]."', '$type_pament', '0', '$accident_chooser', '$id_meet', '$meeting_hotel')";
                        $sql_in = $this->conn->prepare($sql_in);
                        $sql_in->execute();
                        $sql_log = "INSERT INTO `log_payment` ( `payment_name`, `payment_price`, `payment_code`,`payment_type`,
                          `payment_date`, `payment_status`) VALUES
                          ('-', '$packet_total_price', '$ordercode', '$type_pament', NOW(), '0')";
                          $sql_log = $this->conn->prepare($sql_log);
                          $sql_log->execute();
                          $array = array(
                            'orderID' => $ordercode
                          );
                          return $array;
                        }
                      }else{
                        return 1;
                      }
                    }

                    function random_forg( $length = 6 ) {
                      $chars = "1234567890";
                      $password = substr( str_shuffle( $chars ), 0, $length );
                      return $password;
                    }
                    function random_forgkey( $length = 1 ) {
                      $chars = "1234567890";
                      $password = substr( str_shuffle( $chars ), 0, $length );
                      return $password;
                    }

                    function get_booking($user_id,$widthphone) {
                      $sql = "SELECT *,b.id as pack_id FROM `shop_bookings`a LEFT JOIN `shop_package` b on a.Package_ID = b.id
                      LEFT JOIN `shop_package_pin` as spp on b.id = spp.id_shop
                      LEFT JOIN `data_booking_category` c on b.catagory_id = c.cat_id
                      LEFT JOIN `shop_package_rate` d on a.Booking_Code = d.Rate_Booking_Code
                      WHERE `Booking_User_ID` = '$user_id' ORDER BY `Booking_Time` DESC";
                      $stm = $this->conn->prepare($sql);
                      $stm->execute();
                      $result = $stm->get_result();
                      if($result->num_rows > 0){
                        while($res = $result->fetch_assoc())
                        {
                          // get stock
                          $stock = array();
                          $sql_stock = $this->conn->prepare("SELECT * FROM `shop_package_stock` WHERE `id_shop_package` = '".$res["pack_id"]."'");
                          $sql_stock->execute();
                          $result_stock = $sql_stock->get_result();
                          if($result_stock->num_rows > 0){
                            while ($res_stock = $result_stock->fetch_assoc()) {
                              $array = array(
                                "date" => $res_stock["date"],
                                "qly" => $res_stock["qly"],
                                "balance" => $res_stock["balance"],
                              );
                              $stock[] = $array;
                            }
                          }
                          // get img //
                          $img = array();
                          $sql_img = $this->conn->prepare("SELECT * FROM `shop_img` WHERE id_shop = '".$res["pack_id"]."'");
                          $sql_img->execute();
                          $result_img = $sql_img->get_result();
                          if($result_img->num_rows > 0){
                            while ($res_img = $result_img->fetch_assoc()) {
                              $img_array = array(
                                "img_resize" => BASE_URL.$res_img['resize300'],
                                "img_fullsize" => BASE_URL.$res_img['resize800'],
                                "sizeimg_resize" => $this->func->NewgetFullsize($res_img['width'],$res_img['hight'],$widthphone),
                                "sizeimg_fullsize" => $this->func->NewgetFullsize($res_img['width'],$res_img['hight'],$widthphone),
                              );
                              $img[]=$img_array;
                            }
                          }else{
                            $img_array = array(
                              "img_resize" => BASE_URL,
                              "img_fullsize" => BASE_URL,
                              "sizeimg_resize" => "",
                              "sizeimg_fullsize" => "",
                            );
                            $img[]=$img_array;
                          }

                          // get timeable //
                          $countTime = '';
                          $i = 0;
                          $timeable = array();
                          $sql_timeable = $this->conn->prepare("SELECT * FROM `shop_timeable` WHERE id_shop = '".$res["pack_id"]."'");
                          $sql_timeable->execute();
                          $result_timeable = $sql_timeable->get_result();
                          while ($res_timeable = $result_timeable->fetch_assoc()) {
                            if($result_timeable->num_rows > 0){
                              $i++;
                              $timeable_array = array(
                                "timeable_time" => $res_timeable['time_activity'],
                                "timeable_activity" => $res_timeable['activity'],
                              );
                              $timeable[]=$timeable_array;

                              if($result_timeable->num_rows == $i){
                                $start  = date_create($timeable[0]['timeable_time']);
                                $end 	= date_create($timeable[count($timeable)-1]['timeable_time']); // Current time and date
                                $diff  	= date_diff( $start, $end );
                                $Arraytime =[
                                  [$diff->y,'Year'],
                                  [$diff->m,'Month'],
                                  [$diff->d,'Day'],
                                  [$diff->h,'Hour'],
                                  [$diff->i,'min'],
                                  [$diff->s,'sec'],
                                ];
                                for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                                  if ($Arraytime[$i][0]!=0) {
                                    $countTime = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                                    break;
                                  }
                                }
                              }
                            }
                          }
                          // get price //
                          $price = array();
                          $sql_price = $this->conn->prepare("SELECT * FROM `shop_package_attribute` WHERE id_shop = '".$res["pack_id"]."'");
                          $sql_price->execute();
                          $result_price = $sql_price->get_result();
                          while ($res_price = $result_price->fetch_assoc()) {
                            if($result_price->num_rows > 0){
                              $price_array = array(
                                "price_type" => $res_price['id'],
                                "price_name" => $res_price['user_type'],
                                "price" => $res_price['price'],
                                "num_of_peple" => 0
                              );
                              $price[]=$price_array;
                            }
                          }

                          // get province //
                          $province = [];
                          $sql_province = $this->conn->prepare("SELECT * FROM `data_province` WHERE `province_id` = '".$res["package_province"]."'");
                          $sql_province->execute();
                          $result_province = $sql_province->get_result();
                          while ($res_province = $result_province->fetch_assoc()) {
                            if($result_province->num_rows > 0){
                              $province_array = array(
                                "province_name_th" => $res_province['province_name_th'],
                                "province_name_en" => $res_province['province_name_en'],
                                "province_id" => $res_province['province_id'],
                              );
                              $province = $province_array;
                            }
                          }

                          $accident = [];
                          $sql_accident = $this->conn->prepare("SELECT * FROM `shop_insurance` WHERE `id_shop` = '".$res["pack_id"]."'");
                          $sql_accident->execute();
                          $result_accident = $sql_accident->get_result();
                          while ($res_accident = $result_accident->fetch_assoc()) {
                            $accident = array(
                              "accident_chooser" => false,
                              "accident_name" => 'ประกันภัย',
                              "accident_detail" => $res_accident["detail"],
                              "accident_price" => $res_accident["price"],
                            );
                          }

                          //get meeting
                          $meeting = array();
                          $sql_meeting = "SELECT * FROM `shop_locations_meeting` WHERE shop_id = '".$res["pack_id"]."'";
                          $stmt_meeting = $this->conn->prepare($sql_meeting);
                          $stmt_meeting->execute();
                          $result_meeting = $stmt_meeting->get_result();
                          while ($res_meeting = $result_meeting->fetch_assoc()) {
                            if($result_meeting->num_rows > 0){
                              $meeting_array = array(
                                "id_meet" => $res_meeting['id'],
                                "name_meet" => $res_meeting['meet_name'],
                                "meet_address" => $res_meeting['meet_address'],
                                "meet_lat" => $res_meeting['meeting_lat'],
                                "meet_lng" => $res_meeting['meeting_lng'],
                                "meet_tyep" => $res_meeting['type'],
                                "meet_price" => $res_meeting['SeaterPrice'],
                                "meet_seater" => $res_meeting['Seater'],
                                "time_meeting" => $res_meeting['time_meeting'],
                              );
                              $meeting[]=$meeting_array;
                            }
                          }


                          $tag = array();
                          // $sql_tag = $this->conn->prepare("SELECT * FROM `data_tag` WHERE tag_id IN (".$res["tag"].")");
                          // $sql_tag->execute();
                          // $result_tag = $sql_tag->get_result();
                          // while ($res_tag = $result_tag->fetch_assoc()) {
                          //   if($result_tag->num_rows > 0){
                          //     $tag_array = array(
                          //         "tag_id" => $res_tag['tag_id'],
                          //         "tag_name" => $res_tag['tag_name'],
                          //     );
                          //     $tag[]=$tag_array;
                          //   }
                          // }
                          $user = array();
                          $sql_user = "SELECT * FROM `data_user_account` a
                          LEFT JOIN `data_country` b on a.country_id = b.country_id
                          LEFT JOIN `data_user_location` c on a.user_id = c.user
                          WHERE user_id = '".$res["user_id"]."'";
                          $stmt_user = $this->conn->prepare($sql_user);
                          $stmt_user->execute();
                          $result_user = $stmt_user->get_result();
                          while ($res_user = $result_user->fetch_assoc()) {
                            if($result_user->num_rows > 0){
                              $start  = date_create($res_user['timeUpdate']);
                              $end 	= date_create(); // Current time and date
                              $diff  	= date_diff( $start, $end );
                              $Arraytime =[
                                [$diff->y,'years'],
                                [$diff->m,'months'],
                                [$diff->d,'d'],
                                [$diff->h,'hr'],
                                [$diff->i,'min'],
                                [$diff->s,'sec'],
                              ];
                              $time = "";
                              for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                                if ($Arraytime[$i][0]!=0) {
                                  $time = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                                  break;
                                }
                              }

                              //check type file if svg not convert
                              $type = explode(".",$res["country_flag_32"])[1];
                              $imgPath = '';
                              if ($type != 'svg') {
                                $imgPath = strtolower(explode("-",$res_user["country_flag_32"])[0]).'.svg';
                              }else{
                                $imgPath = $res_user["country_flag_32"];
                              }
                              //check type file if svg not convert

                              $user_array = array(
                                "country_id" => $res_user["country_id"],
                                "country_img_name" => $res_user["country_img_name"],
                                "country_img_path" => BASE_URL.'data/flags/'.$imgPath,
                                "store_telephone" => $res_user["store_telephone"],
                                "country_name_en" => $res_user["country_name_en"],
                                "country_name_th" => $res_user["country_name_th"],
                                "user_firstname" => html_entity_decode($res_user["user_firstname"], ENT_QUOTES),
                                "user_id" => $res_user["user_id"],
                                "user_lastname" => html_entity_decode($res_user["user_lastname"], ENT_QUOTES),
                                "user_path_img" => BASE_URL.$res_user["user_path_img"],
                                "user_type" => $res_user["user_shop"],
                                "user_time" => $time . ' ago'
                              );
                              $user[] = $user_array;
                            }

                          }
                          if(count($user) == 0){
                            $user = [];
                          }else{
                            $user = $user[0];
                          }
                          // $array = array(
                          //   "booking_id" => $res["Booking_ID"],
                          //   "booking_code_order" => $res["Booking_Code"],
                          //   "booking_name" => $res["name_package"],
                          //   "booking_category" => $res["cat_name"],
                          //   "booking_tag" => $tag,
                          //   "booking_shop" => $user,
                          //   "booking_date" => $res["Booking_Date"],
                          //   "booking_status" => $res["Booking_Payment_Status"],
                          //   "booking_detail" => $res["detail"],
                          //   "package_rate" => $rate
                          // );

                          $array = array(
                            "booking_id" => $res["Booking_ID"],
                            "booking_code_order" => $res["Booking_Code"],
                            "booking_name" => $res["name_package"],
                            "booking_category" => $res["cat_name"],
                            "booking_tag" => $tag,
                            "booking_date" => $res["Booking_Date"],
                            "booking_status" => $res["Booking_Payment_Status"],
                            "booking_detail" => $res["detail"],
                            "booking_Meeting_ID" => $res["Meeting_ID"],
                            "Booking_Guest" => $res["Booking_Guest"],
                            "Accident_Status" => $res["Accident_Status"],
                            "Booking_Cos" => $res["Booking_Cos"],
                            "Booking_Tax" => $res["Booking_Tax"],
                            "Booking_Price" => $res["Booking_Price"],
                            "Meeting_Hotel" => $res["Meeting_Hotel"],
                            "Booking_Qly" => $res["Booking_Qly"],

                            "packet_id" => $res["pack_id"],
                            "packet_name" => $res["name_package"],
                            "address" => $res["address"],
                            "locality" => $res["locality"],
                            "packet_detail" => $res["detail"],
                            "conditions" => $res["conditions"],
                            "Special_Requirements" => $res["Special_Requirements"],
                            "Cancellation_terms" => $res["Cancellation_terms"],
                            "catagory_id" => $res["catagory_id"],
                            "private" => $res["private"],
                            "package_province" => $res["package_province"],
                            "package_room_key" => $res["package_room_key"],
                            'accident' => $accident,
                            "img" => $img,
                            "timeable" => $timeable,
                            "package_price" => $price,
                            "user" => $user,
                            "packet_meeting" => $meeting,
                            "province" => $province,
                            "package_time" => $countTime,
                            "package_qly" => $res["qly"],
                            'package_lat' => $res["latitude"],
                            'package_lng' => $res["longitude"],
                            // 'priceExtra' => $res["priceExtra"],
                            // 'qlyPrivate' => $res["qlyPrivate"],
                            // 'private' => $res["private"],
                            'tour_extra_price' => $res["priceExtra"],
                            'tour_less' => $res["qlyPrivate"],
                            "tour_private" => $res["private"],

                            'package_rate' => $this->get_rate_package($res["pack_id"],$user_id,$res["Booking_Code"],'booking'),
                            "time" => $stock,
                            'package_lat' => $res["latitude"],
                            'package_lng' => $res["longitude"],
                          );


                          $output[] = $array;
                        }
                        return $output;
                      }else{
                        return null;
                      }
                    }

                    function get_booking_detail($booking_code,$lat,$lng,$widthphone) {
                      $sql = "SELECT * ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(d.latitude)) * COS(
                        RADIANS(d.longitude) - RADIANS($lng)) + SIN(RADIANS($lat)
                      ) * SIN(RADIANS(d.latitude)))) as distant
                      FROM `shop_bookings`a LEFT JOIN `shop_package` b on a.Package_ID = b.id
                      LEFT JOIN `data_booking_category` c on b.catagory_id = c.cat_id
                      LEFT JOIN `shop_package_pin` d on a.Package_ID = d.id
                      WHERE `booking_code` = '$booking_code'";
                      $stm = $this->conn->prepare($sql);
                      $stm->execute();
                      $result = $stm->get_result();
                      if($result->num_rows > 0){
                        while($res = $result->fetch_assoc())
                        {
                          $img = array();
                          $path_width = 320;
                          $path_height = 400;
                          $sql_img = $this->conn->prepare("SELECT * FROM `shop_img` WHERE id_shop = '".$res["Package_ID"]."'");
                          $sql_img->execute();
                          $result_img = $sql_img->get_result();
                          if($result_img->num_rows > 0){
                            while ($res_img = $result_img->fetch_assoc()) {
                              $img_array = array(
                                "img_resize" => BASE_URL.$res_img['resize300'],
                                "img_fullsize" => BASE_URL.$res_img['resize800'],
                                "sizeimg_resize" => $this->func->Newgetsize($res_img['width'],$res_img['hight'],$widthphone),
                                "sizeimg_fullsize" => $this->func->Newgetsize($res_img['width'],$res_img['hight'],$widthphone),
                              );
                              $img[]=$img_array;
                            }
                          }else{
                            $img_array = array(
                              "img_resize" => BASE_URL,
                              "img_fullsize" => BASE_URL,
                              "sizeimg_resize" => "",
                              "sizeimg_fullsize" => "",
                            );
                            $img[]=$img_array;
                          }
                          // get timeable //
                          $timeable = array();
                          $sql_timeable = $this->conn->prepare("SELECT * FROM `shop_timeable` WHERE id_shop = '".$res["Package_ID"]."'");
                          $sql_timeable->execute();
                          $result_timeable = $sql_timeable->get_result();
                          $i = 0;
                          $countTime = "0";
                          while ($res_timeable = $result_timeable->fetch_assoc()) {
                            if($result_timeable->num_rows > 0){
                              $i++;
                              $timeable_array = array(
                                "timeable_time" => $res_timeable['time_activity'],
                                "timeable_activity" => $res_timeable['activity'],
                              );
                              $timeable[]=$timeable_array;
                              if($result_timeable->num_rows == $i){
                                $start  = date_create($timeable[0]['timeable_time']);
                                $end 	= date_create($timeable[count($timeable)-1]['timeable_time']); // Current time and date
                                $diff  	= date_diff( $start, $end );
                                $Arraytime =[
                                  [$diff->y,'years'],
                                  [$diff->m,'months'],
                                  [$diff->d,'d'],
                                  [$diff->h,'hr'],
                                  [$diff->i,'min'],
                                  [$diff->s,'sec'],
                                ];
                                for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                                  if ($Arraytime[$i][0]!=0) {
                                    $countTime = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                                    break;
                                  }
                                }
                              }
                            }
                          }

                          $tag = array();
                          $sql_tag = $this->conn->prepare("SELECT * FROM `data_tag` WHERE tag_id IN (".$res["tag"].")");
                          $sql_tag->execute();
                          $result_tag = $sql_tag->get_result();
                          while ($res_tag = $result_tag->fetch_assoc()) {
                            if($result_tag->num_rows > 0){
                              $tag_array = array(
                                "tag_id" => $res_tag['tag_id'],
                                "tag_name" => $res_tag['tag_name'],
                              );
                              $tag[]=$tag_array;
                            }
                          }

                          $user = array();
                          $sql_user = "SELECT * FROM `data_user_account` a
                          LEFT JOIN `data_country` b on a.country_id = b.country_id
                          LEFT JOIN `data_user_location` c on a.user_id = c.user
                          WHERE user_id = '".$res["user_id"]."'";
                          $stmt_user = $this->conn->prepare($sql_user);
                          $stmt_user->execute();
                          $result_user = $stmt_user->get_result();
                          while ($res_user = $result_user->fetch_assoc()) {
                            if($result_user->num_rows > 0){
                              $sql_tex = "SELECT * FROM `shop_type_share` WHERE `id` = '".$res_user["shop_type_share"]."'";
                              $stmt_tex = $this->conn->prepare($sql_tex);
                              $stmt_tex->execute();
                              $result_tex = $stmt_tex->get_result();
                              while ($res_tex = $result_tex->fetch_assoc()) {
                                $tex = $res_tex["share"];
                              }
                              $start  = date_create($res_user['timeUpdate']);
                              $end 	= date_create(); // Current time and date
                              $diff  	= date_diff( $start, $end );
                              $Arraytime =[
                                [$diff->y,'years'],
                                [$diff->m,'months'],
                                [$diff->d,'d'],
                                [$diff->h,'hr'],
                                [$diff->i,'min'],
                                [$diff->s,'sec'],
                              ];
                              $time = "";
                              for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                                if ($Arraytime[$i][0]!=0) {
                                  $time = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                                  break;
                                }
                              }

                              //check type file if svg not convert
                              $type = explode(".",$res["country_flag_32"])[1];
                              $imgPath = '';
                              if ($type != 'svg') {
                                $imgPath = strtolower(explode("-",$res_user["country_flag_32"])[0]).'.svg';
                              }else{
                                $imgPath = $res_user["country_flag_32"];
                              }
                              //check type file if svg not convert

                              $user_array = array(
                                "country_id" => $res_user["country_id"],
                                "store_telephone" => $res_user["store_telephone"],
                                "country_img_name" => $res_user["country_img_name"],
                                "country_img_path" => BASE_URL.'data/flags/'.$imgPath,
                                "country_name_en" => $res_user["country_name_en"],
                                "country_name_th" => $res_user["country_name_th"],
                                "user_firstname" => html_entity_decode($res_user["user_firstname"], ENT_QUOTES),
                                "user_id" => $res_user["user_id"],
                                "user_lastname" => html_entity_decode($res_user["user_lastname"], ENT_QUOTES),
                                "user_path_img" => BASE_URL.$res_user["user_path_img"],
                                "user_time" => $time . ' ago'
                              );
                              $user[] = $user_array;
                            }
                          }
                          $meetings = [];
                          $sq_meeting = $this->conn->prepare("SELECT * FROM `shop_locations_meeting` WHERE `id` = '".$res["Meeting_ID"]."'");
                          $sq_meeting->execute();
                          $result_meeting = $sq_meeting->get_result();
                          while ($res_meeting = $result_meeting->fetch_assoc()) {
                            $meetings = array(
                              "meeting_ID" => $res_meeting["meet_name"],
                              "meeting_lat" => $res_meeting["meeting_lat"],
                              "meeting_lng" => $res_meeting["meeting_lng"],
                              "Seater" => $res_meeting["Seater"],
                              "SeaterPrice" => $res_meeting["SeaterPrice"],
                              "type" => $res_meeting["type"],
                              "time_meeting" => $res_meeting["time_meeting"],
                              "meet_address" => $res_meeting["meet_address"],
                              "meetting_picup" => 'โรงแรมอื่นๆๆ',
                            );
                          }
                          $accident = [];
                          $sql_accident = $this->conn->prepare("SELECT * FROM `shop_insurance` WHERE `id_shop` = '".$res["Package_ID"]."'");
                          $sql_accident->execute();
                          $result_accident = $sql_accident->get_result();
                          while ($res_accident = $result_accident->fetch_assoc()) {
                            $accident = array(
                              "accident_st" => $res["Accident_Status"],
                              "detail" => $res_accident["detail"],
                              "price" => $res_accident["price"],
                            );
                          }
                          $array = array(
                            'packet_distant' => number_format((float)($res['distant']*2), 1, '.', ''),
                            'packet_id' => $res["Package_ID"],
                            'packet_order_code' => $res["Booking_Code"],
                            'packet_category' => $res["cat_name"],
                            'packet_name' => $res["name_package"],
                            'packet_address' => $res["detail"],
                            // 'packet_condition' => $res["booking_conditions"],
                            'packet_detail' => $res["detail"],
                            // 'packet_recursive' => explode(",",$res["recursive"]),
                            'packet_start' => $res["date_start"],
                            'packet_end' => $res["date_end"],
                            //
                            // 'packet_meeting' => $res["booking_meeting"],
                            // 'packet_meeting_lat' => $res["meeting_lat"],
                            // 'packet_meeting_lng' => $res["meeting_lng"],
                            'meeting' => $meetings,
                            'packet_tax' => $tex,
                            'packet_total_tax' => $res["Booking_Tax"],
                            'packet_total_cos' => $res["Booking_Cos"],
                            'packet_total_total' => $res["Booking_Price"],
                            'packet_total_peple' => $res["Booking_Guest"],
                            'packet_total_date' => $res["Booking_Date"],
                            'packet_accident' => $accident,

                            'packet_status' => $res["Booking_Payment_Status"],
                            'tag' => $tag,
                            'img' => $img,
                            'timeable' => $timeable,
                            'user' => $user,
                            'packet_time' => $countTime
                          );
                          $output = $array;
                        }
                        return $output;
                      }else{
                        return null;
                      }
                    }

                    function get_tags($cat_id,$type) {
                      if($type == '0'){
                        $sql = "SELECT * , a.tag_id as tagId FROM `data_get_cat_to_tag` a LEFT JOIN `data_tag` b on a.tag_id = b.tag_id WHERE a.cat_id = '$cat_id'";
                      }else{
                        $sql = "SELECT * , a.tag_id as tagId FROM `data_get_cat_to_tag` a LEFT JOIN `data_tag` b on a.tag_id = b.tag_id GROUP BY tagId";
                      }
                      $stm = $this->conn->prepare($sql);
                      $stm->execute();
                      $result = $stm->get_result();
                      while($res = $result->fetch_assoc())
                      {
                        $array = array(
                          "cat_id" => $res["cat_id"],
                          "tag_id" => $res["tagId"],
                          "tag_name" => $res["tag_name"],
                        );
                        $output[] = $array;
                      }
                      return $output;
                    }


                    function getSizePic() {
                      $stmt = $this->conn->prepare("SELECT * FROM `data_photos`");
                      $stmt->execute();
                      $result = $stmt->get_result();
                      while($res = $result->fetch_assoc())
                      {
                        list($width, $height) = getimagesize('../../'.$res['photo_path_img']);
                        $update = $this->conn->prepare("UPDATE data_photos SET photo_width = $width , photo_height = $height WHERE photo_id = ".$res['photo_id']);
                        $update->execute();
                      }
                      exit();
                    }
                    function DeleteData($id) {
                      // echo $id;
                      $stmt = $this->conn->prepare("SELECT * FROM `data_photos` WHERE user_id = $id");
                      $stmt->execute();
                      $result = $stmt->get_result();
                      $output =array();
                      while($res = $result->fetch_assoc())
                      {
                        $delLike =  $this->conn->prepare("DELETE FROM `data_photo_like` WHERE photo_id = ".$res['photo_id']);
                        $delBook = $this->conn->prepare("DELETE FROM `data_photo_bookmark` WHERE photo_id = ".$res['photo_id']);
                        $delGoogle = $this->conn->prepare("DELETE FROM `data_photos_google` WHERE photos_id = ".$res['photo_id']);
                        $delLogP = $this->conn->prepare("DELETE FROM `data_log` WHERE Page = ".$res['photo_id']);
                        $delLike->execute();
                        $delBook->execute();
                        $delGoogle->execute();
                        $delLogP->execute();
                      }
                      $delULog = $this->conn->prepare("DELETE FROM `data_log` WHERE UserID = ".$id);
                      $delULike = $this->conn->prepare("DELETE FROM `data_photo_like` WHERE user_id = ".$id);
                      $delUfollow = $this->conn->prepare("DELETE FROM `data_follow` WHERE user_id = ".$id);
                      $delfollowU = $this->conn->prepare("DELETE FROM `data_follow` WHERE follow_user = ".$id);
                      $delDevice = $this->conn->prepare("DELETE FROM `data_device_register` WHERE member_id = ".$id);
                      $delLocationU = $this->conn->prepare("DELETE FROM `data_user_location` WHERE `user` = ".$id);
                      $delPhotos = $this->conn->prepare("DELETE FROM `data_photos` WHERE user_id = ".$id);
                      $delULog->execute();
                      $delULike->execute();
                      $delUfollow->execute();
                      $delfollowU->execute();
                      $delDevice->execute();
                      $delLocationU->execute();
                      $delPhotos->execute();

                      exit();
                    }

                    public function saveLogError($url,$parameter) {
                      $sql="INSERT INTO `Log_error` (`Error_Url`,`Error_Parameter`,`Error_Time`) VALUES ('".$url."','".$parameter."',now())";
                      $stmt2 =  $this->conn->prepare($sql);
                      $stmt2->execute();
                      if ($stmt2) {
                        $stmt2->close();
                        return TRUE;
                      }else{
                        return NULL;
                      }
                    }

                    public function getImgComment($idUser) {
                      $chk = explode(',',$idUser);
                      if($chk[0] == ''){
                        $idUser = substr($idUser,1);
                      }
                      $response = array();
                      $sql = $this->conn->prepare("SELECT * FROM `data_user_account` WHERE user_id IN (".$idUser.")");
                      $sql->execute();
                      $result = $sql->get_result();
                      while ($res = $result->fetch_assoc()) {
                        $array = array(
                          'user_id'=> $res["user_id"],
                          'user_photo' => BASE_URL.$res["user_path_img"]
                        );
                        $response[] = $array;
                      }
                      return $response;
                    }

                    public function deleteComment($key, $user_id) {


                      $sql = $this->conn->prepare("UPDATE `data_photo_comment` SET com_status = 1 WHERE com_key = '$key'");
                      $sql->execute();


                      $sqlSelect = $this->conn->prepare("SELECT com_photo_id AS photo_id FROM `data_photo_comment`  WHERE com_key = '$key'");
                      $sqlSelect->execute();
                      $sqlSelect->bind_result($photo_id);
                      $sqlSelect->fetch();
                      $sqlSelect->close();

                      //   /*** check your comment in post ***/
                      $status_comment_sql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                      WHERE com_photo_id = $photo_id and com_status != 1 and com_user_id = $user_id ORDER BY com_no DESC";
                      $stmtStatusComment = $this->conn->prepare($status_comment_sql);
                      $stmtStatusComment->execute();
                      $resultStatusComment = $stmtStatusComment->get_result();
                      $status_comment = 'false';
                      if ($resultStatusComment->num_rows>0) {
                        $status_comment = 'true';
                      }
                      $stmtStatusComment->close();
                      //   /*** check your comment in post ***/

                      if($sql){
                        return $status_comment;
                      }else{
                        return NULL;
                      }
                    }

                    public function editComment($key, $comment, $user_id) {


                      $sql = $this->conn->prepare("UPDATE `data_photo_comment` SET com_comment = '$comment', com_status = 2  WHERE com_key = '$key'");
                      $sql->execute();

                      $sqlSelect = $this->conn->prepare("SELECT com_photo_id AS photo_id FROM `data_photo_comment`  WHERE com_key = '$key'");
                      $sqlSelect->execute();
                      $sqlSelect->bind_result($photo_id);
                      $sqlSelect->fetch();
                      $sqlSelect->close();

                      //   /*** check your comment in post ***/
                      $status_comment_sql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                      WHERE com_photo_id = $photo_id and com_status != 1 and com_user_id = $user_id ORDER BY com_no DESC";
                      $stmtStatusComment = $this->conn->prepare($status_comment_sql);
                      $stmtStatusComment->execute();
                      $resultStatusComment = $stmtStatusComment->get_result();
                      $status_comment = 'false';
                      if ($resultStatusComment->num_rows>0) {
                        $status_comment = 'true';
                      }
                      $stmtStatusComment->close();
                      //   /*** check your comment in post ***/

                      // echo $status_comment_sql;exit;

                      if($sql){
                        return $status_comment;
                      }else{
                        return NULL;
                      }
                    }

                    public function chk_key_comment($id,$key,$type,$user) {
                      if($key == ""){
                        if($user == 'TAT'){

                          $sql= $this->conn->prepare("SELECT * FROM `data_attraction` WHERE `attraction_id` = '$id'");
                        }else{
                          $sql= $this->conn->prepare("SELECT * FROM `data_photos` WHERE photo_id = '$id'");
                        }
                        $sql->execute();
                        $result = $sql->get_result();
                        while ($res = $result->fetch_assoc()) {
                          if($res['key_room'] != ''){
                            $array = array(
                              'res_code'=> "00",
                              'res_result' => $res["key_room"]
                            );
                            return $array;
                          }else{
                            return NULL;
                          }
                        }
                      }else{
                        if($user == 'TAT'){
                          $sql = "UPDATE `data_attraction` SET key_room = '$key' WHERE attraction_id = '$id'";
                        }else{
                          $sql = "UPDATE `data_photos` SET key_room = '$key' WHERE photo_id = '$id'";
                        }
                        $stmt = $this->conn->prepare($sql);
                        $stmt->execute();
                        return TRUE;
                      }
                    }


                    public function check_key_comment_package($id,$key) {
                      if($key == ""){
                        $sql= $this->conn->prepare("SELECT * FROM `shop_package` WHERE `id` = '$id'");
                        $sql->execute();
                        $result = $sql->get_result();
                        while ($res = $result->fetch_assoc()) {
                          if($res['package_room_key'] != ''){
                            $array = array(
                              'res_code'=> "00",
                              'res_result' => $res["package_room_key"]
                            );
                            return $array;
                          }else{
                            return NULL;
                          }
                        }
                      }else{
                        $sql = "UPDATE `shop_package` SET `package_room_key` = '$key' WHERE `shop_package`.`id` = '$id'";
                        $stmt = $this->conn->prepare($sql);
                        $stmt->execute();
                        return TRUE;
                      }
                    }

                    public function send_notification($sql,$message,$title,$typeNoti,$dataSend){
                      $getdata = $dataSend;
                      $getdata["typeNoti"] = $typeNoti;
                      $data = json_encode($getdata);
                      $stmt = $this->conn->prepare($sql);
                      $stmt->execute();
                      $result = $stmt->get_result();
                      if($result->num_rows > 0){
                        while($res = $result->fetch_assoc())
                        {
                          $registrationIds = $res['device_uuid'];
                          $msg = array(
                            'messageKey' 	=> $message,
                            'title'		=> $title,
                            'body' => $message,
                            'sound' => 'true',
                            'tickerText'	=> 'Ticker text here...Ticker text here...Ticker text here',
                            'vibrate'	=> 1,
                            'sound'		=> 1,
                            'largeIcon'	=> 'large_icon',
                            'smallIcon'	=> 'small_icon',
                            'urlto'	=> 'asdasdsa',
                            'moreData'=> $data
                          );
                          if ($res["device_platform"] == '2') {
                            $arrayToSend = array('to' => $registrationIds, 'notification' => $msg,'priority'=>'high' );
                          }else{
                            $arrayToSend = array('to' => $registrationIds, 'data' => $msg,'priority'=>'high');
                          }
                          $headers = array(
                            'Authorization: key=' . API_ACCESS_KEY,
                            'Content-Type: application/json'
                          );

                          $ch = curl_init();

                          curl_setopt($ch, CURLOPT_USERPWD, "myusername:mypassword");
                          curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
                          // curl_setopt( $ch,CURLOPT_URL, 'https://android.googleapis.com/gcm/send' );
                          curl_setopt( $ch,CURLOPT_POST, true );
                          curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
                          curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
                          curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
                          curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $arrayToSend ) );
                          curl_exec($ch );
                          curl_close( $ch );
                        }
                      }
                    }

                    public function save_comment($comment,$postId,$userId,$key,$data,$userTyep) {
                      $datasend = $data;
                      $getdata = json_decode($datasend, true)["datacomment"];
                      if(array_key_exists("datacomment",$getdata)){
                        $comment_sum = $getdata["datacomment"]["sum_like"];
                        $getdata["datacomment"]["sum_like"] = $comment_sum+1;
                        $userPost = $getdata["datacomment"]["user_id"];
                      }else{
                        $comment_sum = $getdata["sum_like"];
                        $getdata["sum_like"] = $comment_sum+1;
                        $userPost = $getdata["user_id"];
                      }

                      // print_r($getdata);
                      define( 'API_ACCESS_KEY', 'AIzaSyC71MK0GrfVX3x0ZjqcFzXgPCn5VeDh2kg' );

                      $sql = $this->conn->prepare("SELECT * FROM `data_photo_comment` WHERE `com_photo_id` = '$postId'");
                      $sql->execute();
                      $result = $sql->get_result();
                      $count = $result->num_rows + 1;
                      if($userTyep != "TAT"){
                        $sql = $this->conn->prepare("INSERT INTO `data_photo_comment` (`com_comment`, `com_photo_id`, `com_user_id`, `com_date_comment`, `com_key`, `com_no`)
                        VALUES ('".$comment."', '".$postId."', '".$userId."', NOW(), '".$key."', '".$count."')");
                      }else{
                        $sql = $this->conn->prepare("INSERT INTO `data_photo_comment` (`com_comment`, `com_photo_id`, `com_user_id`, `com_date_comment`, `com_key`, `com_no`, `com_type`)
                        VALUES ('".$comment."', '".$postId."', '".$userId."', NOW(), '".$key."', '".$count."', 'TAT')");
                      }

                      $sql->execute();
                      $arr = [];
                      if($userTyep != "TAT"){
                        $sqlUser = $this->conn->prepare("SELECT * FROM data_user_account WHERE user_id = '".$userId."'");
                        $sqlUser->execute();
                        $resultUser = $sqlUser->get_result();
                        while($resUser = $resultUser->fetch_assoc())
                        {
                          $title = $resUser["user_firstname"] . " " . $resUser["user_lastname"];
                          // $resUser['com_user_id'] = $resUser['user_id'];
                          // $arr[] = $resUser;
                        }

                        $sqlUser = $this->conn->prepare("SELECT * FROM data_user_account WHERE user_id = '".$userPost."'");
                        $sqlUser->execute();
                        $resultUser = $sqlUser->get_result();
                        while($resUser = $resultUser->fetch_assoc())
                        {
                          // $title = $resUser["user_firstname"] . " " . $resUser["user_lastname"];
                          $resUser['com_user_id'] = $resUser['user_id'];
                          // $arr[] = $resUser;
                        }
                        $sqlPost = $this->conn->prepare("SELECT * FROM `data_photos` a
                          left join `data_photo_comment` b on a.photo_id = b.com_photo_id
                          left join `data_user_account` c on a.user_id = c.user_id
                          where a.photo_id = '$postId'  AND b.com_type = 'user' AND com_status != 1  GROUP BY b.com_user_id");
                          $sqlPost->execute();
                          $resultPost = $sqlPost->get_result();
                          while ($resPost = $resultPost->fetch_assoc()) {
                            $arr[] = $resPost;
                            $arrcomment[] = $resPost["com_user_id"];
                            $resPhoto = $resPost["photo_id"];
                          }

                          if (in_array("$userPost", $arrcomment)){ //หาไอดีคนโพส ถ้ามีอยู่ใน comment send = false
                            $send = false;
                          }else{
                            $send = true;
                            $sql = "SELECT * FROM data_device_register WHERE member_id='$userPost' AND device_uuid != '' GROUP BY device_uuid";
                            $message = $title." comment on your post.";
                            $this->send_notification($sql,$message,$title,'comment', $getdata);
                            $sql_in = "INSERT INTO `data_user_notification` (`noti_detail`, `noti_post_id`, `noti_user_doer`, `noti_user_ owner`, `noti_type`, `noti_time`)
                            VALUES ('".htmlspecialchars($message, ENT_QUOTES)."', '".$postId."', '".$userId."', '".$userId."', '1', NOW())";
                            $stmt_in = $this->conn->prepare($sql_in);
                            $stmt_in->execute();
                          }

                          // print_r($arr);

                          for ($i=0; $i < count($arr); $i++)
                          {
                            $user_id = "";
                            $poster_id = $arr[$i]["user_id"];
                            $user_id = $arr[$i]["com_user_id"];

                            // echo $user_id . " - " . $userId . " -> ";
                            if($user_id != $userId){ //ไม่ส่งซ้ำ ให้คนที่ comment เอง
                              // if($poster_id != $userId && $send && $i == (count($arr) - 1)){ // คนอื่นที่ไม่ใช่เจ้าของโพส comment และเจ้าของโพส ไม่เคย comment จะส่งแจ้งเตือนให้เจ้าของโพส
                              //   $sql = "SELECT * FROM data_device_register WHERE member_id='$poster_id' OR member_id='$user_id' AND device_uuid != '' GROUP BY device_uuid";
                              //   $message = $title." comment on your post.";
                              // }else{
                              $sql = "SELECT * FROM data_device_register WHERE member_id='$user_id' AND device_uuid != '' GROUP BY device_uuid";
                              if ($poster_id == $user_id) { //เจ้าของ post มี comment ใน post
                                $message = $title . " also comment on your post.";
                              }else{
                                $message = $title . " also comment on ". $arr[0]["user_firstname"]." ".$arr[0]["user_lastname"]." post.";
                              }
                              // }

                              $this->send_notification($sql,$message,$title,'comment', $getdata);

                              $sql_in = "INSERT INTO `data_user_notification` (`noti_detail`, `noti_post_id`, `noti_user_doer`, `noti_user_ owner`, `noti_type`, `noti_time`)
                              VALUES ('".htmlspecialchars($message, ENT_QUOTES)."', '".$postId."', '".$userId."', '".$user_id."', '1', NOW())";
                              $stmt_in = $this->conn->prepare($sql_in);
                              $stmt_in->execute();
                            }

                          }


                          //   /*** check your comment in post ***/
                          if (isset($resPhoto)) {
                            $status_comment_sql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                            WHERE com_photo_id = $resPhoto and com_status != 1 and com_user_id = '$user_id' ORDER BY com_no DESC";
                            $stmtStatusComment = $this->conn->prepare($status_comment_sql);
                            $stmtStatusComment->execute();
                            $resultStatusComment = $stmtStatusComment->get_result();
                            $status_comment = 'false';
                            if ($resultStatusComment->num_rows>0) {
                              $status_comment = 'true';
                            }
                            $stmtStatusComment->close();
                          }else{
                            $status_comment = 'false';
                          }
                          //   /*** check your comment in post ***/

                          if($sql){
                            return $status_comment;
                          }else{
                            return NULL;
                          }
                          //if is not TAT
                          //else is TAT
                        }else{
                          $sqlPost = $this->conn->prepare("SELECT * FROM `data_attraction` a
                            left join `data_photo_comment` b on a.attraction_id = b.com_photo_id
                            where a.attraction_id = '$postId' AND b.com_type = 'TAT' GROUP BY b.com_user_id");
                            $sqlPost->execute();
                            $resultPost = $sqlPost->get_result();
                            while ($resPost = $resultPost->fetch_assoc()) {
                              $arr[] = $resPost;
                              $resPhoto = $resPost["com_photo_id"];
                            }
                            $sqlUser = $this->conn->prepare("SELECT * FROM data_user_account WHERE user_id = '".$userId."'");
                            $sqlUser->execute();
                            $resultUser = $sqlUser->get_result();
                            while($resUser = $resultUser->fetch_assoc())
                            {
                              $title = $resUser["user_firstname"] . " " . $resUser["user_lastname"];
                            }

                            for ($i=0; $i < count($arr); $i++)
                            {
                              $user_id = "";
                              $user_id = $arr[$i]["com_user_id"];
                              // if($i == 0){
                              //   $message = "Comment your post";
                              // }else{
                              $message = $title . " also Comment on tourism authority of thailand Post.";
                              // }
                              if($user_id != $userId){
                                $getdata = json_decode($datasend, true)["datacomment"];
                                if(array_key_exists("datacomment",$getdata)){
                                  $comment_sum = $getdata["datacomment"]["sum_like"];
                                  $getdata["datacomment"]["sum_like"] = $comment_sum+1;
                                }else{
                                  $comment_sum = $getdata["sum_like"];
                                  $getdata["sum_like"] = $comment_sum+1;
                                }
                                $getdata["typeNoti"] = "comment";
                                $data = json_encode($getdata);
                                $sql = "SELECT * FROM data_device_register WHERE member_id='$user_id' AND device_uuid != ''";
                                $stmt = $this->conn->prepare($sql);
                                $stmt->execute();
                                $result = $stmt->get_result();
                                if($result->num_rows > 0){
                                  while($res = $result->fetch_assoc())
                                  {
                                    $registrationIds = $res['device_uuid'];
                                    $msg = array(
                                      'messageKey' 	=> $message,
                                      'title'		=> $title,
                                      'body' => $message,
                                      'sound' => 'true',
                                      'tickerText'	=> 'Ticker text here...Ticker text here...Ticker text here',
                                      'vibrate'	=> 1,
                                      'sound'		=> 1,
                                      'largeIcon'	=> 'large_icon',
                                      'smallIcon'	=> 'small_icon',
                                      'urlto'	=> 'asdasdsa',
                                      'moreData'=> $data
                                    );
                                    if ($res["device_platform"] == '2') {
                                      $arrayToSend = array('to' => $registrationIds, 'notification' => $msg,'priority'=>'high' );
                                    }else{
                                      $arrayToSend = array('to' => $registrationIds, 'data' => $msg,'priority'=>'high');
                                    }
                                    $headers = array(
                                      'Authorization: key=' . API_ACCESS_KEY,
                                      'Content-Type: application/json'
                                    );

                                    $ch = curl_init();

                                    curl_setopt($ch, CURLOPT_USERPWD, "myusername:mypassword");
                                    curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
                                    // curl_setopt( $ch,CURLOPT_URL, 'https://android.googleapis.com/gcm/send' );
                                    curl_setopt( $ch,CURLOPT_POST, true );
                                    curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
                                    curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
                                    curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
                                    curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $arrayToSend ) );
                                    curl_exec($ch );
                                    curl_close( $ch );
                                  }
                                }

                                $sql_in = "INSERT INTO `data_user_notification` (`noti_detail`, `noti_post_id`, `noti_user_doer`, `noti_user_ owner`, `noti_type`, `noti_time`, `noti_type_user`)
                                VALUES ('".htmlspecialchars($message, ENT_QUOTES)."', '".$postId."', '".$userId."', '".$user_id."', '1', NOW(), '2')";
                                $stmt_in = $this->conn->prepare($sql_in);
                                $stmt_in->execute();
                                // exit();
                              }

                            }


                            //   /*** check your comment in post ***/
                            if (isset($resPhoto)) {
                              $status_comment_sql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                              WHERE com_photo_id = $resPhoto and com_status != 1 and com_user_id = '$user_id' ORDER BY com_no DESC";
                              $stmtStatusComment = $this->conn->prepare($status_comment_sql);
                              $stmtStatusComment->execute();
                              $resultStatusComment = $stmtStatusComment->get_result();
                              $status_comment = 'false';
                              if ($resultStatusComment->num_rows>0) {
                                $status_comment = 'true';
                              }
                              $stmtStatusComment->close();
                            }else{
                              $status_comment = 'false';
                            }
                            //   /*** check your comment in post ***/

                            if($sql){
                              return $status_comment;
                            }else{
                              return NULL;
                            }
                          }
                        } //end save comment

                        // get new size image post
                        public function getSizeImage($id,$widthphone) {
                          $sql = $this->conn->prepare("SELECT * FROM `data_photos` WHERE `photo_id` = '$id'");
                          $sql->execute();
                          $result = $sql->get_result();
                          while ($res = $result->fetch_assoc()) {
                            $array = array(
                              'sizeheight'=>$this->func->Newgetsize($res['photo_width'],$res['photo_height'],$widthphone),
                              'sizeFullheight'=>$this->func->NewgetFullsize($res['photo_width'],$res['photo_height'],$widthphone),
                            );
                          }
                          $output[] = $array;
                          return $output;
                        }

                        // GPS distance
                        function distance_GPS($lat1, $lon1) {

                          $dataProto = array();
                          $sql = $this->conn->prepare("SELECT * FROM data_photos");
                          $sql->execute();
                          while ($result = $sql->get_result()) {
                            $lat2 = $result_photo['photo_la'];
                            $lon2 = $result_photo['photo_long'];
                            $unit = "K";

                            $theta = $lon1 - $lon2;
                            $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
                            $dist = acos($dist);
                            $dist = rad2deg($dist);
                            $miles = $dist * 60 * 1.1515;
                            $unit = strtoupper($unit);

                            if ($unit == "K") {
                              $result = $miles * 1.609344;      // "K" = Kilometers\n
                              $number = number_format($result,2, '.', '');   // ปัดเศษทศนิยม เป็น 2 ตำแหน่ง
                              if ($number <= 5) {
                                $proto = array();
                                $proto["number"] = $number;
                                $proto["photo_id"] = $result_photo["photo_id"];
                                $proto["photo_caption"] = htmlentities($result_photo["photo_caption"]);
                                $proto["photo_location"] = $result_photo["photo_location"];
                                $proto["photo_path_img"] = $result_photo["photo_path_img"];
                                $proto["photo_la"] = $result_photo["photo_la"];
                                $proto["photo_long"] = $result_photo["photo_long"];
                                $proto["photo_createdate"] = $result_photo["photo_createdate"];
                                $proto["photo_share"] = $result_photo["photo_share"];
                                $proto["photo_status"] = $result_photo["photo_status"];
                                $proto["photo_status_Del"] = $result_photo["photo_status_Del"];
                                $proto["user_id"] = $result_photo["user_id"];
                                $proto["feeling_tx_id"] = $result_photo["feeling_tx_id"];
                                array_push($dataProto,$proto);
                              }
                            } else if ($unit == "N") {
                              $result = $miles * 0.8684;      // "N" = Nautical Miles\n
                              $number = number_format($result,2, '.', '');
                            } else {                            // "M" = Miles\n
                              $number = number_format($miles,2, '.', '');
                            }

                          } // end while
                          return $dataProto;

                        }



                        function updateAttractionType() {
                          $sqlTour = "SELECT a.* , c.TypeLocation_id FROM `data_attraction` a LEFT JOIN data_attraction_category c on a.attraction_id = c.attraction_id GROUP BY a.attraction_id";
                          $sql = $this->conn->prepare($sqlTour);
                          $sql->execute();
                          $result = $sql->get_result();
                          while ($res = $result->fetch_assoc()) {
                            $sqlUpdate = "UPDATE `data_attraction` SET attraction_categories = '".$res["TypeLocation_id"]."' WHERE attraction_id = '".$res['attraction_id']."'";
                            $stmt = $this->conn->prepare($sqlUpdate);
                            $stmt->execute();
                          }
                        }



                        function register_IDM($id){
                          // $this->Watsonplatform($text2,$user_id,2);
                          // $sql = "SELECT COUNT(*)AS count_number FROM data_photo_like WHERE photo_id = '$id' ";
                          $sql = "SELECT COUNT(*)AS count_number FROM ".$table." WHERE $where = '$id' ";
                          $stmt = $this->conn->prepare($sql);
                          $stmt->execute();
                          $result = $stmt->get_result();
                          if($result->num_rows > 0){
                            $res = $result->fetch_assoc();
                            $stmt->close();
                            return $res['count_number'];
                          }else{
                            $stmt->close();
                            return NULL;
                          }
                        }

                        function get_version($version,$platform,$update){
                          $sql                = "SELECT v1.*, v2.* FROM
                          (SELECT ver_id as old_ver_id,  ver_url as old_ver_url, ver_number as old_ver_number, ver_update as old_ver_update, ver_type as old_ver_type, publish as old_publish, status_btn as old_status_btn FROM `app_version` WHERE ver_update = $update AND ver_type = $platform) as v1,
                          (SELECT ver_id as latest_ver_id,  ver_url as latest_ver_url, ver_number as latest_ver_number, ver_update as latest_ver_update, ver_type as latest_ver_type, publish as latest_publish, status_btn as latest_status_btn FROM `app_version` WHERE ver_type = $platform ORDER BY ver_id DESC LIMIT 1) as v2";
                          // $sql                = "SELECT * FROM `app_version` WHERE `ver_type` = '".$paltform."' ORDER BY ver_update desc LIMIT 1";
                          $stmt               = $this->conn->prepare($sql);
                          $stmt->execute();
                          $result             = $stmt->get_result();
                          $output             = array();
                          while($res          = $result->fetch_assoc())
                          {

                            $old_ver_id           = $res['old_ver_id'];
                            $old_version_num      = $res['old_ver_number'];
                            $old_ver_update       = $res['old_ver_update'];
                            $old_publish          = $res['old_publish'];
                            $old_ver_url          = $res['old_ver_url'];


                            $latest_ver_id           = $res['latest_ver_id'];
                            $latest_version_num      = $res['latest_ver_number'];
                            $latest_ver_update       = $res['latest_ver_update'];
                            $latest_publish          = $res['latest_publish'];
                            $latest_ver_url          = $res['latest_ver_url'];

                            $old_status_btn          = $res['latest_status_btn'];
                            $latest_status_btn          = $res['old_status_btn'];

                            if (($old_ver_id == $latest_ver_id) || ($old_ver_id != $latest_ver_id && $latest_publish == 1)) { //ไม่ต้องอัพเดต
                              $stmt->close();
                              $response       = array(
                                "status_update"   => '00',
                                "url"             => $old_ver_url,
                                "status_btn"      => $old_status_btn
                              );
                              $output[]       = $response;
                            return $output;
                            }else{
                              $stmt->close();
                              $response = array(
                                "status_update"   => '01',
                                "url"             => $latest_ver_url,
                                "status_btn"      => $latest_status_btn
                              );
                              $output[]       = $response;
                            return $output;
                            }
                          }
                        }





                        public function loop_cat() {
                          $sql =  $this->conn->prepare("SELECT * FROM `data_attraction_category` GROUP BY `attraction_category_name`");
                          $sql->execute();
                          $result = $sql->get_result();
                          while($res = $result->fetch_assoc())
                          {
                            $stmt = 'UPDATE `data_attraction_category` SET `TypeLocation_id` = "'.$res["TypeLocation_id"].'"  WHERE `attraction_category_name` = "'.$res["attraction_category_name"].'"';
                            // exit();
                            $stmt = $this->conn->prepare($stmt);
                            $resultstmt = $stmt->execute();
                          }
                          $stmt->close();
                          return $result;
                        }
                        public function gethaha(){
                          $stmt = $this->conn->prepare("SELECT * FROM `data_photos`  WHERE photo_la!='' and photo_la!='undefined'");
                          $stmt->execute();
                          $result = $stmt->get_result();
                          $output =array();
                          $n = 0;
                          if($result->num_rows > 0){
                            while($res = $result->fetch_assoc())
                            {
                              // $response = array(
                              //   "photo_la" => $res['photo_la'],
                              //   "photo_long" => $res['photo_long']
                              // );
                              if ($res['photo_la']!=""&&$res['photo_long']!="" ) {
                                # code...
                                // echo   $res['photo_id']."->";
                                // $output[]=$response;
                                $url= "https://maps.googleapis.com/maps/api/geocode/json?latlng=".$res['photo_la'].",".$res['photo_long']."&sensor=true&key=".key_map;
                                $data = $this->curl($url,"");
                                // print_r($data['results'][0]);
                                // exit();
                                $province = "";
                                for ($i=0; $i < sizeof($data['results'][0]['address_components']) ; $i++) {
                                  if ($data['results'][0]['address_components'][$i]['types'][0]=="administrative_area_level_1") {
                                    // echo "--->".sizeof(explode('Chang Wat ',$data['results'][0]['address_components'][$i]['long_name']))."<---";
                                    if (sizeof(explode('Chang Wat ',$data['results'][0]['address_components'][$i]['long_name']))>1) {
                                      $province=explode('Chang Wat ',$data['results'][0]['address_components'][$i]['long_name'])[1];
                                    }else{
                                      $province=$data['results'][0]['address_components'][$i]['long_name'];
                                    }
                                    break;
                                  }
                                }
                                // if ($n==1) {

                                // echo $province;
                                // echo "  ";
                                $sql = "";
                                $sql = "UPDATE `data_photos` set photo_province = '".$province."' where photo_id=".$res['photo_id'];
                                $stmt = $this->conn->prepare($sql);
                                $stmt->execute();
                                // $stmt->close();
                                // break;
                                // echo "*****";
                                // }
                                $n++;
                              }
                            }
                            exit();
                            return $output;
                          }else{
                            $stmt->close();
                            return NULL;
                          }
                        }

                        /*** ลบ Auto ***/
                        public function getAutoCom($data,$lat,$long,$type) {

                          if($type == '1'){
                            $sql = "SELECT * ,(3959 * ACOS(
                              COS(
                                RADIANS($lat)
                              ) * COS(RADIANS(photo_la)) * COS(
                                RADIANS(photo_long) - RADIANS($long)
                              ) + SIN(
                                RADIANS($lat)
                              ) * SIN(RADIANS(photo_la))
                            )
                          ) as distant
                          FROM data_photos
                          where (text_search LIKE '%".$data."%' or photo_location  LIKE '%".$data."%') and photo_status=1
                          group by photo_la,photo_long  ORDER by distant limit 30";
                        }else{
                          $sql = "SELECT * ,(3959 * ACOS(
                            COS(
                              RADIANS($lat)
                            ) * COS(RADIANS(photo_la)) * COS(
                              RADIANS(photo_long) - RADIANS($long)
                            ) + SIN(
                              RADIANS($lat)
                            ) * SIN(RADIANS(photo_la))
                          )
                        ) as distant
                        FROM data_photos
                        where (text_search LIKE '%".$data."%' or photo_location  LIKE '%".$data."%') and photo_status=1
                        group by photo_la,photo_long  ORDER by distant limit 30";
                      }


                      $stmt = $this->conn->prepare($sql);
                      $stmt->execute();
                      $result = $stmt->get_result();

                      if($result->num_rows > 0){
                        while($res = $result->fetch_assoc())
                        {
                          $response = array(
                            "photo_location" => $res['photo_location'],
                            "photo_la" => $res['photo_la'],
                            "photo_long" => $res['photo_long']
                          );
                          $output[]=$response;
                        }

                        $stmt->close();
                        return $output;
                      }else{
                        $stmt->close();
                        return NULL;
                      }
                      //
                      // $stmt->close();
                      // return $result;
                    }

                    /*** ลบ Img ***/
                    public function deleteImg($photo_id) {
                      // $sql = "DELETE FROM `data_photos` where photo_id=".$photo_id;
                      // $stmt = $this->conn->prepare($sql);
                      // $result = $stmt->execute();
                      // $stmt->close();
                      // $sql = "DELETE FROM `data_photo_bookmark` where photo_id=".$photo_id;
                      // $stmt = $this->conn->prepare($sql);
                      // $result = $stmt->execute();
                      // $stmt->close();
                      // $sql = "DELETE FROM `data_photo_like` where photo_id=".$photo_id;
                      // $stmt = $this->conn->prepare($sql);
                      // $result = $stmt->execute();
                      $sql = "UPDATE `data_photos` SET `photo_status` = '0' WHERE `data_photos`.`photo_id` =".$photo_id;
                      $stmt = $this->conn->prepare($sql);
                      $result = $stmt->execute();

                      $stmt->close();
                      return $result;
                    }


                    /*** ชื่อประเทศ ***/
                    public function getCountry() {
                      $stmt = $this->conn->prepare("SELECT * FROM `data_country` ORDER BY country_name_en ASC");
                      $stmt->execute();
                      $result = $stmt->get_result();
                      if($result->num_rows > 0){
                        $stmt->close();
                        return $result;
                      }else{
                        $stmt->close();
                        return NULL;
                      }
                    }


                    /*** Update_msg ***/
                    public function Update_msg($user_id,$room_id) {
                      $sql3 = "UPDATE data_message SET status_send = '2' WHERE status_send = '1' and user_id='$user_id' and room_id='$room_id' ";
                      $stmt3 = $this->conn->prepare($sql3);
                      $result=$stmt3->execute();
                      if($result){
                        $stmt3->close();
                        return $result;
                      }else{
                        $stmt3->close();
                        return NULL;
                      }
                    }


                    // set_time_limit(0);

                    public function getmessage($user_id) {
                      $n=0;
                      $output =array();

                      while (sizeof($output)==0) {
                        // $sql = "SELECT *  FROM `data_participant` a
                        //        LEFT JOIN data_message b on a.room_id = b.room_id
                        //        LEFT JOIN data_user_account c on a.user_id = c.user_id
                        //        WHERE a.user_id != '$user_id' and b.user_id ='$user_id' and status_send=1";
                        $sql4 = "SELECT room_id FROM `data_participant` WHERE user_id = '$user_id'";
                        $stmt4 = $this->conn->prepare($sql4);
                        $stmt4->execute();
                        $result4 = $stmt4->get_result();
                        $allroom ="";
                        $i=0;
                        if($result4->num_rows > 0){
                          while($res = $result4->fetch_assoc()){
                            if ($i==0) {
                              $allroom.=$res['room_id'];
                            }else{
                              $allroom.=','.$res['room_id'];
                            }
                            $i++;
                          }
                        }
                        // exit();

                        $sql = "SELECT * FROM `data_message` WHERE `user_id` != $user_id  and status_send='1' AND `room_id` IN ($allroom)";
                        $stmt = $this->conn->prepare($sql);
                        $stmt->execute();
                        $result = $stmt->get_result();

                        if($result->num_rows > 0){
                          $sql = "SELECT * FROM `data_participant` a
                          LEFT JOIN data_participant b on a.room_id = b.room_id
                          LEFT JOIN data_user_account c on b.user_id = c.user_id
                          LEFT JOIN data_country d on c.country_id=d.country_id
                          LEFT JOIN data_room e ON a.room_id = e.room_id
                          WHERE a.user_id != b.user_id and a.user_id = '$user_id'
                          ORDER BY e.room_update desc
                          ";
                          $stmt = $this->conn->prepare($sql);
                          $stmt->execute();
                          $result = $stmt->get_result();
                          // $output = array();

                          if($result->num_rows > 0){
                            $i = 0;
                            while($res = $result->fetch_assoc()){

                              $response = array(
                                "user_firstname" => $res['user_firstname'],
                                "user_lastname" => $res['user_lastname'],
                                "user_id" => $res['user_id'],
                                "country_name_en" => $res['country_name_en'],
                                "user_path_img" => BASE_URL.$res['user_path_img'],
                                "room_id" => $res['room_id'],
                                "data_message"=>array()
                              );

                              $sql1 = "SELECT * FROM `data_message` a
                              LEFT JOIN data_user_account b on a.user_id =b.user_id
                              LEFT JOIN data_country d on b.country_id=d.country_id
                              WHERE room_id = '".$res['room_id']."' and status_send=1";
                              $stm = $this->conn->prepare($sql1);
                              $stm->execute();
                              $result1 = $stm->get_result();
                              if($result1->num_rows > 0){
                                while($res2 = $result1->fetch_assoc()){
                                  $date=date_create($res2['message_create']);
                                  $time=date_format($date," H:i");
                                  $response2 = array(
                                    "message_id" => $res2['message_id'],
                                    "message_text" => $res2['message_text'],
                                    "message_create" => $res2['message_create'],
                                    "message_create" => $res2['message_create'],
                                    "message_time" => $time,
                                    "user_id" => $res2['user_id'],
                                    "user_path_img" => BASE_URL.$res2['user_path_img'],
                                    "status_send" => $res2['status_send'],
                                    "room_id" => $res2['room_id']
                                  );

                                  if ($res2['status_send']==1) {
                                    $response['Newmsg']=true;
                                  }
                                  $response['data_message'][]=$response2;
                                  //
                                  //  $sql3 = "UPDATE data_message SET status_send = '1' WHERE status_send = '1' and user_id!='$user_id' and room_id='".$res['room_id']."' ";
                                  // $stmt3 = $this->conn->prepare($sql3);
                                  // $stmt3->execute();

                                }
                              }
                              $output[]=$response;
                              $i++;
                            }

                          }else{
                            sleep(3);
                            $output =array();
                            continue;
                          }

                          return $output;
                          break;
                        }else{
                          // break;
                          sleep(3);
                          $output =array();
                          continue;
                        }
                      }

                    }


                    // count number นับตามจำนวนรูปภาพ, นับตามคนที่ติดตาม,
                    function count_number($table,$where,$id){
                      // $sql = "SELECT COUNT(*)AS count_number FROM data_photo_like WHERE photo_id = '$id' ";
                      $sql = "SELECT COUNT(*)AS count_number FROM ".$table." WHERE $where = '$id' ";
                      $stmt = $this->conn->prepare($sql);
                      $stmt->execute();
                      $result = $stmt->get_result();
                      if($result->num_rows > 0){
                        $res = $result->fetch_assoc();
                        $stmt->close();
                        return $res['count_number'];
                      }else{
                        $stmt->close();
                        return NULL;
                      }
                    }



                    /*** ประเภทการค้นหา  ***/
                    public function explorecate() {
                      $output = array();
                      $stmt = $this->conn->prepare("SELECT * FROM `data_attraction_category` GROUP BY attraction_category_name ORDER BY attraction_category_name");
                      $stmt->execute();
                      $result = $stmt->get_result();
                      $array = array();
                      $i = 0;
                      $j = 0;
                      // for ($j=0; $j < 11 ; $j++) {
                      //   $output[$j]= [];
                      // }
                      if($result->num_rows > 0){
                        while($res = $result->fetch_assoc())
                        {
                          // echo $result->num_rows;
                          // exit();
                          if ($i==0) {
                            $output[$j] =[];
                          }
                          if($i%10==0 && $i!=0){
                            $j++;
                            $i=0;
                          }
                          $output[$j][$i]=$res;
                          // echo ($j*10)+$i;

                          if (($j*10)+$i >= ($result->num_rows)-1) {
                            for ($n=($i+1); $n < 10; $n++) {
                              $output[$j][] = array('attraction_category_name'=>"");
                            }
                          }
                          $i++;

                          // $response = array(
                          //   "categories_group_id" => $res['categories_group_id'],
                          //   "categories_group_name" => $res['categories_group_name'],
                          //   "categories" => $categories
                          // );
                          // $output[]=$res;
                        }
                        $stmt->close();

                        return $output;
                      }else{
                        $stmt->close();
                        return NULL;
                      }
                    }


                    /*** ประเภทการค้นหา  ***/
                    public function categories() {
                      $output = array();
                      $stmt = $this->conn->prepare("SELECT * FROM `data_categories_group` ");
                      $stmt->execute();
                      $result = $stmt->get_result();
                      if($result->num_rows > 0){
                        while($res = $result->fetch_assoc())
                        {
                          $stmt1 = $this->conn->prepare("SELECT * FROM `data_categories` where categories_group_id =".$res['categories_group_id']);
                          $stmt1->execute();
                          $result1 = $stmt1->get_result();
                          $categories = array();
                          if($result1->num_rows > 0){
                            foreach ($result1 as $key=>$value) {
                              $res2 = (array)$value; // code mock
                              $tmp = array();
                              $tmp["categories_id"] = $res2["categories_id"];
                              $tmp["categories_name"] = $res2["categories_name"];
                              $tmp["categories_group_id"] = $res2["categories_group_id"];
                              array_push($categories, $tmp);
                            }
                          }
                          $response = array(
                            "categories_group_id" => $res['categories_group_id'],
                            "categories_group_name" => $res['categories_group_name'],
                            "categories" => $categories
                          );
                          $output[]=$response;
                        }
                        $stmt->close();
                        return $output;
                      }else{
                        $stmt->close();
                        return NULL;
                      }
                    }


                    /*** ประเภทการค้นหา  ***/
                    public function get_touristTag() {
                      $output = array();
                      $stmt = $this->conn->prepare("SELECT * FROM `data_attraction_category` GROUP BY attraction_category_name ");
                      $stmt->execute();
                      $result = $stmt->get_result();
                      if($result->num_rows > 0){
                        while($res = $result->fetch_assoc())
                        {
                          $output[]=$res;
                        }
                        $stmt->close();
                        return $output;
                      }else{
                        $stmt->close();
                        return NULL;
                      }
                    }

                    /*** ราคาพาหนะ ***/
                    public function getvehicles($city_name) {
                      // $sql = "SELECT *,(SELECT local_vehicles_price FROM `data_local_vehicles` a
                      //         left JOIN data_city b on a.city_id = b.city_id
                      //         left JOIN data_vehicles c on a.vehicles_id = c.vehicles_id
                      //         where a.vehicles_id =  data_vehicles.vehicles_id and b.city_name = '$city_name') as SUM
                      //         FROM data_vehicles";

                      if ($city_name!="") {
                        $sql = 'SELECT * FROM `data_local_vehicles` a
                        LEFT JOIN data_amphor b on a.amphor_id = b.amphor_id
                        LEFT JOIN data_vehicles c on a.vehicles_id = c.vehicles_id
                        where amphor_name_en like "%'.$city_name.'%"';
                      }

                      $stmt = $this->conn->prepare($sql);
                      $stmt->execute();
                      $result = $stmt->get_result();
                      if($result->num_rows > 0){
                        $stmt->close();
                        return $result;
                      }else{
                        $stmt->close();
                        return NULL;
                      }
                    }


                    public function Watsonplatform($text,$user,$type) {
                      $ch = curl_init();
                      $headers[] = "Content-Type: text/plain;charset=utf-8";
                      $headers[] = "Accept: application/json";
                      $URL = "https://gateway.watsonplatform.net/personality-insights/api/v3/profile?version=2017-10-13&consumption_preferences=true&raw_scores=true";
                      curl_setopt($ch, CURLOPT_URL,$URL );
                      $ch = curl_init($URL);
                      curl_setopt($ch, CURLOPT_POST, 1);
                      curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
                      curl_setopt($ch, CURLOPT_USERPWD, "df00d09a-d255-4849-921a-6174cd34ded6" . ":" . "UoKeM0YPUZbV");
                      curl_setopt($ch, CURLOPT_POSTFIELDS, $text);
                      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                      $result = curl_exec($ch);
                      if (curl_errno($ch)) {
                        echo 'Error:' . curl_error($ch);
                      }
                      curl_close ($ch);
                      $arr_result=json_decode($result, true);
                      $arr = array();
                      $tilt = ['personality','needs','values'];
                      for ($i=0; $i < 3 ; $i++) {
                        $data = $arr_result[$tilt[$i]];
                        for ($j=0; $j <sizeof($data)  ; $j++) {
                          $arr[]=array("name"=>$data[$j]['name'],
                          "percentile"=>$data[$j]['percentile']
                        );
                        if (isset($data[$j]['children'])) {
                          $children =  $data[$j]['children'];
                          for ($n=0; $n < sizeof($children) ; $n++) {
                            $arr[]=array("name"=>$children[$n]['name'],
                            "percentile"=>$children[$n]['percentile']
                          );
                        }
                      }
                    }
                  }
                  $val ="";
                  $sql = "SELECT *  FROM `data_personality_insights_get_bluemix` WHERE `user_id` = $user AND `personality_insights_get_type` = 2";
                  $stmt = $this->conn->prepare($sql);

                  $stmt->execute();
                  $result = $stmt->get_result();
                  if($result->num_rows > 0){
                    $res = $result->fetch_assoc();
                    // เคยเก็บ​ personality
                    $fild =['data_personality_insights_get_bluemix','personality_insights_get_value',
                    'personality_insights_id','user_id','personality_insights_get_type'];
                    $sql2 ="";
                    for ($i=0; $i < sizeof($arr); $i++) {
                      $percentile =  round($arr[$i]['percentile'],2);
                      $sql2 = "UPDATE data_personality_insights_get_bluemix
                      SET personality_insights_get_value = (personality_insights_get_value+".$percentile.")/2,
                      personality_insights_modify=now()
                      WHERE personality_insights_get_type=2
                      and user_id= ".$user."
                      and personality_insights_id =
                      (SELECT personality_insights_id FROM data_personality_insights
                      WHERE personality_insights_name=  '".$arr[$i]['name']."')";
                      $stmt = $this->conn->prepare($sql2);
                      $stmt->execute();
                      // $st = $stmt->get_result()
                    }
                    return TRUE;
                  }else{
                    // ไม่เคยเก็บ​ personality
                    for ($i=0; $i < sizeof($arr); $i++) {
                      if ($i==0) {
                        $val .= "(NULL, '$user', '$type', (SELECT personality_insights_id  FROM `data_personality_insights` WHERE `personality_insights_name` = '".$arr[$i]['name']."'), ".round($arr[$i]['percentile'],2).",now())";
                      }else{
                        $val.=", (NULL, '$user', '$type', (SELECT personality_insights_id  FROM `data_personality_insights` WHERE `personality_insights_name` = '".$arr[$i]['name']."'), ".round($arr[$i]['percentile'],2).",now())";
                      }
                    }

                    $sql = "INSERT INTO `data_personality_insights_get_bluemix` (`personality_insights_get_id`, `user_id`, `personality_insights_get_type`, `personality_insights_id`, `personality_insights_get_value`,personality_insights_modify)
                    VALUES ".$val;
                    // echo $sql;
                    // exit();
                    $stmt =  $this->conn->prepare($sql);
                    $st= $stmt->execute();
                    if ($st) {
                      return TRUE;
                    }else{
                      return NULL;
                    }
                  }

                }

                public function vision_googleapis($img,$id) {
                  // echo ">>> ".$img . " >> " . $id;
                  // $img = "data/data_photos/657/img_resize/1541472880.2018-11-06-09-54-4047838.jpg";
                  $api_key = KeyGoogle;
                  $cvurl = "https://vision.googleapis.com/v1/images:annotate?key=" . $api_key;
                  $type = "LABEL_DETECTION";
                  $valid_file = true;
                  if($valid_file) {
                    $url = "../../".$img;
                    $contents = file_get_contents($url);
                    $base64 = base64_encode($contents);
                    $r_json ='{
                      "requests": [
                        {
                          "image": {
                            "content":"' . $base64. '"
                          },
                          "features": [
                            {
                              "type": "' .$type. '",
                              "maxResults": 200
                            }
                          ]
                        }
                      ]
                    }';

                    $curl = curl_init();
                    curl_setopt($curl, CURLOPT_URL, $cvurl);
                    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
                    curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-type: application/json"));
                    curl_setopt($curl, CURLOPT_POST, true);
                    curl_setopt($curl, CURLOPT_POSTFIELDS, $r_json);
                    $json_response = curl_exec($curl);
                    $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
                    $json_response = json_decode($json_response,true);
                    curl_close($curl);
                    // print_r($json_response);
                    // exit();
                    if(count($json_response['responses'][0]) > 0){
                      $data = $json_response['responses'][0]['labelAnnotations'];
                      $n = 0;
                      $text = "";
                      for ($i=0; $i <sizeof($data) ; $i++) {

                        $sql = "INSERT INTO `data_photos_google` ( `photos_id`, `photos_google_text`, `photos_google_score`)
                        VALUES ( $id,'".htmlspecialchars($data[$i]['description'], ENT_QUOTES)."', ".$data[$i]['score'].");";
                        $stmt =  $this->conn->prepare($sql);
                        $stmt->execute();

                        $leng = round($data[$i]['score']*250/array_sum(array_column($data, 'score')));
                        for ($j=0; $j < $leng; $j++) {
                          $text .= $data[$i]['description']." ";
                        }
                      }

                      return $text;
                    }else{
                      return NULL;
                    }
                  }else {
                    return NULL;
                  }

                }


                /*** ราคาพาหนะ ***/
                public function getphotos_google($user_id) {
                  $sql = "SELECT * FROM `data_photos` where user_id = '$user_id' and photo_status =1";
                  $stmt = $this->conn->prepare($sql);
                  $stmt->execute();
                  $result = $stmt->get_result();

                  // $output =array();
                  if($result->num_rows > 0){
                    while($res = $result->fetch_assoc())
                    {
                      $sql = "SELECT * FROM `data_path_photo` WHERE path_google_text = '' and path_post_id = '".$res["photo_id"]."'";
                      $stm = $this->conn->prepare($sql);
                      $stm->execute();
                      $ress = $stm->get_result();
                      if($ress->num_rows > 0){
                        while($resphoto = $ress->fetch_assoc())
                        {
                          if($resphoto['path_url_resize'] == ""){
                            $pathImg = $resphoto['path_url'];
                          }else{
                            $pathImg = $resphoto['path_url_resize'];
                          }
                          $text= $this->vision_googleapis($resphoto['path_url'],$res['photo_id']);
                          if($text != ""){
                            $sql = 'UPDATE `data_path_photo` SET path_google_text = "'.$text.'" WHERE path_id = "'.$resphoto['path_id'].'"';
                            $stmt = $this->conn->prepare($sql);
                            $stmt->execute();
                            $text2 = $res['photo_caption'].' '.$res['photo_location']." ".$res['photo_province'].' '.$text;
                            $result2 = $this->Watsonplatform($text2,$user_id,2);
                          }
                        }
                      }
                    }
                    return TRUE;
                  }else{
                    return NULL;
                  }



                  exit();
                  $pathImg = "";
                  $sql="INSERT INTO `Log_DataCall` (`Log_Url`,`Log_Detail`,`Log_Date`) VALUES ('photos_google','".$user_id."',now())";
                  $stmt2 =  $this->conn->prepare($sql);
                  $stmt2->execute();
                  $sql = "SELECT * FROM `data_photos` where user_id = '$user_id' and photos_text_google = '' and photo_path_img_original != '' and photo_status =1";
                  $stmt = $this->conn->prepare($sql);
                  $stmt->execute();
                  $result = $stmt->get_result();

                  // $output =array();
                  if($result->num_rows > 0){
                    while($res = $result->fetch_assoc())
                    {
                      if($res['photo_path_img_original'] != ""){
                        $pathImg = $res['photo_path_img_original'];
                      }else{
                        $pathImg = $res['photo_path_img'];
                      }
                      $text= $this->vision_googleapis($pathImg,$res['photo_id']);
                      if($text != ""){
                        $sql = 'UPDATE data_photos SET photos_text_google = "'.$text.'" WHERE photo_id = "'.$res['photo_id'].'"';
                        $stmt = $this->conn->prepare($sql);
                        $stmt->execute();
                        $text2 = $res['photo_caption'].' '.$res['photo_location']." ".$res['photo_province'].' '.$text;
                        $result2 = $this->Watsonplatform($text2,$user_id,2);
                      }
                    }
                    $stmt->close();
                    return TRUE;
                  }else{
                    $stmt->close();
                    return NULL;
                  }
                }



                // โพสรูปภาพ
                public function updatePOSTIMG($photo_caption,$photo_location,$photo_la,$photo_long,$photo_share,$photo_id,$feeling_id,$TypeLocation,$highlights,$hi,$imgDelete,$imgUpload) {


                  // var_dump(explode('<div>', $photo_caption));
                  // var_dump(explode('</div>', $photo_caption));
                  // print_r(getTextBetweenTags('div', $photo_caption, 1))
                  // $html2TextConverter = new \Html2Text\Html2Text($photo_caption);
                  //
                  // $str = str_replace('&nbsp;', ' ', $photo_caption);
                  // $str = html_entity_decode($str, ENT_QUOTES | ENT_COMPAT , 'UTF-8');
                  // $str = html_entity_decode($str, ENT_HTML5, 'UTF-8');
                  // $str = html_entity_decode($str);
                  // $str = htmlspecialchars_decode($str);
                  // $str = strip_tags($str);

                  // echo html_entity_decode($photo_caption);
                  // exit();
                  $tempDelete = html_entity_decode($imgDelete);
                  $imgDelete = json_decode($tempDelete,true);
                  $tempData = html_entity_decode($imgUpload);
                  $imgarray = json_decode($tempData,true);
                  if(count($imgDelete) > 0){
                    foreach ($imgDelete as $key => $value) {

                      if($value["type"] == "5"){
                        $sqlImgDel = "UPDATE `data_path_video` SET `vdo_status` = '0' WHERE `data_path_video`.`vdo_id` = '".$value["id"]."'";
                      }else{
                        $sqlImgDel = "UPDATE `data_path_photo` SET `path_status` = '0' WHERE `data_path_photo`.`path_id` = '".$value["id"]."'";
                      }
                      // print_r($sqlImgDel);
                      // exit();
                      $stmtDel = $this->conn->prepare($sqlImgDel);
                      $stmtDel->execute();
                      // exit();
                    }
                  }
                  $arrayInsert = [];
                  for ($i=0; $i < count($imgarray); $i++) {
                    $str = $imgarray[$i]["path"];
                    $imageData=str_replace(" ","+",$str);
                    $imageData=str_replace('\n',"",$imageData);
                    $textreturn = $this->func->check_baseimg_ext($imageData);
                    $today = date("Y-m-d-H-i-s").rand(11111,99999).'.'.$textreturn['ext'];
                    $uploadFileNew = $this->func->uploadfilePosttest($imageData, "data_photos" , $photo_id,$today,$imageData);
                    $uploadFileNew = explode("../../", $uploadFileNew[0]);
                    list($width, $height) = getimagesize('../../'.$uploadFileNew[1]);
                    $number = $imgarray[$i]["number"];
                    $sqlin = "INSERT INTO `data_path_photo` (`path_url`, `path_post_id`, `path_date`, `path_width`, `path_height`, `path_number`)
                    VALUES ('".$uploadFileNew[1]."', '".$photo_id."', NOW(), '".$width."', '".$height."', $number);";
                    $stmtin = $this->conn->prepare($sqlin);
                    $stmtin->execute();
                    $arrayPush = array(
                      "photoId" => $this->conn->insert_id,
                      "photoPath" => $uploadFileNew[1],
                      "number" => $number,
                    );
                    $arrayInsert[] = $arrayPush;
                  }
                  $data = $this->curl("https://maps.googleapis.com/maps/api/geocode/json?latlng=".$photo_la.",".$photo_long."&sensor=true&key=".key_map,"");
                  // print_r($data);
                  // exit();
                  $province = "";
                  // for ($i=0; $i < sizeof($data['results'][1]['address_components']) ; $i++) {
                  //   if ($data['results'][1]['address_components'][$i]['types'][0]=="administrative_area_level_1") {
                  //      // $province=$data['results'][0]['address_components'][$i]['long_name'];
                  //      if (sizeof(explode('Chang Wat ',$data['results'][1]['address_components'][$i]['long_name']))>1) {
                  //        $province=explode('Chang Wat ',$data['results'][1]['address_components'][$i]['long_name'])[1];
                  //        $province=str_replace("-","",$province);
                  //      }else{
                  //        $province=$data['results'][1]['address_components'][$i]['long_name'];
                  //        $province=str_replace("-","",$province);
                  //      }
                  //       break;
                  //   }
                  // }
                  if ($province=="") {
                    for ($i=0; $i < sizeof($data['results'][0]['address_components']) ; $i++) {
                      if ($data['results'][0]['address_components'][$i]['types'][0]=="administrative_area_level_1") {
                        // $province=$data['results'][0]['address_components'][$i]['long_name'];
                        if (sizeof(explode('Chang Wat ',$data['results'][0]['address_components'][$i]['long_name']))>1) {
                          $province=explode('Chang Wat ',$data['results'][0]['address_components'][$i]['long_name'])[1];
                          $province=str_replace("-","",$province);
                        }else{
                          $province=$data['results'][0]['address_components'][$i]['long_name'];
                          $province=str_replace("-","",$province);
                        }
                        $sql = "SELECT * FROM `data_province` where province_name_th = '$province' OR province_name_th = '$province'";
                        $stmt = $this->conn->prepare($sql);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){
                          while($res = $result->fetch_assoc())
                          {
                            $province=$res['province_name_en'];
                          }
                        }
                        break;
                      }
                    }
                  }
                  if ($province == 'Krung Thep Maha Nakhon') {
                    $province = 'Bangkok';
                  }
                  $sql = "UPDATE data_photos
                  SET photo_caption = '".$photo_caption."',
                  photo_location = '".$photo_location."',
                  photo_la = '".$photo_la."',
                  photo_long = '".$photo_long."',
                  feeling_tx_id = '".$feeling_id."',
                  highlight = '".$highlights."',
                  photo_province = '".$province."',
                  TypeLocation_id = '".$TypeLocation."'
                  WHERE photo_id = $photo_id ";

                  $stmt = $this->conn->prepare($sql);
                  $result = $stmt->execute();
                  $stmt->close();
                  if(count($imgarray) > 0){
                    $result = $arrayInsert;
                  }
                  if ($result) {

                    return array($result,$this->func->sortATag($photo_caption));
                  }else{
                    return NULL;
                  }
                }




                // โพสรูปภาพ
                public function postimg($photo_caption,$photo_location,$photo_la,$photo_long,$photo_share,$user_id,$feeling_id,$highlights,$image,$TypeLocation,$key) {

                  $tempData = html_entity_decode($image);
                  $imgarray = json_decode($tempData,true);


                  $returnText = array();

                  $text_search = "";
                  $sql_feeling = $this->conn->prepare("SELECT * FROM `data_feeling_tx` WHERE feeling_tx_id = '".$feeling_id."'");
                  $sql_feeling->execute();
                  $result_feeling = $sql_feeling->get_result();
                  while ($res_feeling = $result_feeling->fetch_assoc()) {
                    $text_search = $text_search.$res_feeling["feeling_tx_name"].' , ';
                  }
                  $sql_type = $this->conn->prepare("SELECT * FROM `data_TypeLocation` WHERE TypeLocation_id = '".$TypeLocation."'");
                  $sql_type->execute();
                  $result_type = $sql_type->get_result();
                  while ($res_type = $result_type->fetch_assoc()) {
                    $text_search = $text_search.$res_type["TypeLocation_name"];
                  }

                  $data = $this->curl("https://maps.googleapis.com/maps/api/geocode/json?latlng=".$photo_la.",".$photo_long."&sensor=true&key=".key_map,"");

                  $province = "";
                  $thumbun = "";
                  $aumpher = "";

                  for ($i=0; $i < sizeof($data['results'][1]['address_components']) ; $i++) {
                    if($photo_location == "Current Location"){
                      if(in_array("sublocality_level_1", $data['results'][1]['address_components'][$i]['types'])){
                        $thumbun = $data['results'][1]['address_components'][$i]['long_name'];
                      }else if(in_array("administrative_area_level_2", $data['results'][1]['address_components'][$i]['types'])){
                        $aumpher = $data['results'][1]['address_components'][$i]['long_name'];
                      }
                    }
                    if ($data['results'][1]['address_components'][$i]['types'][0]=="administrative_area_level_1") {
                      // $province=$data['results'][0]['address_components'][$i]['long_name'];
                      if (sizeof(explode('Chang Wat ',$data['results'][1]['address_components'][$i]['long_name']))>1) {
                        $province=explode('Chang Wat ',$data['results'][1]['address_components'][$i]['long_name'])[1];
                        $province=str_replace("-","",$province);
                      }else{
                        $province=$data['results'][1]['address_components'][$i]['long_name'];
                        $province=str_replace("-","",$province);
                      }
                    }
                  }
                  if ($province=="") {
                    for ($i=0; $i < sizeof($data['results'][0]['address_components']) ; $i++) {
                      if($photo_location == "Current Location"){
                        if(in_array("sublocality_level_1", $data['results'][1]['address_components'][$i]['types'])){
                          $thumbun = $data['results'][1]['address_components'][$i]['long_name'];
                        }else if(in_array("administrative_area_level_2", $data['results'][1]['address_components'][$i]['types'])){
                          $aumpher = $data['results'][1]['address_components'][$i]['long_name'];
                        }
                      }
                      if ($data['results'][0]['address_components'][$i]['types'][0]=="administrative_area_level_1") {
                        // $province=$data['results'][0]['address_components'][$i]['long_name'];
                        if (sizeof(explode('Chang Wat ',$data['results'][0]['address_components'][$i]['long_name']))>1) {
                          $province=explode('Chang Wat ',$data['results'][0]['address_components'][$i]['long_name'])[1];
                          $province=str_replace("-","",$province);
                        }else{
                          $province=$data['results'][0]['address_components'][$i]['long_name'];
                          $province=str_replace("-","",$province);
                        }
                        break;
                      }
                    }
                  }

                  if ($province == 'Krung Thep Maha Nakhon') {
                    $province = 'Bangkok';
                  }


                  if($photo_location == "Current Location"){
                    $photo_location = $thumbun . " " . $aumpher . " " . $province;
                  }
                  
          
                  $province = htmlspecialchars($province, ENT_QUOTES);
                  $sql = "INSERT INTO data_photos(photo_caption,photo_location,photo_path_img,
                    photo_la,photo_long,photo_createdate,photo_share,photo_status,photo_status_Del,user_id,feeling_tx_id,highlight,TypeLocation_id,photo_province,photos_text_google,photo_check,text_search)
                    values('$photo_caption','$photo_location','','$photo_la','$photo_long',
                      now(),'$photo_share',1,1,'$user_id','$feeling_id',$highlights,'$TypeLocation','$province','','$key','$text_search')";
                      // echo $sql;
                      // exit();
                      $stmt = $this->conn->prepare($sql);
                      $result = $stmt->execute();
                      $stmt->close();
                      if ($result) {
                        $last_id = $this->conn->insert_id;
                        $link = "";
                        if ($image!="") {

                          // $imageData=str_replace(" ","+",$image);
                          // $textreturn = $this->func->check_baseimg_ext($imageData);
                          // $today = date("Y-m-d-H-i-s").rand(11111,99999).'.'.$textreturn['ext'];
                          // $uploadFileNew = $this->func->uploadfilePost($imageData, "data_photos" , $last_id,$today,$imageData);
                          // $returnText = $uploadFileNew;
                          // $uploadFileNew = explode("../../", $uploadFileNew[0]);
                          // list($width, $height) = getimagesize('../../'.$uploadFileNew[1]);
                          // $sql = "UPDATE data_photos SET photo_path_img_original = '".$uploadFileNew[1]."' , photo_width = '".$width."' , photo_height = '".$height."' WHERE photo_id = '$last_id' ";
                          // $stmt = $this->conn->prepare($sql);
                          // $stmt->execute();
                          for ($i=0; $i < count($imgarray); $i++) {
                            // $imgarray[$i] = 'data:image/jpeg;base64,'.$imgarray[$i];
                            // $str = 'data:image/jpeg;base64,'.$imgarray[$i];
                            $str = $imgarray[$i]["path"];
                            $imageData=str_replace(" ","+",$str);
                            $imageData=str_replace('\n',"",$imageData);
                            $textreturn = $this->func->check_baseimg_ext($imageData);
                            $today = date("Y-m-d-H-i-s").rand(11111,99999).'.'.$textreturn['ext'];
                            $uploadFileNew = $this->func->uploadfilePosttest($imageData, "data_photos" , $last_id,$today,$imageData);
                            $uploadFileNew = explode("../../", $uploadFileNew[0]);
                            $number = $imgarray[$i]["number"];
                            list($width, $height) = getimagesize('../../'.$uploadFileNew[1]);
                            $sqlin = "INSERT INTO `data_path_photo` (`path_url`, `path_post_id`, `path_date`, `path_width`, `path_height`, `path_number`)
                            VALUES ('".$uploadFileNew[1]."', '".$last_id."', NOW(), '".$width."', '".$height."', $number);";
                            $stmtin = $this->conn->prepare($sqlin);
                            $stmtin->execute();
                          }
                          $link = BASE_URL_WEB.'OpenGraph.php?method=share&user=user&id='.$last_id;

                          $sqlScore = $this->conn->prepare("SELECT * FROM data_coconuts WHERE id = '3'");
                          $sqlScore->execute();
                          $resultScore = $sqlScore->get_result();
                          while($resScore = $resultScore->fetch_assoc())
                          {
                            $sqlUser = $this->conn->prepare("SELECT * FROM data_user_account WHERE user_id = '$user_id'");
                            $sqlUser->execute();
                            $resultUser = $sqlUser->get_result();

                            while($resUser = $resultUser->fetch_assoc())
                            {
                              $latlng = $photo_la . "," . $photo_long;
                              $sql = "insert into data_log(UserID,Page,Activity,Caption,Places,Feelings,Location,Province,Time,point)values('$user_id','$last_id','Post','".str_replace("'","\'",$photo_caption)."','$TypeLocation','$feeling_id','$latlng','$province',Now(),'".$resScore['value']."')";
                              $stmt = $this->conn->prepare($sql);
                              $result = $stmt->execute();
                              $stmt->close();
                              $score = $resUser['user_coconut']+$resScore['value'];
                              $sqlUpdate = "UPDATE data_user_account SET user_coconut = '$score' WHERE user_id = '$user_id'";
                              $stmtUpdate = $this->conn->prepare($sqlUpdate);
                              $result = $stmtUpdate->execute();
                            }
                          }
                        }
                        return  array($result,$link,$returnText,$last_id);
                      }else{
                        return NULL;
                      }
                    }
                    // อีพโหลดรูปรีวิว
                    public function upload_img_review($user_id,$image,$booking_id) {
                      $path = array();
                      $image = substr($image, 7, -7);
                      $imgarrays = explode(',',$image);
                      foreach ($imgarrays as $key => $value) {
                        if($key%2 == 1){
                          $imgarray[] = $value;
                        }
                      }
                      for ($i=0; $i < count($imgarray); $i++) {
                        $str = 'data:image/jpeg;base64,'.$imgarray[$i];
                        $imageData=str_replace(" ","+",$str);
                        $imageData=str_replace('\n',"",$imageData);
                        $textreturn = $this->func->check_baseimg_ext($imageData);
                        $today = date("Y-m-d-H-i-s").rand(11111,99999).'.'.$textreturn['ext'];
                        $uploadFileNew = $this->func->uploadfilePosttest($imageData, "data_review" , $booking_id,$today,$imageData);
                        $uploadFileNew = explode("../../", $uploadFileNew[0]);
                        list($width, $height) = getimagesize('../../'.$uploadFileNew[1]);
                        $path[] = $uploadFileNew[1];
                        $sqlin = "INSERT INTO `shop_review_img` (`Review_Path`, `Review_Path_Resize`, `Review_Booking_Code`, `Review_User_ID`)
                        VALUES ('".$uploadFileNew[1]."', '', '".$booking_id."', '".$user_id."')";
                        $stmtin = $this->conn->prepare($sqlin);
                        $stmtin->execute();
                      }
                      return $path;
                    }

                    public function updatePhotoResize($lastId,$original,$folder_name,$nameiamge,$namefile) {
                      // $sql = "SELECT * FROM `data_photos` WHERE photo_id = '".$lastId."'";
                      // $stmt = $this->conn->prepare($sql);
                      // $stmt->execute();
                      // $result = $stmt->get_result();
                      // if($result->num_rows > 0){
                      //   while($res = $result->fetch_assoc())
                      //    {
                      //      $original = "../../".$res["photo_path_img_original"];
                      //      $folder_name = "data_photos";
                      //      $nameiamge = time();
                      //      $namefile = explode('/',$res["photo_path_img_original"])[3];
                      //      $uploadFileNew = $this->func->updatePictest($lastId,$original,$folder_name,$nameiamge,$namefile);
                      //      list($width, $height) = getimagesize($uploadFileNew[1]);
                      //      $uploadresize = explode("../../", $uploadFileNew[1]);
                      //      $uploadbase64 = explode("../../", $uploadFileNew[0]);
                      //      $sql = "UPDATE `data_photos` SET
                      //              photo_path_img_normal = '".$uploadbase64[1]."' ,
                      //              photo_path_img = '".$uploadresize[1]."',
                      //              photo_width = '".$width."',
                      //              photo_height= '".$height."'
                      //              WHERE photo_id = '".$lastId."' ";
                      //       $stmt = $this->conn->prepare($sql);
                      //       $stmt->execute();
                      //    }
                      //    return true;
                      //  }else{
                      //    return Null;
                      //  }
                      //
                      //   exit();
                      $sql = "SELECT * FROM data_path_photo WHERE path_post_id = '".$lastId."'";
                      $stmt = $this->conn->prepare($sql);
                      $stmt->execute();
                      $result = $stmt->get_result();
                      if($result->num_rows > 0){
                        while($res = $result->fetch_assoc())
                        {
                          $original = "../../".$res["path_url"];
                          $folder_name = "data_photos";
                          $nameiamge = time();
                          $namefile = explode('/',$res["path_url"])[3];
                          $uploadFileNew = $this->func->updatePictest($lastId,$original,$folder_name,$nameiamge,$namefile);
                          list($width, $height) = getimagesize($uploadFileNew[1]);
                          $uploadresize = explode("../../", $uploadFileNew[1]);
                          $sql = "UPDATE `data_path_photo` SET path_url_resize = '".$uploadresize[1]."', path_width = '".$width."',
                          path_height= '".$height."'
                          WHERE path_id = '".$res["path_id"]."' ";
                          $stmt = $this->conn->prepare($sql);
                          $stmt->execute();
                        }
                        return true;
                      }else{
                        return Null;
                      }

                      exit();
                      $text = "lastId = ".$lastId.",original = ".$original.",folder_name = ".$folder_name.",nameiamge = ".$nameiamge.",namefile = ".$namefile;
                      $sql="INSERT INTO `Log_DataCall` (`Log_Url`,`Log_Detail`,`Log_Date`) VALUES ('PhotoResize','".$text."',now())";
                      // $stmt2 =  $this->conn->prepare($sql);
                      // $stmt2->execute();

                      $uploadFileNew = $this->func->updatePic($lastId,$original,$folder_name,$nameiamge,$namefile);
                      list($width, $height) = getimagesize($uploadFileNew[1]);
                      $uploadbase64 = explode("../../", $uploadFileNew[0]);
                      $uploadresize = explode("../../", $uploadFileNew[1]);
                      $sql = "UPDATE data_photos SET
                      photo_path_img = '".$uploadresize[1]."' ,
                      photo_path_img_normal = '".$uploadbase64[1]."' ,
                      photo_width = '".$width."',
                      photo_height= '".$height."'
                      WHERE photo_id = '$lastId' ";
                      exit();
                      $stmt = $this->conn->prepare($sql);
                      $stmt->execute();
                      if($stmt){
                        return true;
                      }else{
                        return Null;
                      }
                    }


                    /*** getTypeLocation ***/
                    public function getTypeLocation() {
                      $stmt = $this->conn->prepare("SELECT * FROM `data_TypeLocation` where TypeLocation_status =1 order by TypeLocation_srot");
                      $stmt->execute();
                      $result = $stmt->get_result();
                      if($result->num_rows > 0){
                        $stmt->close();
                        return $result;
                      }else{
                        $stmt->close();
                        return NULL;
                      }
                    }

                    /*** Feeling ***/
                    public function Check_room($user_id,$user_to) {
                      $stmt = $this->conn->prepare("SELECT room_name FROM `data_participant` a
                        LEFT JOIN data_participant b on a.room_id = b.room_id
                        LEFT JOIN data_room c on a.room_id = c.room_id
                        WHERE a.user_id = $user_id and b.user_id = $user_to");
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){
                          // $stmt->close();
                          $res = $result->fetch_assoc();
                          return $res['room_name'];
                        }else{
                          $stmt->close();
                          return NULL;
                        }
                      }


                      /*** Feeling ***/
                      public function getFeeling() {
                        $stmt = $this->conn->prepare("SELECT * FROM `data_feeling` where feeling_status =1");
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){
                          $stmt->close();
                          return $result;
                        }else{
                          $stmt->close();
                          return NULL;
                        }
                      }

                      /*** FeelingTX ***/
                      public function getFeelingTX() {
                        $stmt = $this->conn->prepare("SELECT * FROM `data_feeling_tx` where feeling_tx_status=1 order by feeling_tx_sort");
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){
                          $stmt->close();
                          return $result;
                        }else{
                          $stmt->close();
                          return NULL;
                        }
                      }

                      /*** TAGExplore ***/
                      public function getTAGExplore($user_id) {
                        $stmt = $this->conn->prepare("SELECT * FROM `data_get_tag` a LEFT JOIN data_tag b on a.tag_id = b.tag_id where user_id=".$user_id);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){
                          $stmt->close();
                          return $result;
                        }else{
                          $stmt->close();
                          return NULL;
                        }
                      }


                      public function get_room_name($user_id,$user_id2) {
                        $sql = "SELECT room_name FROM `data_participant` c
                        LEFT JOIN `data_participant` d on c.room_id = d.room_id
                        LEFT JOIN `data_room` e on c.room_id = e.room_id
                        where d.user_id = $user_id and c.user_id= $user_id2";
                        $stmt = $this->conn->prepare($sql);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){
                          // $stmt->close();
                          $res = $result->fetch_assoc();
                          return $res['room_name'];
                        }else{
                          // $stmt->close();
                          return "";
                        }
                        return "";

                      }

                      // getlocationUser
                      public function getlocationUser($user_id,$where,$lat,$long) {
                        // $sql = "SELECT *,
                        //       (SELECT count(*) FROM data_follow WHERE user_id = $user_id and follow_user = a.user_id ) as status_follow,
                        //       (SELECT room_name FROM `data_participant` c
                        //        LEFT JOIN `data_participant` d on c.room_id = d.room_id
                        //        LEFT JOIN `data_room` e on c.room_id = e.room_id
                        //        where d.user_id = $user_id and c.user_id= a.user_id
                        //      ) as room_name
                        //       FROM `data_user_account` a
                        //       LEFT JOIN data_country b on a.country_id=b.country_id
                        //       WHERE ".$where;
                        $sql = "SELECT *,
                        (3959 * ACOS(COS(RADIANS($lat)
                      ) * COS(RADIANS(c.lat)) * COS(RADIANS(c.long) - RADIANS($long)
                    ) + SIN(RADIANS($lat)) * SIN(RADIANS(c.lat))))*2 as dis,
                    (SELECT count(*) FROM data_follow WHERE user_id = $user_id and follow_user = a.user_id ) as status_follow
                    FROM `data_user_account` a
                    LEFT JOIN data_country b on a.country_id=b.country_id
                    LEFT JOIN data_user_location c on a.user_id=c.user
                    WHERE (3959 * ACOS(COS(RADIANS($lat)
                  ) * COS(RADIANS(c.lat)) * COS(RADIANS(c.long) - RADIANS($long)
                ) + SIN(RADIANS($lat)) * SIN(RADIANS(c.lat)))) <  450 AND ".$where." ORDER by dis";
                $stmt = $this->conn->prepare($sql);
                $stmt->execute();
                $result = $stmt->get_result();
                if($result->num_rows > 0){
                  while ($res = $result->fetch_assoc()) {
                    $sqlPhoto = "SELECT photo_id FROM `data_photos` WHERE `photo_status` = 1 AND `user_id` = '".$res["user_id"]."'";
                    $stmtPhoto = $this->conn->prepare($sqlPhoto);
                    $stmtPhoto->execute();
                    $resultPhoto = $stmtPhoto->get_result();
                    $time = strtotime($res["timeUpdate"]);
                    if((time() - $time) < 300){
                      $res["statusOnline"] = 1;
                    }else{
                      $res["statusOnline"] = 0;
                    }
                    $res["post"] = $resultPhoto->num_rows;
                    $response[] = $res;
                  }

                  $stmt->close();
                  return $response;
                }else{
                  $stmt->close();
                  return NULL;
                }
              }

              // delectmessageroom
              public function delectmessageroom($room_id) {
                $sql = "DELETE FROM `data_room` where room_id=".$room_id;
                $stmt = $this->conn->prepare($sql);
                $result = $stmt->execute();
                $stmt->close();
                $sql = "DELETE FROM `data_participant` where room_id=".$room_id;
                $stmt = $this->conn->prepare($sql);
                $result = $stmt->execute();
                $stmt->close();
                $sql = "DELETE FROM `data_message` where room_id=".$room_id;
                $stmt = $this->conn->prepare($sql);
                $result = $stmt->execute();
                $stmt->close();
                if ($result) {
                  return TRUE;
                }else{
                  return NULL;
                }
              }


              public function Addroom($user_id,$to_user,$key) {
                if($to_user != null && $to_user != 0){
                  $sql="INSERT INTO `data_room` ( `room_name`,room_update) VALUES ('".$key."',now())";
                  $stmt2 =  $this->conn->prepare($sql);
                  $stmt2->execute();
                  $last_id = $this->conn->insert_id;
                  $sql="INSERT INTO `data_participant` ( `user_id`, `room_id`) VALUES ( $user_id, $last_id), ( $to_user, $last_id);";
                  $stmt3 =  $this->conn->prepare($sql);
                  $stmt3->execute();
                  if ($stmt2&&$stmt3) {
                    // $stmt3->close();
                    // $stmt2->close();
                    return TRUE;
                  }else{
                    return NULL;
                  }
                }else{
                  return NULL;
                }

              }

              // getmessageroom
              public function getmessageroom($user_id) {
                $sql = "SELECT *,(SELECT COUNT(*) FROM `data_message`
                where room_id = a.room_id and user_id != '$user_id' and status_read = 1)  as notread
                FROM `data_participant` a
                LEFT JOIN data_participant b on a.room_id = b.room_id
                LEFT JOIN data_user_account c on b.user_id = c.user_id
                LEFT JOIN data_country d on c.country_id=d.country_id
                LEFT JOIN data_room e ON a.room_id = e.room_id
                LEFT JOIN data_user_location f on c.user_id=f.user
                WHERE a.user_id != b.user_id and a.user_id = '$user_id'
                ORDER BY e.room_update desc
                ";
                $stmt = $this->conn->prepare($sql);
                $stmt->execute();
                $result = $stmt->get_result();
                $output = array();
                if($result->num_rows > 0){
                  while($res = $result->fetch_assoc())
                  {   $status = 0;
                    $time = strtotime($res["timeUpdate"]);
                    if((time() - $time) < 300){
                      $status = 1;
                    }
                    $tmp=$this->getFollow($res['user_id']);
                    $response = array(
                      "user_firstname" => html_entity_decode($res['user_firstname'], ENT_QUOTES),
                      "user_lastname" => html_entity_decode($res['user_lastname'], ENT_QUOTES),
                      "user_id" => $res['user_id'],
                      "country_name_en" => $res['country_name_en'],
                      "user_path_img" => BASE_URL.$res['user_path_img'],
                      "room_id" => $res['room_id'],
                      "room_name" => $res['room_name'],
                      "notread"=>$res['notread'],
                      "followers" => $tmp['followers'],
                      "following" => $tmp['following'],
                      "statusOnline" => $status,
                      "data_message"=>array()
                    );
                    //  $sql1 = "SELECT * FROM `data_message` a
                    //          LEFT JOIN data_user_account b on a.user_id =b.user_id
                    //          LEFT JOIN data_country d on b.country_id=d.country_id
                    //          WHERE (room_id = '".$res['room_id']."' and status_send =2) or (a.user_id ='".$user_id."' and room_id = '".$res['room_id']."')";
                    // $stm = $this->conn->prepare($sql1);
                    // $stm->execute();
                    // $result1 = $stm->get_result();
                    // if($result1->num_rows > 0){
                    //   while($res2 = $result1->fetch_assoc()){
                    //     $img = $res2["user_path_img"];
                    //     $res2["user_path_img"];
                    //     if (!$img) {
                    //        $img = 'api/v1/user.png';
                    //         $res2['user_id'];
                    //     }
                    //     $date=date_create($res2['message_create']);
                    //     $time=date_format($date," H:i");
                    //     $response2 = array(
                    //       "message_id" => $res2['message_id'],
                    //       "message_text" => $res2['message_text'],
                    //       "message_create" => $res2['message_create'],
                    //       "message_time" => $time,
                    //       "user_id" => $res2['user_id'],
                    //       "user_path_img" => BASE_URL.$img,
                    //       "room_id" => $res2['room_id']
                    //     );
                    //     $response['data_message'][]=$response2;
                    // }
                    // }
                    $output[]=$response;
                  }
                  $stmt->close();
                  return $output;
                }else{
                  $stmt->close();
                  return NULL;
                }
              }



              /*** getfollowme ***/
              public function getfollowme($user_id,$type) {
                if ($type==2) {
                  $sql = "SELECT * FROM `data_follow`a
                  LEFT JOIN data_user_account b on a.follow_user= b.user_id
                  LEFT JOIN data_country c on b.country_id=c.country_id
                  where a.user_id = '$user_id'";
                }else{
                  $sql = "SELECT * FROM `data_follow`a
                  LEFT JOIN data_user_account b on a.user_id= b.user_id
                  LEFT JOIN data_country c on b.country_id=c.country_id
                  where a.follow_user = '$user_id'";
                }
                // echo $sql;
                $stmt = $this->conn->prepare($sql);
                $stmt->execute();
                $result = $stmt->get_result();
                if($result->num_rows > 0){
                  $stmt->close();
                  return $result;
                }else{
                  $stmt->close();
                  return NULL;
                }
              }

              /*** deleteChatRoomEmty ***/
              public function deleteChatRoomEmty() {
                $sql = "SELECT * FROM `data_participant` a LEFT JOIN data_participant b on a.room_id = b.room_id LEFT JOIN data_user_account c on b.user_id = c.user_id LEFT JOIN data_country d on c.country_id=d.country_id LEFT JOIN data_room e ON a.room_id = e.room_id LEFT JOIN data_user_location f on c.user_id=f.user ORDER BY e.room_update desc";
                $stmt = $this->conn->prepare($sql);
                $stmt->execute();
                $result = $stmt->get_result();
                while($res = $result->fetch_assoc()){
                  if($res["user_id"] == "" && $res["user_firstname"] == "" && $res["user_lastname"] == ""){
                    $del = "DELETE FROM `data_participant` WHERE `data_participant`.`room_id` = '".$res["room_id"]."'";
                    $dell = $this->conn->prepare($del);
                    $dell->execute();
                  }
                }
                exit();
              }


              /*** getRecent ***/
              public function getRecent($user_id) {
                $stmt = $this->conn->prepare("SELECT * FROM `data_history_search` WHERE user_id = '$user_id' ORDER BY history_search_date DESC LIMIT 5");
                $stmt->execute();
                $result = $stmt->get_result();
                if($result->num_rows > 0){
                  $stmt->close();
                  return $result;
                }else{
                  $stmt->close();
                  return NULL;
                }
              }


              /*** getRecent ***/
              public function get_mainbooking($lat,$long) {
                $banner = array();
                $output = array();
                $stmt = $this->conn->prepare("SELECT * FROM `data_booking_category`");
                $stmt->execute();
                $result = $stmt->get_result();
                if($result->num_rows > 0){
                  while($res = $result->fetch_assoc()){
                    $response = array(
                      "category_id" => $res['cat_id'],
                      "category_name" => $res['cat_name'],
                      "category_photo" => BASE_URL_WEB.$res['cat_photo']
                    );
                    $output[]=$response;
                  }
                }
                $data = $this->curl("https://maps.googleapis.com/maps/api/geocode/json?latlng=".$lat.",".$long."&sensor=true&key=".key_map,"");
                $province = "";
                for ($i=0; $i < sizeof($data['results'][1]['address_components']) ; $i++) {
                  if ($data['results'][1]['address_components'][$i]['types'][0]=="administrative_area_level_1") {
                    if (sizeof(explode('Chang Wat ',$data['results'][1]['address_components'][$i]['long_name']))>1) {
                      $province=explode('Chang Wat ',$data['results'][1]['address_components'][$i]['long_name'])[1];
                      $province=str_replace("-","",$province);
                    }else{
                      $province=$data['results'][1]['address_components'][$i]['long_name'];
                      $province=str_replace("-","",$province);
                    }
                  }
                }
                if ($province=="") {
                  for ($i=0; $i < sizeof($data['results'][0]['address_components']) ; $i++) {
                    if ($data['results'][0]['address_components'][$i]['types'][0]=="administrative_area_level_1") {
                      if (sizeof(explode('Chang Wat ',$data['results'][0]['address_components'][$i]['long_name']))>1) {
                        $province=explode('Chang Wat ',$data['results'][0]['address_components'][$i]['long_name'])[1];
                        $province=str_replace("-","",$province);
                      }else{
                        $province=$data['results'][0]['address_components'][$i]['long_name'];
                        $province=str_replace("-","",$province);
                      }
                      break;
                    }
                  }
                }
                if ($province == 'Krung Thep Maha Nakhon') {
                  $province = 'Bangkok';
                }
                $sqlprovince = $this->conn->prepare("SELECT * FROM `data_province` WHERE province_name_en LIKE '%".$province."%'");
                $sqlprovince->execute();
                $resprovince = $sqlprovince->get_result();
                if($resprovince->num_rows > 0){
                  while($respro = $resprovince->fetch_assoc()){
                    $sqlbanner = $this->conn->prepare("SELECT * FROM `data_booking_banner` WHERE ban_province = '".$respro["province_id"]."'");
                    $sqlbanner->execute();
                    $resbanner = $sqlbanner->get_result();
                    while($resban = $resbanner->fetch_assoc()){
                      $response = array(
                        "banner_id" => $resban['ban_id'],
                        "banner_name" => $resban['ban_name'],
                        "banner_photo" => BASE_URL_WEB.$resban['ban_photo'],
                        "banner_province" => $province
                      );
                      $banner[]=$response;
                    }
                  }
                }else{
                  $sqlbanner = $this->conn->prepare("SELECT * FROM `data_booking_banner` WHERE ban_province = '999'");
                  $sqlbanner->execute();
                  $resbanner = $sqlbanner->get_result();
                  while($resban = $resbanner->fetch_assoc()){
                    $response = array(
                      "banner_id" => $resban['ban_id'],
                      "banner_name" => $resban['ban_name'],
                      "banner_photo" => BASE_URL_WEB.$resban['ban_photo'],
                      "banner_province" => $province
                    );
                    $banner[]=$response;
                  }
                }
                $return['category'] = $output;
                $return['banner'] = $banner;
                return $return;
              }

              /******** saveSearch ***********/
              public function saveRecent($user_id,$search) {
                $sql = "INSERT INTO `data_history_search` ( `user_id`, `history_search`, `history_search_date`) VALUES ( '$user_id', '$search', now() )";
                $stmt = $this->conn->prepare($sql);
                $result = $stmt->execute();
                $stmt->close();
                if ($result) {
                  return TRUE;
                }else{
                  return NULL;
                }
              }


              /*** getFollow ***/
              public function getFollow($user_id) {
                $followers = 0;
                $following = 0;
                $following   = $this->count_number('data_follow','user_id',$user_id);
                $followers  = $this->count_number('data_follow','follow_user',$user_id);

                $tmp =  array(
                  "followers"=>$followers,
                  "following"=>$following
                );
                return $tmp;
              }






              /*** gettravel ***/
              public function gettravel() {
                $stmt = $this->conn->prepare("SELECT * FROM `data_travel` where travel_status =1");
                $stmt->execute();
                $result = $stmt->get_result();
                if($result->num_rows > 0){
                  $stmt->close();
                  return $result;
                }else{
                  $stmt->close();
                  return NULL;
                }
              }
              /*** gettag ***/
              public function gettag() {
                $stmt = $this->conn->prepare("SELECT * FROM `data_tag` where tag_status=1");
                $stmt->execute();
                $result = $stmt->get_result();
                if($result->num_rows > 0){
                  $stmt->close();
                  return $result;
                }else{
                  $stmt->close();
                  return NULL;
                }
              }

              public function check_stock($packId,$packDate) {
                $stmt = $this->conn->prepare("SELECT * FROM `shop_package_stock` WHERE `id_shop_package` = '".$packId."' AND `date` LIKE '".$packDate."%' AND `status` = 1 ");
                $stmt->execute();
                $result = $stmt->get_result();
                $array = "";
                while($res = $result->fetch_assoc())
                {
                  $array = array(
                    'qly' => $res["qly"],
                    'balance' => $res["balance"]
                  );
                }
                $stmt->close();
                return $array;
              }

              public function getTagUser($user_id,$type) {
                $sql = '';

                if ($type==1) {
                  $sql = "SELECT * FROM `data_get_feeling` where user_id=".$user_id;
                }else if ($type==2){
                  $sql = "SELECT * FROM `data_get_travel` where user_id=".$user_id;
                }else {
                  $sql = "SELECT * FROM `data_get_tag` where user_id=".$user_id;
                }

                $stmt = $this->conn->prepare($sql);
                $stmt->execute();
                $result = $stmt->get_result();
                if($result->num_rows > 0){
                  $stmt->close();
                  return $result;
                }else{
                  $stmt->close();
                  return NULL;
                }
              }

              public function Getcoconut($user_id,$photo_id,$user_type) {
                if($user_type != "TAT"){
                  $sql = "  SELECT *,
                  (SELECT COUNT(follow_id) FROM data_follow WHERE user_id = '$user_id' and follow_user = a.user_id ) as follow
                  FROM `data_photo_like` a
                  LEFT JOIN data_user_account b on a.user_id = b.user_id
                  LEFT JOIN data_country c on c.country_id = b.country_id
                  WHERE photo_id =".$photo_id;
                  $stmt = $this->conn->prepare($sql);
                  $stmt->execute();
                  $result = $stmt->get_result();
                  if($result->num_rows > 0){
                    $stmt->close();
                    return $result;
                  }else{
                    $stmt->close();
                    return NULL;
                  }
                }else{
                  $sql = "  SELECT *,
                  (SELECT COUNT(follow_id) FROM data_follow WHERE user_id = '$user_id' and follow_user = a.tat_user_id ) as follow
                  FROM `photo_like_tat` a
                  LEFT JOIN data_user_account b on a.tat_user_id = b.user_id
                  LEFT JOIN data_country c on c.country_id = b.country_id
                  WHERE tat_post_id =".$photo_id;
                  $stmt = $this->conn->prepare($sql);
                  $stmt->execute();
                  $result = $stmt->get_result();
                  if($result->num_rows > 0){
                    $stmt->close();
                    return $result;
                  }else{
                    $stmt->close();
                    return NULL;
                  }
                }
              }




              public function AddDelete_Like($user_id,$photo_id,$type,$data) {
                // echo "SELECT * FROM data_log WHERE UserID = '".$user_id."' && Activity = 'Like' && Page = '".$photo_id."'";
                // exit();
                $stm = $this->conn->prepare("SELECT * FROM data_log WHERE UserID = '".$user_id."' && Activity = 'Like' && Page = '".$photo_id."'");
                $stm->execute();
                $result = $stm->get_result();
                // if(TRUE){
                if($result->num_rows == 0){
                  if ($type==2) {
                    $sqlScore = $this->conn->prepare("SELECT * FROM data_coconuts WHERE id = '1'");
                    $sqlScore->execute();
                    $resultScore = $sqlScore->get_result();
                    while($resScore = $resultScore->fetch_assoc())
                    {
                      $sqlPost = $this->conn->prepare("SELECT * FROM data_photos WHERE photo_id = '$photo_id'");
                      $sqlPost->execute();
                      $resultPost = $sqlPost->get_result();
                      while($resPost = $resultPost->fetch_assoc())
                      {
                        // $sqlLog = $this->conn->prepare("SELECT * FROM data_user_account WHERE user_id = '".$resPost["user_id"]."'");
                        $sqlUser = $this->conn->prepare("SELECT * FROM data_user_account WHERE user_id = '".$resPost["user_id"]."'");
                        $sqlUser->execute();
                        $resultUser = $sqlUser->get_result();
                        while($resUser = $resultUser->fetch_assoc())
                        {
                          $point = $resScore['value'];
                          $sqlLog = "insert into data_log(UserID,Page,Activity,Time,point)values('$user_id','$photo_id','Like',Now(),'$point')";
                          $score = $resUser['user_coconut']+$point;
                          // echo $user_id . ' - ' . $resPost["user_id"];
                          if($user_id != $resPost["user_id"]){
                            $sqlUser = $this->conn->prepare("SELECT * FROM data_user_account WHERE user_id = '".$user_id."'");
                            $sqlUser->execute();
                            $resultUser = $sqlUser->get_result();
                            while($resUsersend = $resultUser->fetch_assoc())
                            {
                              $getdata = json_decode($data, true);
                              $title = $resUsersend["user_firstname"] . " " . $resUsersend["user_lastname"];
                              $message = "Like your post";
                              $getdata["sum_like"] = $getdata["sum_like"]+1;
                              $getdata["typeNoti"] = "like";
                              $data = json_encode($getdata);
                              $sql = "SELECT * FROM data_device_register WHERE member_id='".$getdata["user_id"]."' AND device_uuid != ''";
                              $stmt = $this->conn->prepare($sql);
                              $stmt->execute();
                              $result = $stmt->get_result();
                              // echo $title;
                              // echo $message;
                              // print_r($data);
                              // exit();
                              if($result->num_rows > 0){
                                define( 'API_ACCESS_KEY', 'AIzaSyC71MK0GrfVX3x0ZjqcFzXgPCn5VeDh2kg' );
                                while($res = $result->fetch_assoc())
                                {
                                  $registrationIds = $res['device_uuid'];
                                  $msg = array(
                                    'messageKey' 	=> $message,
                                    'title'		=> $title,
                                    'body' => $message,
                                    'sound' => 'true',
                                    'tickerText'	=> 'Ticker text here...Ticker text here...Ticker text here',
                                    'vibrate'	=> 1,
                                    'sound'		=> 1,
                                    'largeIcon'	=> 'large_icon',
                                    'smallIcon'	=> 'small_icon',
                                    'urlto'	=> 'asdasdsa',
                                    'moreData'=> $data
                                  );

                                  if ($res["device_platform"] == '2') {
                                    $arrayToSend = array('to' => $registrationIds, 'notification' => $msg,'priority'=>'high' );
                                  }else{
                                    $arrayToSend = array('to' => $registrationIds, 'data' => $msg,'priority'=>'high');
                                  }
                                  $headers = array(
                                    'Authorization: key=' . API_ACCESS_KEY,
                                    'Content-Type: application/json'
                                  );
                                  $ch = curl_init();

                                  curl_setopt($ch, CURLOPT_USERPWD, "myusername:mypassword");
                                  curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
                                  // curl_setopt( $ch,CURLOPT_URL, 'https://android.googleapis.com/gcm/send' );
                                  curl_setopt( $ch,CURLOPT_POST, true );
                                  curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
                                  curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
                                  curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
                                  curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $arrayToSend ) );
                                  curl_exec($ch );
                                  curl_close( $ch );
                                }
                              }
                            }
                            $sqlUpdate = "UPDATE data_user_account SET user_coconut = '$score' WHERE user_id = '".$resPost["user_id"]."'";
                            $stmtUpdate = $this->conn->prepare($sqlUpdate);
                            $result = $stmtUpdate->execute();

                            $sql_in = "INSERT INTO `data_user_notification` (`noti_detail`, `noti_post_id`, `noti_user_doer`, `noti_user_ owner`, `noti_type`, `noti_time`)
                            VALUES ('like your post', '".$photo_id."', '".$user_id."', '".$resPost["user_id"]."', '0', NOW())";
                            $stmt_in = $this->conn->prepare($sql_in);
                            $stmt_in->execute();
                          }
                        }
                      }
                    }
                  }else{
                    $sqlLog = "insert into data_log(UserID,Page,Activity,Time,status)values('$user_id','$photo_id','Like',Now(),'2')";
                  }
                }else{
                  if ($type==2) {
                    $sqlLog  ="UPDATE data_log SET status = '1', Time = now() WHERE UserID = '$user_id' && Activity = 'Like' && Page = '".$photo_id."'";
                  }else{
                    $sqlLog  ="UPDATE data_log SET status = '2', Time = now() WHERE UserID = '$user_id' && Activity = 'Like' && Page = '".$photo_id."'";
                  }
                }
                $stmt = $this->conn->prepare($sqlLog);
                $result = $stmt->execute();

                if ($type==2) {
                  $sql = "DELETE FROM `data_photo_like` where user_id=".$user_id." and photo_id=".$photo_id;
                  $stmt = $this->conn->prepare($sql);
                  $result = $stmt->execute();
                  $sql = "INSERT INTO `data_photo_like` ( `user_id`, `photo_id`, `photo_like_createdate`)
                  VALUES ( '$user_id', '$photo_id', now() )";
                }else{
                  $sql = "DELETE FROM `data_photo_like` where user_id=".$user_id." and photo_id=".$photo_id;
                }
                $stmt = $this->conn->prepare($sql);
                $result = $stmt->execute();
                $stmt->close();
                if ($result) {
                  return TRUE;
                }else{
                  return NULL;
                }
              }

              public function AddDelete_Like_TAT($user_id,$photo_id,$type,$data) {
                $stm = $this->conn->prepare("SELECT * FROM data_log WHERE UserID = '".$user_id."' AND Activity = 'Like' AND User = 'TAT' AND Page = '".$photo_id."'");
                $stm->execute();
                $result = $stm->get_result();
                $sqlLog = "";
                if($result->num_rows == 0){
                  if ($type==2) {
                    $sqlLog = "insert into data_log(UserID,Page,Activity,Time,status,User)values('$user_id','$photo_id','Like',Now(),'2','TAT')";
                  }else{
                    $sqlLog = "insert into data_log(UserID,Page,Activity,Time,status,User)values('$user_id','$photo_id','Like',Now(),'1','TAT')";
                  }
                }else{
                  if ($type==2) {
                    $sqlLog ="UPDATE data_log SET status = '1', Time = now() WHERE UserID = '$user_id' && Activity = 'Like' && Page = '".$photo_id."'";
                  }else{
                    $sqlLog ="UPDATE data_log SET status = '2', Time = now() WHERE UserID = '$user_id' && Activity = 'Like' && Page = '".$photo_id."'";
                  }
                }
                // echo $sqlLog;
                // exit();
                $stmt = $this->conn->prepare($sqlLog);
                $result = $stmt->execute();

                if ($type==2) {
                  $sql = "DELETE FROM `photo_like_tat` where tat_user_id=".$user_id." and tat_post_id=".$photo_id;
                  $stmt = $this->conn->prepare($sql);
                  $result = $stmt->execute();
                  $sql = "INSERT INTO `photo_like_tat` (`tat_user_id`, `tat_post_id`, `tat_photo_like_createdate`)
                  VALUES ('".$user_id."', '".$photo_id."', now())";
                }else{
                  $sql = "DELETE FROM `photo_like_tat` where tat_user_id=".$user_id." and tat_post_id=".$photo_id;
                }
                // echo $sql;
                // exit();
                $stmt = $this->conn->prepare($sql);
                $result = $stmt->execute();
                $stmt->close();
                if ($result) {
                  return TRUE;
                }else{
                  return NULL;
                }
              }


              public function AddDelect_bookmark($user_id,$photo_id,$type,$userType) {
                if ($type==2) {
                  if($userType != "TAT"){
                    $sql = "DELETE FROM `data_photo_bookmark` where user_id=".$user_id." and photo_id= '".$photo_id."' and post_type = '1'";
                    $stmt = $this->conn->prepare($sql);
                    $result = $stmt->execute();
                    $sql = "INSERT INTO `data_photo_bookmark` ( `user_id`, `photo_id`, `photo_bookmark_createdate`, `post_type`)
                    VALUES ( '$user_id', '$photo_id', now(), '1' )";
                  }else{
                    $sql = "DELETE FROM `data_photo_bookmark` where user_id=".$user_id." and photo_id= '".$photo_id."' and post_type = '2'";
                    $stmt = $this->conn->prepare($sql);
                    $result = $stmt->execute();
                    $sql = "INSERT INTO `data_photo_bookmark` ( `user_id`, `photo_id`, `photo_bookmark_createdate`, `post_type`)
                    VALUES ( '$user_id', '$photo_id', now(), '2' )";
                  }

                }else{
                  if($userType != "TAT"){
                    $sql = "DELETE FROM `data_photo_bookmark` where user_id=".$user_id." and photo_id= '".$photo_id."' and post_type = '1'";

                  }else{
                    $sql = "DELETE FROM `data_photo_bookmark` where user_id=".$user_id." and photo_id= '".$photo_id."' and post_type = '2'";

                  }
                }
                $stmt = $this->conn->prepare($sql);
                $result = $stmt->execute();
                $stmt->close();
                if ($result) {
                  return TRUE;
                }else{
                  return NULL;
                }
              }


              public function insertfollowing($user_id,$follow_user,$type,$data) {
                if ($type==1) {
                  $sql = "DELETE from data_follow where user_id = '$user_id' and follow_user = '$follow_user'";
                  $stmt = $this->conn->prepare($sql);
                  $result = $stmt->execute();
                  $sql = "INSERT INTO `data_follow` ( `user_id`, `follow_user`, `follow_date`)
                  VALUES ( '$user_id', '$follow_user', now() )";
                }else{
                  $sql = "DELETE from data_follow where user_id = '$user_id' and follow_user = '$follow_user'";
                }
                $stmt = $this->conn->prepare($sql);
                $result = $stmt->execute();
                $stmt->close();
                if($type==1){
                  $getdata = json_decode($data, true);
                  $sqlUser = $this->conn->prepare("SELECT * FROM data_user_account WHERE user_id = '".$getdata["user_id"]."'");
                  $sqlUser->execute();
                  $resultUser = $sqlUser->get_result();
                  while($resUser = $resultUser->fetch_assoc())
                  {
                    $title = $resUser["user_firstname"] . " " . $resUser["user_lastname"];
                    $message = "Followers your";
                    $getdata["typeNoti"] = "follow";
                    $data = json_encode($getdata);
                    $sql = "SELECT * FROM data_device_register WHERE member_id='".$follow_user."' AND device_uuid != ''";
                    $stmt = $this->conn->prepare($sql);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    if($result->num_rows > 0){
                      define( 'API_ACCESS_KEY', 'AIzaSyC71MK0GrfVX3x0ZjqcFzXgPCn5VeDh2kg' );
                      while($res = $result->fetch_assoc())
                      {
                        $registrationIds = $res['device_uuid'];
                        $msg = array(
                          'messageKey' 	=> $message,
                          'title'		=> $title,
                          'body' => $message,
                          'sound' => 'true',
                          'tickerText'	=> 'Ticker text here...Ticker text here...Ticker text here',
                          'vibrate'	=> 1,
                          'sound'		=> 1,
                          'largeIcon'	=> 'large_icon',
                          'smallIcon'	=> 'small_icon',
                          'urlto'	=> 'asdasdsa',
                          'moreData'=> $data
                        );

                        if ($res["device_platform"] == '2') {
                          $arrayToSend = array('to' => $registrationIds, 'notification' => $msg,'priority'=>'high' );
                        }else{
                          $arrayToSend = array('to' => $registrationIds, 'data' => $msg,'priority'=>'high');
                        }
                        $headers = array(
                          'Authorization: key=' . API_ACCESS_KEY,
                          'Content-Type: application/json'
                        );

                        $ch = curl_init();

                        curl_setopt($ch, CURLOPT_USERPWD, "myusername:mypassword");
                        curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
                        // curl_setopt( $ch,CURLOPT_URL, 'https://android.googleapis.com/gcm/send' );
                        curl_setopt( $ch,CURLOPT_POST, true );
                        curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
                        curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
                        curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
                        curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $arrayToSend ) );
                        curl_exec($ch );
                        curl_close( $ch );
                      }
                    }
                  }
                }
                if ($result) {
                  return TRUE;
                }else{
                  return NULL;
                }
              }

              public function chack_following($user_id,$follow_user) {
                // data_follow
                $sql2="SELECT * FROM data_follow where user_id = '".$user_id."' and follow_user=". $follow_user;
                $stmt2 = $this->conn->prepare($sql2);
                $stmt2->execute();
                $result2 = $stmt2->get_result();
                $status_Follow = false;
                $tmp=$this->getFollow($follow_user);
                if ($result2->num_rows>0) {
                  $tmp['stfollow'] = TRUE;
                  return $tmp;
                }else{
                  $tmp['stfollow'] = NULL;
                  return $tmp;
                }
              }






              public function randomTraval() {
                $sql = " SELECT *  FROM `data_attraction`";
                $stmt = $this->conn->prepare($sql);
                $stmt->execute();
                $result2 = $stmt->get_result();
                $output =array();
                if($result2->num_rows > 0){
                  while($res = $result2->fetch_assoc())
                  {
                    $response = array(
                      "img" => $res['picture_file_path']
                    );
                    $output[]=$response;
                  }
                  return $output;
                }else{
                  return NULL;
                }
                //         $test = array();
                //           for ($i=588; $i < 600; $i++) {
                //             $checkdata = $this->curl('https://api.tourismthailand.org/get_destination?destination_id='.$i.'&token=1ac0d500a5154',"");
                //         // print_r($checkdata['error_msg']);
                //            if($checkdata['error_msg'] == "Success") {
                //               //  $arrayName = array(
                //               //                     'destination_id' => $checkdata['result'][0]['destination_id'],
                //               //                     'destination_name' => $checkdata['result'][0]['destination_name'],
                //               //                    );
                //               // $test[] = $arrayName;
                //              $destination_id = $checkdata['result'][0]['destination_id'];
                //              $region_id = $checkdata['result'][0]['region_id'];
                //              $destination_name = $checkdata['result'][0]['destination_name'];
                //              $destination_image = $checkdata['result'][0]['destination_image'];
                //              $lat = $checkdata['result'][0]['lat'];
                //              $long = $checkdata['result'][0]['long'];
                //              $subtitle = $checkdata['result'][0]['subtitle'];
                //              $Introduction = $checkdata['result'][0]['Introduction'];
                //                $sql="INSERT INTO `data_province_api` (`destination_id`, `region_id`,`destination_name`,`destination_image`,`lat`,`long`,`subtitle`,`Introduction`)
                //               VALUES ('$destination_id','$region_id','$destination_name','$destination_image','$lat','$long','$subtitle',".'"'.$Introduction.'"'.")";
                //               $stmt =  $this->conn->prepare($sql);
                //               $result = $stmt->execute();
                //             }
                //           }
                //       // print_r($test);
                //       // exit();
                //       if ($result) {
                //         return TRUE;
                //       }else{
                //         return NULL;
                //       }
                // //       $stmt = $this->conn->prepare("SELECT * FROM `data_province_api`");
                // //       $stmt->execute();
                // //       $result = $stmt->get_result();
                // //       while($res = $result->fetch_assoc())
                // //       {
                // //         echo "SELECT * FROM `data_province` where province_name_en = ".$res['destination_name'];
                // //         exit();
                // //         $stmt2 = $this->conn->prepare("SELECT * FROM `data_province` where province_name_en = ".$res['destination_name']);
                // //         $stmt2->execute();
                // //         $result2 = $stmt2->get_result();
                // //         if ($result2->num_rows == 0) {
                // //           $response2  = array('destination_name' => $res['destination_name']);
                // //           $dataimg_bottom[]=$response2;
                // //         }
                // //       }
                // // print_r($dataimg_bottom);
                //       exit();

              }


              public function tourismthailandimg() {


                $list =" 'KuanTubsalao',
                'Tham Hup Pa Tat',
                'Khao Pla Ra',
                'Para Hill',
                'Cyber Waterfall',
                'Avatar Uthai Thani',
                'Uthai River Lake',
                'Phu Seang Thong Resort and Sp',
                'Namtok Pha Rom Yen',
                'Phu Wai Cave',
                'Luang Pho To Wat Phatung',
                'Wat Tam Khaowong',
                'Wat Tamkhao Tapab',
                'Wat Khao Wong Phrommachan',
                'Wat Nong Phluang',
                'Samor Thong Hot Spring',
                'Wat NongKhun Chat',
                'Ancient Uthaithani',
                'Wat Thapthan Watthanaram',
                'Khao Sakaekrang',
                'Rafts on Sakae Krang River',
                'Khao Wong National Park',
                'Koh Thepho',
                'Wat Uposatharam',
                'Wat Sangkat Rattana Khiri',
                'Wat Thammakosok',
                'Wat Chantaram',
                'Wat Sangkat Rattana Khiri',
                'Wat Mani Sathit Kapittharam',
                'Tiang Mani',
                'Pha Tho Si Thammachat',
                'Am Phan',
                'Bannamhoo bungalow',
                'chiangkhong greeninn'";


                echo $sql2="SELECT attraction_id,picture_file_path,picture_file_path_2,picture_file_path_3,picture_file_path_4,picture_file_path_5 FROM `data_attraction` where  (`attraction_name` IN ($list))";
                exit();
                $stmt2 = $this->conn->prepare($sql2);
                $stmt2->execute();
                $result2 = $stmt2->get_result();
                $output =array();
                if ($result2->num_rows>0) {
                  while($res = $result2->fetch_assoc())
                  {

                    $sql1 = "DELETE  FROM `data_attraction_img` WHERE `attraction_id` = ".$res['attraction_id'];
                    $stmt1 = $this->conn->prepare($sql1);
                    $stmt1->execute();

                    if (!$this->is_404($res['picture_file_path'])) {
                      // รูป
                      $b64image = 'data:image/jpeg;base64,'.base64_encode(file_get_contents($res['picture_file_path']));
                      $textreturn = $this->func->check_baseimg_ext($b64image);
                      $today = date("Y-m-d-H-i-s").rand(11111,99999).'.'.$textreturn['ext'];
                      $uploadFileNew = $this->func->uploadfilemessage($b64image, "data_tourismthai" , $res['attraction_id'],$today);
                      $uploadFileNew = explode("../../", $uploadFileNew);
                      $stmt = $this->conn->prepare("INSERT INTO `data_attraction_img` (`attraction_img_id`, `attraction_id`, `attraction_img_path`, `attraction_img_create`) VALUES (NULL, '".$res['attraction_id']."', '$uploadFileNew[1]', CURRENT_TIMESTAMP);");
                      $stmt->execute();
                    }
                    for ($m=2; $m <= 5 ; $m++) {
                      $imgp = $res['picture_file_path_'.$m];
                      if (!$this->is_404($imgp) && $imgp !="") {
                        $b64image = 'data:image/jpeg;base64,'.base64_encode(file_get_contents($imgp));
                        $textreturn = $this->func->check_baseimg_ext($b64image);
                        $today = date("Y-m-d-H-i-s").rand(11111,99999).'.'.$textreturn['ext'];
                        $uploadFileNew = $this->func->uploadfilemessage($b64image, "data_tourismthai" , 'T'.$res['attraction_id'].$m,$today);
                        $uploadFileNew = explode("../../", $uploadFileNew);
                        $stmt = $this->conn->prepare("INSERT INTO `data_attraction_img` (`attraction_img_id`, `attraction_id`, `attraction_img_path`, `attraction_img_create`) VALUES (NULL, '".$res['attraction_id']."', '$uploadFileNew[1]', CURRENT_TIMESTAMP);");
                        $stmt->execute();
                      }
                    }

                    $sql2= "  INSERT INTO `data_attraction_img_log` ( `attraction_img_id`) VALUES ( '".$res['attraction_id']."');";
                    $stmt2 =  $this->conn->prepare($sql2);
                    $stmt2->execute();

                    $output[] = $res;
                  }
                  return $output;
                }else{
                  return NULL;
                }
              }

              public function Tourismthailand() {

                $type = array("get_Attraction", "get_Accommodation", "get_Food_Drink","get_Shopping");
                $sql = " SELECT *  FROM `data_province_api`";
                $stmt = $this->conn->prepare($sql);
                $stmt->execute();
                $result2 = $stmt->get_result();
                if($result2->num_rows > 0){
                  while($res = $result2->fetch_assoc())
                  {
                    $destination_id = $res['destination_id'];
                    for ($x=1; $x <= 4 ; $x++) {
                      for ($m=1; $m <= 20 ; $m++) {
                        $data = $this->curl('https://api.tourismthailand.org/'.$type[$x-1].'?destination_id='.$destination_id.'&page_num='.$m.'&token=1ac0d500a5154',"");
                        if($data['error_code'] == "200") {
                          for ($i=0; $i < sizeof($data['result']) ; $i++) {
                            $attraction_name= str_replace("'","\'",$data['result'][$i]['name']);
                            $attraction_type = $x;
                            $attraction_detail = str_replace("'","\'",$data['result'][$i]['detail']);
                            $picture_file_path = $data['result'][$i]['picture_file_path'];
                            $attraction_place_id = $data['result'][$i]['place_id'];
                            $picture_file_path_2 = $data['result'][$i]['picture_file_path_2'];
                            $picture_file_path_3 = $data['result'][$i]['picture_file_path_3'];
                            $picture_file_path_4 = $data['result'][$i]['picture_file_path_4'];
                            $picture_file_path_5 = $data['result'][$i]['picture_file_path_5'];
                            $attraction_time = $data['result'][$i]['operating_time'];
                            $attraction_day = $data['result'][$i]['operating_day'];
                            $attraction_phone = $data['result'][$i]['contact_detail'][0]['phone'];
                            $attraction_address = str_replace("'","\'",$data['result'][$i]['contact_detail'][0]['address']);
                            $attraction_lat = str_replace("'","\'",$data['result'][$i]['contact_detail'][0]['latitude']);
                            $attraction_lat = str_replace('"'," ",$attraction_lat);
                            $attraction_long = str_replace("'","\'",$data['result'][$i]['contact_detail'][0]['longitude']);
                            $attraction_long = str_replace('"'," ",$attraction_long);
                            $province_id = "(SELECT province_id FROM data_province WHERE province_name_en = (SELECT destination_name  FROM data_province_api WHERE destination_id = ".$destination_id."))";
                            $sql = "INSERT INTO `data_attraction` ( attraction_place_id,`attraction_name`, `attraction_type`, `attraction_detail`, picture_file_path,picture_file_path_2,picture_file_path_3,picture_file_path_4,picture_file_path_5,`attraction_time`, `attraction_day`, attraction_address,attraction_phone,`attraction_lat`, `attraction_long`, `province_id`, `attraction_createdate`, `attraction_page_num`,attraction_link,attraction_from) VALUES";
                            $sql .= "('$attraction_place_id','$attraction_name', '$attraction_type', '$attraction_detail','$picture_file_path','$picture_file_path_2','$picture_file_path_3','$picture_file_path_4','$picture_file_path_5', '$attraction_time', '$attraction_day','$attraction_address','$attraction_phone', '$attraction_lat', '$attraction_long', $province_id, now(), '$m','".$type[$x-1]."',1)";
                            $stmt =  $this->conn->prepare($sql);
                            $result = $stmt->execute();
                            if ($result) {
                              $last_id = $this->conn->insert_id;

                              $this->howtogo($x,$attraction_place_id);
                              $this->facility($attraction_place_id);
                              if ($x == 2) {
                                $this->room($attraction_place_id);
                              }
                              // category
                              $category_detail = $data['result'][$i]['category_detail'];
                              for ($j=0; $j < sizeof($category_detail) ; $j++) {
                                $cat_name =  str_replace("'","\'",$category_detail[$j]['cat_name']) ;
                                $detail =  str_replace("'","\'",$category_detail[$j]['detail']) ;
                                $sql1= "INSERT INTO `data_attraction_category` (`attraction_category_cat_id`, `attraction_id`, `attraction_category_name`,attraction_category_detail ,`attraction_category_create`)
                                VALUES (".$category_detail[$j]['cat_id'].", $last_id, '".$cat_name."','".$detail."', CURRENT_TIMESTAMP);";
                                $stmt1 =  $this->conn->prepare($sql1);
                                $result1 = $stmt1->execute();
                              }
                            }
                          }
                        }
                      }
                      $sql2= "INSERT INTO `data_attraction_log` ( `attraction_log_province`, `attraction_log_type`) VALUES ( '$destination_id', '$x');";
                      $stmt2 =  $this->conn->prepare($sql2);
                      $stmt2->execute();
                    }
                  }

                }else{
                  $stmt->close();
                  return NULL;
                }

                return TRUE;
                // if ($result) {
                //   return TRUE;
                // }else{
                //   return NULL;
                // }


              }

              //
              function howtogo($type,$place_id){
                $data = $this->curl('https://api.tourismthailand.org/get_how_to_go?menu_id='.$type.'&place_id='.$place_id.'&token='.tokenTTT,"");
                $data = $data['result'][0];
                $place_id = $data['place_id'];
                $by_car = str_replace("'","\'",$data['by_car']);
                $by_bus = str_replace("'","\'",$data['by_bus']);
                $by_train = str_replace("'","\'",$data['by_train']);
                $by_plane = str_replace("'","\'",$data['by_plane']);
                $by_boat = str_replace("'","\'",$data['by_boat']);
                $by_other = str_replace("'","\'",$data['by_other']);
                $by_BTS = str_replace("'","\'",$data['by_BTS']);
                $by_MRT = str_replace("'","\'",$data['by_MRT']);
                $sql3= "INSERT INTO `data_attraction_howtogo` (`howtogo_id`, `place_id`, `by_car`, `by_bus`, `by_train`, `by_plane`, `by_boat`, `by_other`, `by_BTS`, `by_MRT`, `From_data`)
                VALUES (NULL, '$place_id', '".$by_car."', '".$by_bus."', '".$by_train."', '".$by_plane."', '".$by_boat."', '".$by_other."','".$by_BTS."','".$by_MRT."', '1');";
                $stmt3 =  $this->conn->prepare($sql3);
                $stmt3->execute();
              }
              function facility($place_id){
                $data = $this->curl('https://api.tourismthailand.org/get_accommodation_facility?place_id='.$place_id.'&token='.tokenTTT,"");
                $data = $data['result'];
                for ($i=0; $i < sizeof($data) ; $i++) {
                  $sql3= "INSERT INTO `data_attraction_facility` (`facility_id`, `place_id`, `facility_text`) VALUES (NULL, '$place_id', '".$data[$i]['accommodation_facility_text']."');";
                  $stmt3 =  $this->conn->prepare($sql3);
                  $stmt3->execute();
                }
              }

              function room($place_id){
                $data = $this->curl('https://api.tourismthailand.org/get_accommodation_room?place_id='.$place_id.'&token='.tokenTTT,"");
                $data = $data['result'];
                for ($i=0; $i < sizeof($data) ; $i++) {
                  $room_type_id = $data[$i]['room_type_id'];
                  $room_type_name = str_replace("'","\'",$data[$i]['room_type_name']);
                  $room_type_detail = str_replace("'","\'",$data[$i]['room_type_detail']);
                  $room_type_size = $data[$i]['room_type_size'];
                  $room_type_unit = $data[$i]['room_type_unit'];
                  $admission_charge_USD_from = $data[$i]['admission_charge_USD_from'];
                  $admission_charge_USD_to = $data[$i]['admission_charge_USD_to'];
                  $admission_charge_BHT_from = $data[$i]['admission_charge_BHT_from'];
                  $admission_charge_BHT_to = $data[$i]['admission_charge_BHT_to'];
                  $room_facility = $data[$i]['room_facility'];
                  $remark = str_replace("'","\'",$data[$i]['remark']);
                  $picture_file_path = $data[$i]['picture_file_path'];
                  $picture_caption = str_replace("'","\'",$data[$i]['picture_caption']);
                  $place_id = $data[$i]['place_id'];
                  $sql = "INSERT INTO `data_attraction_room` ( `room_type_id`, `room_type_name`, `room_type_detail`, `room_type_size`, `room_type_unit`, `admission_charge_USD_from`, `admission_charge_USD_to`, `admission_charge_BHT_from`, `admission_charge_BHT_to`, `room_facility`, `remark`, `picture_file_path`, `picture_caption`, `place_id`)
                  VALUES ( '$room_type_id', '$room_type_name', '$room_type_detail', '$room_type_size', '$room_type_unit', '$admission_charge_USD_from', '$admission_charge_USD_to', '$admission_charge_BHT_from', '$admission_charge_BHT_to', '$room_facility', '$remark', '$picture_file_path', '$picture_caption', '$place_id');";
                  $stmt3 =  $this->conn->prepare($sql);
                  $stmt3->execute();
                }
              }



              function is_404($url) {
                $handle = curl_init($url);
                curl_setopt($handle,  CURLOPT_RETURNTRANSFER, TRUE);
                /* Get the HTML or whatever is linked in $url. */
                $response = curl_exec($handle);
                /* Check for 404 (file not found). */
                $httpCode = curl_getinfo($handle, CURLINFO_HTTP_CODE);
                curl_close($handle);
                /* If the document has loaded successfully without any redirection or error */
                if ($httpCode >= 200 && $httpCode < 300) {
                  return false;
                } else {
                  return true;
                }
              }


              /*** getShops ***/
              public function getShops($id) {
                if ($id==1) {
                  $stmt = $this->conn->prepare("SELECT * FROM `data_Shops` ");
                  $text = "shop";
                }else if ($id==4) {
                  $stmt = $this->conn->prepare("SELECT * FROM `data_Hotels` ");
                  $text = "hotel";
                }else if ($id==2) {
                  $stmt = $this->conn->prepare("SELECT * FROM `data_Activities` ");
                  $text = "activitie";
                }else if($id == 5){
                  $stmt = $this->conn->prepare("SELECT * FROM `data_Shops` ");
                  $text = "shop";
                }
                $stmt->execute();
                $result = $stmt->get_result();
                $output =array();
                $dataimg_top = array();
                $dataimg_bottom = array();
                if($result->num_rows > 0){
                  while($res = $result->fetch_assoc())
                  {
                    if ($id==1) {
                      $stmt2 = $this->conn->prepare("SELECT * FROM `data_Shops_img` where shop_id=".$res['shop_id']);
                    }else if ($id==4) {
                      $stmt2 = $this->conn->prepare("SELECT * FROM `data_Hotels_img` where hotel_id=".$res['hotel_id']);
                    }else if ($id==2) {
                      $stmt2 = $this->conn->prepare("SELECT * FROM `data_Activities_img` where activitie_id=".$res['activitie_id']);
                    }else if ($id==5) {
                      $stmt2 = $this->conn->prepare("SELECT * FROM `data_Shops_img` where shop_id=".$res['shop_id']);
                    }
                    $stmt2->execute();
                    $result2 = $stmt2->get_result();
                    if($result2->num_rows > 0){
                      $dataimg_top = [];
                      $dataimg_bottom = [];
                      while($res2 = $result2->fetch_assoc())
                      {
                        if ($res2[$text.'_img_position']==1) {
                          $response2  = array(
                            'attractions_img_id' => $res2[$text.'_img_id'],
                            'attractions_img_path' => BASE_URL.$res2[$text.'_img_path'],
                          );
                          $dataimg_top[]=$response2;
                        }else {
                          $response2  = array(
                            'attractions_img_id' => $res2[$text.'_img_id'],
                            'attractions_img_path' => BASE_URL.$res2[$text.'_img_path'],
                          );
                          $dataimg_bottom[]=$response2;
                        }
                      }
                    }
                    $response = array(
                      "attractions_id" => $res[$text.'_id'],
                      "attractions_name" => $res[$text.'_name'],
                      "attractions_location" => $res[$text.'_location'],
                      "attractions_la" => $res[$text.'_la'],
                      "attractions_long" => $res[$text.'_long'],
                      "attractions_detail" => $res[$text.'_detail'],
                      "attractions_img_top" => $dataimg_top,
                      "attractions_img_bottom" => $dataimg_bottom
                    );
                    $output[]=$response;
                  }


                  return $output;
                }else{
                  return NULL;
                }
              }

              /*** getRestaurant ***/
              public function getRestaurant() {
                $stmt = $this->conn->prepare("SELECT * FROM `data_Restaurant` ");
                $stmt->execute();
                $result = $stmt->get_result();
                $output =array();
                if($result->num_rows > 0){
                  while($res = $result->fetch_assoc())
                  {
                    $response = array(
                      "attractions_id" => $res['restaurant_id'],
                      "attractions_name" => $res['restaurant_name'],
                      "attractions_location" => $res['restaurant_location'],
                      "attractions_detail" => $res['restaurant_detail'],
                      "attractions_la" => $res['restaurant_la'],
                      "attractions_long" => $res['restaurant_long'],
                      "attractions_img_top" => [array('attractions_img_path'=>BASE_URL.$res['restaurant_path_img'])]
                    );
                    $output[]=$response;
                  }
                  return $output;
                }else{
                  return NULL;
                }
              }


              /*** get_Tourist ***/
              public function get_Tourist($data_province,$lat,$long,$type,$LoadMoreLimit,$numLoad) {
                // $type = 1;
                // $data_province = 'Bangkok';
                // $lat = '13.7563309';
                // $long = '100.50176510000006';

                if ($lat !="" &&  $long !="") {
                  if($type != 5){
                    $sql = "SELECT *,
                    LOWER(attraction_name),(3959 * ACOS(COS(RADIANS($lat)
                  ) * COS(RADIANS(attraction_lat)) * COS(
                    RADIANS(attraction_long) - RADIANS($long)
                  ) + SIN(RADIANS($lat)) * SIN(RADIANS(attraction_lat)))
                ) as distant FROM `data_attraction` WHERE attraction_type = $type and province_id=(SELECT province_id FROM `data_province`
                  WHERE province_name_en = '$data_province') or attraction_type = $type order by distant LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
                }else{
                  $sql = "SELECT *,
                  LOWER(attraction_name),(3959 * ACOS(COS(RADIANS($lat)
                ) * COS(RADIANS(attraction_lat)) * COS(
                  RADIANS(attraction_long) - RADIANS($long)
                ) + SIN(RADIANS($lat)) * SIN(RADIANS(attraction_lat)))
              ) as distant FROM `data_attraction` WHERE province_id=(SELECT province_id
                FROM `data_province` WHERE province_name_en = '$data_province') or attraction_type = $type order by distant LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
              }

            }else{
              $sql = "SELECT *,LOWER(attraction_name) FROM `data_attraction` WHERE attraction_type = $type and province_id=(SELECT province_id FROM `data_province` WHERE province_name_en = '$data_province') LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
            }

            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->get_result();
            $output =array();
            if($result->num_rows > 0){
              while($res = $result->fetch_assoc())
              {
                $stmt1 = $this->conn->prepare("SELECT * FROM `data_attraction_category` where attraction_id = ".$res['attraction_id']);
                $stmt1->execute();
                $result1 = $stmt1->get_result();
                if($result1->num_rows > 0){
                  $res['category']=[];
                  while($res1 = $result1->fetch_assoc())
                  {
                    $res['category'][]=$res1;
                  }
                }
                $res['attraction_detail']=htmlspecialchars_decode($res['attraction_detail']) ;
                $res['attraction_detail'] = str_replace('<p>',"",$res['attraction_detail']);
                $res['attraction_detail'] = str_replace('</p>',"",$res['attraction_detail']);
                $res['attraction_detail'] = str_replace('<p',"<span",$res['attraction_detail']);
                $res['attraction_detail_tx'] = str_replace('<br />',"",$res['attraction_detail']);
                $res['attraction_detail_tx'] = str_replace('&ldquo;',"",$res['attraction_detail_tx']);
                $res['attraction_detail_tx'] =  substr(  $res['attraction_detail_tx'],0,500);
                // $res['attraction_detail'] = str_replace('&ldquo;',"",$res['attraction_detail']);
                for ($i=1; $i <=5 ; $i++) {
                  $res['picture_path'.$i] ="";
                }
                $stmt2 = $this->conn->prepare("SELECT * FROM `data_attraction_img` WHERE attraction_img_status=1 and  `attraction_id` =".$res['attraction_id']);
                $stmt2->execute();
                $result2 = $stmt2->get_result();
                if($result2->num_rows > 0){
                  $n=1;
                  while($res2 = $result2->fetch_assoc())
                  {
                    $res['picture_path'.$n++]=BASE_URL.$res2['attraction_img_path'];
                  }
                  $output[]=$res;
                }
                // $res['attraction_detail'] = str_replace('<p',"<span",$res['attraction_detail']);

              }
              // print_r($output);
              return $output;
            }else{

              return NULL;
            }
          }


          /*** Updatereadmessenger ***/
          public function Updatereadmessenger($user_id,$room_id) {
            $sql  ="UPDATE data_message SET status_read = '2',date_read = now() WHERE room_id = '$room_id' and user_id != '$user_id' and status_read = 1";
            $stmt = $this->conn->prepare($sql);
            $result=$stmt->execute();
            if($result){
              return $result;
            }else{
              return NULL;
            }
          }

          /*** getRestaurant ***/
          public function Postmessenger($user_id,$room_id,$message_text) {
            $sql="INSERT INTO `data_message` (message_text, `user_id`,room_id,status_send) VALUES ('$message_text','$user_id','$room_id','1')";
            $stmt =  $this->conn->prepare($sql);
            $result = $stmt->execute();
            if($result){
              $stmt = $this->conn->prepare("UPDATE data_room SET room_update = now() WHERE room_id = '$room_id' ");
              $stmt->execute();
              return TRUE;
            }else{
              return NULL;
            }
          }


          /*** getmessenger ***/
          public function getmessenger($user_id,$user_to) {
            $sql = "SELECT a.room_id FROM `data_participant` a
            LEFT JOIN `data_participant` b on a.room_id  = b.room_id
            WHERE a.user_id = '$user_id' and  b.user_id= '$user_to' ";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->get_result();
            $output =array();
            if($result->num_rows > 0){
              $room_id = $result->fetch_assoc()['room_id'];
              // $sql = "SELECT * FROM `data_message` a
              //          LEFT JOIN data_user_account b on a.user_id = b.user_id
              //          WHERE room_id = '$room_id'
              //          ORDER BY message_create";
              // $stmt2 = $this->conn->prepare($sql);
              // $stmt2->execute();
              // $result2 = $stmt2->get_result();
              // if($result2->num_rows > 0){
              //  while($res = $result2->fetch_assoc())
              //   {
              //     $response = array(
              //       "message_id" => $res['message_id'],
              //       "message_text" => $res['message_text'],
              //       "message_create" => $res['message_create'],
              //       "user_id" => $res['user_id'],
              //       "user_path_img" => BASE_URL.$res['user_path_img'],
              //       "room_id" => $res['room_id']
              //     );
              //     $output[]=$response;
              //   }
              //   return array($output,$room_id,false);
              // }else{
              //   return array(NULL,$room_id,false);
              // }
              return array(NULL,$room_id,false);
            }else{
              $sql="INSERT INTO `data_room` ( `room_name`,room_update) VALUES ('',now())";
              $stmt2 =  $this->conn->prepare($sql);
              $stmt2->execute();
              $last_id = $this->conn->insert_id;
              $sql="INSERT INTO `data_participant` ( `user_id`, `room_id`) VALUES ( $user_id, $last_id), ( $user_to, $last_id);";
              $stmt3 =  $this->conn->prepare($sql);
              $stmt3->execute();
              return array(NULL,$last_id,true);
            }
          }









          /*** getAttractions ***/
          public function getAttractions($category,$lat,$long,$LoadMoreLimit,$numLoad,$catname) {

            $sql = "SELECT * ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.attraction_lat)) * COS(RADIANS(a.attraction_long) - RADIANS($long)) + SIN(RADIANS($lat)
          ) * SIN(RADIANS(a.attraction_lat)))) as distant FROM `data_attraction` a
          LEFT JOIN data_province b on a.province_id = b.province_id
          LEFT JOIN data_attraction_category c on a.attraction_id = c.attraction_id
          WHERE c.attraction_category_cat_id = '".$category."' AND  c.attraction_category_name LIKE '%".$catname."%'  GROUP BY a.attraction_id ORDER BY distant limit ".$LoadMoreLimit*$numLoad.','.$LoadMoreLimit;

          $stm = $this->conn->prepare($sql);
          $stm->execute();
          $result = $stm->get_result();
          $output =array();
          if($result->num_rows > 0){
            while($res = $result->fetch_assoc())
            {
              $stmt1 = $this->conn->prepare("SELECT * FROM `data_attraction_category` where attraction_id = ".$res['attraction_id']);
              $stmt1->execute();
              $result1 = $stmt1->get_result();
              if($result1->num_rows > 0){
                $res['category']=[];
                while($res1 = $result1->fetch_assoc())
                {
                  $res['category'][]=$res1;
                }
              }
              $res['attraction_detail']=htmlspecialchars_decode($res['attraction_detail']) ;
              $res['attraction_detail'] = str_replace('<p>',"",$res['attraction_detail']);
              $res['attraction_detail'] = str_replace('</p>',"",$res['attraction_detail']);
              $res['attraction_detail'] = str_replace('<p',"<span",$res['attraction_detail']);
              $res['attraction_detail_tx'] = str_replace('<br />',"",$res['attraction_detail']);
              $res['attraction_detail_tx'] = str_replace('&ldquo;',"",$res['attraction_detail_tx']);
              $res['attraction_detail_tx'] =  substr(  $res['attraction_detail_tx'],0,500);


              for ($i=1; $i <=5 ; $i++) {
                $res['picture_path'.$i] ="";
              }
              $stmt2 = $this->conn->prepare("SELECT * FROM `data_attraction_img` WHERE attraction_img_status=1 and `attraction_id` =".$res['attraction_id']);
              $stmt2->execute();
              $result2 = $stmt2->get_result();
              if($result2->num_rows > 0){
                $n=1;
                while($res2 = $result2->fetch_assoc())
                {
                  $res['picture_path'.$n++]=BASE_URL.$res2['attraction_img_path'];
                }
                $output[]=$res;
              }

            }
            return $output;
          }else{
            return NULL;
          }
        }


        public function data_get_tag($user_id,$type,$data)
        {
          if ($type==1) {
            $feeling = explode(",", $data);
            $sql = "DELETE FROM `data_get_feeling` where user_id=".$user_id;
          }else if ($type==2) {
            $travel = explode(",", $data);
            $sql = "DELETE FROM `data_get_travel` where user_id=".$user_id;
          }else {
            $tag = explode(",", $data);
            $sql = "DELETE FROM `data_get_tag` where user_id=".$user_id;
          }
          $stmt = $this->conn->prepare($sql);
          $result = $stmt->execute();
          $stmt->close();
          if ($result) {
            if ($type==1) {
              for ($i=0; $i < sizeof($feeling); $i++) {
                $sql="INSERT INTO `data_get_feeling` ( `user_id`, `feeling_id`) VALUES ($user_id, $feeling[$i])";
                $stmtfeeling =  $this->conn->prepare($sql);
                $stmtfeeling->execute();
              }
            }else if ($type==2) {
              for ($i=0; $i < sizeof($travel); $i++) {
                $sql="INSERT INTO `data_get_travel` ( `user_id`, `travel_id`) VALUES ($user_id, $travel[$i])";
                $stmtfeeling =  $this->conn->prepare($sql);
                $stmtfeeling->execute();
              }
            }else {
              for ($i=0; $i < sizeof($tag); $i++) {
                $sql="INSERT INTO `data_get_tag` ( `user_id`, `tag_id`) VALUES ($user_id, $tag[$i])";
                $stmtfeeling =  $this->conn->prepare($sql);
                $stmtfeeling->execute();
              }
            }
            return TRUE;
          }else{
            return NULL;
          }
        }





        /*** สมัครสมาชิก ***/
        public function createUser($phone,$storeName,$user_type_account, $user_username, $user_email, $user_firstname, $user_lastname, $user_gender,$user_interestedIn, $user_birthday, $country_id,$user_password,$user_facebook_id,$imageData,$tag,$feeling,$travel,$step,$place_vicinity,$place_name,$lng,$lat,$type_register,$about) {
         
          $response = array();
          if($user_type_account == '3'){ //3=sign in with apple
            $user_password = 'apple';
          }
         
          $password_hash = PassHash::hash($user_password);
          $tag = array_filter(explode(",", $tag));
          $feeling = explode(",", $feeling);
          $travel = explode(",", $travel);
         
          $interested = "";
          ///////
          if($this->isUserExists($user_username&&$user_type_account!=2)){
            return USER_ALREADY_EXISTED;
            exit();
          }
        //  echo "(".$user_type_account.")user_type_account";
        //  echo "(".$user_email.")user_email"; 
          if($this->isEmailExists($user_email,$user_type_account)){
            return USER_ALREADY_EXISTED2;
            exit();
          }


          ///////

          // echo "test";exit;
          // if ($user_password=='fb') {
          //   $password_hash='';
          // }
          if ($user_gender=='M') {
            $gender = "sex as male";
          }else{
            $gender = "sex as female";
          }

          if ($user_interestedIn == "M,F") {
            $interested = "interested in Men and woman";
          }else{
            if ($user_interestedIn == "M") {
              $interested = "interested in Men ";
            }else if($user_interestedIn == "F"){
              $interested = "interested in Woman";
            }
          }

          if($step != 'store'){
            $text = "My Name is"." ".$user_firstname." ".$user_lastname.". "."I was born on $place_vicinity" . ". my store from ".$this->getcountryname($country_id).".";
            
            $sql = "INSERT INTO data_user_account(user_type_account, user_category, user_username,
              user_email, user_password, user_firstname, user_lastname, user_gender,
              user_interestedIn, user_birthday, user_createdate, user_status, user_status_Del,
              country_id,user_facebook_id,user_api_key
            ) values('$user_type_account', '0', '$user_username',
              '$user_email', '$password_hash', '$user_firstname',
              '$user_lastname', '$user_gender', '$user_interestedIn',
              '$user_birthday', now(), '1', '1',
              '$country_id','$user_facebook_id','".$this->func->generateApiKey()."'
            )";
          }else{
            $text = "My Store is"." ".$user_firstname." . "."my store live in $place_vicinity" .$interested.". I come from ".$this->getcountryname($country_id).".";
            $text = $text."My Store is"." ".$user_firstname." . "."my store live in $place_vicinity" .$interested.". I come from ".$this->getcountryname($country_id).".";
            $text = $text."My Store is"." ".$user_firstname." . "."my store live in $place_vicinity" .$interested.". I come from ".$this->getcountryname($country_id).".";

            $sql = "INSERT INTO data_user_account(user_type_account, user_category, user_username,
              user_email, user_password, user_firstname, user_lastname, user_gender,
              user_interestedIn, user_birthday, user_createdate, user_status, user_status_Del,
              country_id,user_facebook_id,user_api_key,store_lat,store_lng,store_address,store_namelocation,store_telephone,user_shop,store_about,store_name
            ) values('$user_type_account', '0', '$user_username',
              '$user_email', '$password_hash', '$user_firstname',
              '$user_lastname', '$user_gender', '$user_interestedIn',
              '$user_birthday', now(), '1', '1',
              '$country_id','$user_facebook_id','".$this->func->generateApiKey()."','".$lat."','".$lng."','".$place_vicinity."','".$place_name."','".$phone."','1','".$about."','".$storeName."'
            )";
          };
          $stmt = $this->conn->prepare($sql);
          $result = $stmt->execute();
          $stmt->close();
          if ($result) {
            $last_id = $this->conn->insert_id;

            if($step == "end"){
              $text.=" What I'm interested in is";
              for ($i=0; $i < sizeof($tag); $i++) {
                $sql="INSERT INTO `data_get_tag` ( `user_id`, `tag_id`) VALUES ($last_id, $tag[$i])";
                $stmtfeeling =  $this->conn->prepare($sql);
                $stmtfeeling->execute();
                $data = $this->get_text('data_tag','tag_id','tag_name',$tag[$i]);
                $text.=" ".$data['tag_name'];
              }
              $text.=". I'm interested in";
              for ($i=0; $i < sizeof($feeling); $i++) {
                $sql="INSERT INTO `data_get_feeling` ( `user_id`, `feeling_id`) VALUES ($last_id, $feeling[$i])";
                $stmtfeeling =  $this->conn->prepare($sql);
                $stmtfeeling->execute();
                $data = $this->get_text('data_feeling','feeling_id','feeling_text_google,feeling_name',$feeling[$i]);
                $text.=" ".$data['feeling_text_google'];
                $text.=" (";
                for ($j=0; $j < sizeof(explode(" ",$data['feeling_text_google'])) ; $j++) {
                  $text.=" ".$data['feeling_name']." ";
                }
                $text.=") ";
              }
              $text.=". Where I like";
              for ($i=0; $i < sizeof($travel); $i++) {
                $sql="INSERT INTO `data_get_travel` ( `user_id`, `travel_id`) VALUES ($last_id, $travel[$i])";
                $stmtfeeling =  $this->conn->prepare($sql);
                $stmtfeeling->execute();
                $data=$this->get_text('data_travel','travel_id','travel_text_google,travel_name',$travel[$i]);
                $text.=" ".$data['travel_text_google'];
                $text.=" (";
                for ($j=0; $j < sizeof(explode(" ",$data['travel_text_google'])) ; $j++) {
                  $text.=" ".$data['travel_name']." ";
                }
                $text.=") ";
              }
            }else if($step == "store" && count($tag) > 0){
              $text.=" What I'm interested in is";
              for ($i=0; $i < sizeof($tag); $i++) {
                $sql="INSERT INTO `data_get_tag` ( `user_id`, `tag_id`) VALUES ($last_id, $tag[$i])";
                $stmtfeeling =  $this->conn->prepare($sql);
                $stmtfeeling->execute();
                $data = $this->get_text('data_tag','tag_id','tag_name',$tag[$i]);
                $text.=" ".$data['tag_name'];
                $text.=" ".$data['tag_name'];
                $text.=" ".$data['tag_name'];
                $text.=" ".$data['tag_name'];
                $text.=" ".$data['tag_name'];
                $text.=" ".$data['tag_name'];
                $text.=" ".$data['tag_name'];
                $text.=" ".$data['tag_name'];
                $text.=" ".$data['tag_name'];
                $text.=" ".$data['tag_name'];
              }
            }
            if ($imageData!="") {
              $imageData=str_replace(" ","+",$imageData);
              $textreturn = $this->func->check_baseimg_ext($imageData);
              $today = date("Y-m-d-H-i-s").rand(11111,99999).'.'.$textreturn['ext'];
              $uploadFileNew = $this->func->uploadfilemessage($imageData, "data_user_account" , $last_id,$today);
              $uploadFileNew = explode("../../", $uploadFileNew);
              $stmt = $this->conn->prepare("UPDATE data_user_account SET user_path_img = '".$uploadFileNew[1]."' WHERE user_id = '$last_id' ");
              $stmt->execute();
            }else{
              $stmt = $this->conn->prepare("UPDATE data_user_account SET user_path_img = 'api/v1/user.png' WHERE user_id = '$last_id' ");
              $stmt->execute();
            }
            if($step == "end"){
              $result2 = $this->Watsonplatform($text,$last_id,1);
            }
            if(str_word_count($text) >= 300 && $step == "store"){
              $result2 = $this->Watsonplatform($text,$last_id,1);
            }
            return USER_CREATED_SUCCESSFULLY;
          }else{
            return USER_CREATE_FAILED;
          }

          return $response;
        }

        public function updateDataUser($user_id,$feeling,$tag,$travel) {
          $response = array();
          $text="";
          $tag = explode(",", $tag);
          $feeling = explode(",", $feeling);
          $travel = explode(",", $travel);
          $interested = "";
          $sql = "SELECT * FROM data_user_account WHERE user_id = '".$user_id."'";
          $sqlUser = $this->conn->prepare($sql);
          $sqlUser->execute();
          $result = $sqlUser->get_result();
          $result = $result->fetch_assoc();
          if ($result["user_gender"]=='M') {
            $gender = "sex as male";
          }else{
            $gender = "sex as female";
          }
          if ($result["user_interestedIn"] == "M,F") {
            $interested = "interested in Men and woman";
          }else{
            if ($result["user_interestedIn"] == "M") {
              $interested = "interested in Men ";
            }else if($result["user_interestedIn"] == "F"){
              $interested = "interested in Woman";
            }
          }
          $text = "My Name is"." ".$result["user_firstname"]." ".$result["user_lastname"].". "."I was born on ". $result["user_birthday"] . ". ".$gender.". ".$interested.". I come from ".$this->getcountryname($result["country_id"]).".";
          $text.=" What I'm interested in is";
          for ($i=0; $i < sizeof($tag); $i++) {
            $sql="INSERT INTO `data_get_tag` ( `user_id`, `tag_id`) VALUES ($user_id, $tag[$i])";
            $stmtfeeling =  $this->conn->prepare($sql);
            $stmtfeeling->execute();
            $data = $this->get_text('data_tag','tag_id','tag_name',$tag[$i]);
            $text.=" ".$data['tag_name'];
          }
          $text.=". I'm interested in";
          for ($i=0; $i < sizeof($feeling); $i++) {
            $sql="INSERT INTO `data_get_feeling` ( `user_id`, `feeling_id`) VALUES ($user_id, $feeling[$i])";
            $stmtfeeling =  $this->conn->prepare($sql);
            $stmtfeeling->execute();
            $data = $this->get_text('data_feeling','feeling_id','feeling_text_google,feeling_name',$feeling[$i]);
            $text.=" ".$data['feeling_text_google'];
            $text.=" (";
            for ($j=0; $j < sizeof(explode(" ",$data['feeling_text_google'])) ; $j++) {
              $text.=" ".$data['feeling_name']." ";
            }
            $text.=") ";
          }
          $text.=". Where I like";
          for ($i=0; $i < sizeof($travel); $i++) {
            $sql="INSERT INTO `data_get_travel` ( `user_id`, `travel_id`) VALUES ($user_id, $travel[$i])";
            $stmtfeeling =  $this->conn->prepare($sql);
            $stmtfeeling->execute();
            $data=$this->get_text('data_travel','travel_id','travel_text_google,travel_name',$travel[$i]);
            $text.=" ".$data['travel_text_google'];
            $text.=" (";
            for ($j=0; $j < sizeof(explode(" ",$data['travel_text_google'])) ; $j++) {
              $text.=" ".$data['travel_name']." ";
            }
            $text.=") ";
          }
          $result2 = $this->Watsonplatform($text,$user_id,1);
          return true;
        }



        public function get_text($table,$field, $field_select,$id){
          $sql = "SELECT ".$field_select." FROM ".$table." WHERE  ".$field."= '$id'";
          $stmt = $this->conn->prepare($sql);
          $stmt->execute();
          $result = $stmt->get_result();
          if($result->num_rows > 0 ){
            $res = $result->fetch_assoc();
            return $res;
          }else{
            return NULL;
          }
        }

        public function checkEmail($email,$user_id) {
          $stmtAccount = $this->conn->prepare("SELECT * from data_user_account WHERE user_id = '$user_id' and user_type_account='1'");
          $stmtAccount->execute();
          $resultAccount = $stmtAccount->get_result();
          $resAccount = $resultAccount->fetch_assoc();
          if($resAccount['user_email'] == $email){
            return NULL;
          }else{
            $stmt = $this->conn->prepare("SELECT user_username from data_user_account WHERE user_email = '$email' and user_type_account='1'");
            $stmt->execute();
            $stmt->store_result();
            $num_rows = $stmt->num_rows;
            $stmt->close();
            if ($num_rows > 0) {
              return "EXISTED";
            }else{
              return NULL;
            }
          }
        }
        public function updateProfile($imageData,$user_id){
          $imageData=str_replace(" ","+",$imageData);
          $textreturn = $this->func->check_baseimg_ext($imageData);
          $today = date("Y-m-d-H-i-s").rand(11111,99999).'.'.$textreturn['ext'];
          $uploadFileNew = $this->func->uploadfilemessage($imageData, "data_user_account" , $user_id,$today);
          $uploadFileNew = explode("../../", $uploadFileNew);
          $stmt = $this->conn->prepare("UPDATE data_user_account SET user_path_img = '".$uploadFileNew[1]."' WHERE user_id = '$user_id' ");
          $result=$stmt->execute();
          if ($result) {
            $response = array(
              "user_path_img" => BASE_URL.$uploadFileNew[1]
            );
            return $response;
          }else{
            return NULL;
          }
        }


        public function updateUser($user_id,$user_firstname,$user_lastname,$user_gender,$user_interestedIn,$user_birthday,$country_id,$imageData,$user_email){
          $sql = "UPDATE data_user_account set
          user_firstname = '$user_firstname',
          user_lastname = '$user_lastname',
          user_gender = '$user_gender',
          user_interestedIn = '$user_interestedIn',
          user_birthday = '$user_birthday',
          country_id = '$country_id',
          user_email = '$user_email',
          user_update = now()
          WHERE user_id = '$user_id'";
          $stmt = $this->conn->prepare($sql);
          $result = $stmt->execute();
          $stmt->close();
          if ($result) {
            if ($imageData!="") {
              $imageData=str_replace(" ","+",$imageData);
              $textreturn = $this->func->check_baseimg_ext($imageData);
              $today = date("Y-m-d-H-i-s").rand(11111,99999).'.'.$textreturn['ext'];
              $uploadFileNew = $this->func->uploadfilemessage($imageData, "data_user_account" , $user_id,$today);
              $uploadFileNew = explode("../../", $uploadFileNew);
              $stmt = $this->conn->prepare("UPDATE data_user_account SET user_path_img = '".$uploadFileNew[1]."' WHERE user_id = '$user_id' ");
              $stmt->execute();
              $response = array(
                "user_path_img" => BASE_URL.$uploadFileNew[1],
                'user_interestedIn'=>$user_interestedIn,
                'user_gender'=>$user_gender
              );
            }else{
              $response = array(
                'user_interestedIn'=>$user_interestedIn,
                'user_gender'=>$user_gender
              );
            }


            return $response;
          }else{
            return NULL;
          }
        }


        public function updatePassword($user_id, $passnew,$passold) {
          $passnew = PassHash::hash($passnew);
          $Tsql = "SELECT * FROM `data_user_account` where user_id = '".$user_id."' ";
          $stmt = $this->conn->prepare($Tsql);
          $stmt->execute();
          $result = $stmt->get_result();

          if($result->num_rows > 0){
            $res = $result->fetch_assoc();
            // echo (PassHash::check_password($res['user_password'], $passold);
            // echo $passnew.' || ';
            // echo $res['user_password'];
            // exit();
            if (PassHash::check_password($res['user_password'], $passold)) {
              if ($res['user_type_account'] == '1') {
                if ($res['user_status']=='1') {
                  $sql = "update `data_user_account` set user_password = '".$passnew."' where user_id='".$user_id."'";
                  $stmt1 = $this->conn->prepare($sql);
                  $objQuery1=$stmt1->execute();
                  if($objQuery1){
                    return "change password successfully";
                  }else{
                    return "Error sql";
                  }
                }
                return "No active";
              }
              return "login facebook";
            }
            return "Passwod is incorrect";
          }else{
            $stmt->close();
            return "not found user";
          }


        }


        public function updateUserCancel($user_id) {
          $sql = "update `data_user_account` set user_update = now() where user_id='".$user_id."'";
          $stmt1 = $this->conn->prepare($sql);
          $objQuery1=$stmt1->execute();
          if($objQuery1){
            return true;
          }else{
            return false;
          }
        }


        /*** ดึงข้อมูล user จากอีเมล์ ***/
        public function getUserByEmail($email,$fieldName) {
          if ($fieldName == 'user_username') {
            $con = "($fieldName = '$email' OR user_email = '$email') ";
          }else{
            $con = "$fieldName = '$email' ";
          }
          $chkData = "0";
          $sql = "SELECT * FROM data_user_account a left join data_country b on a.country_id = b.country_id  WHERE $con AND user_status = '1' AND user_status_Del = '1' ";

          $stmt = $this->conn->prepare($sql);
          $stmt->execute();
          $result = $stmt->get_result();
          if($result->num_rows > 0){
            $stmt->close();
            $to_remove = array("user_category", "user_update_pass", "user_status", "user_status_Del");
            $result = array_diff_key($result->fetch_assoc(), array_flip($to_remove));
            $output = array();
            $first = html_entity_decode($result["user_firstname"], ENT_QUOTES);
            $first = html_entity_decode($first, ENT_QUOTES);
            $sqlFelling = $this->conn->prepare("SELECT * FROM data_get_feeling WHERE user_id = '".$result["user_id"]."'");
            $sqlFelling->execute();
            $resFelling = $sqlFelling->get_result();

            $sqlTag = $this->conn->prepare("SELECT * FROM data_get_tag WHERE user_id = '".$result["user_id"]."'");
            $sqlTag->execute();
            $resTag = $sqlTag->get_result();

            $sqlTravel = $this->conn->prepare("SELECT * FROM data_get_travel WHERE user_id = '".$result["user_id"]."'");
            $sqlTravel->execute();
            $resTravel = $sqlTravel->get_result();
            $dateCurrent2 = date_create(date("Y-m-d"));
            // $dateCurrent2 = date_create("2019-03-10");
            if($result["user_update"] != ""){
              $datedb = date_create($result["user_update"]);
            }else{
              $datedb = date_create($result["user_createdate"]);
            }
            $diff = date_diff($datedb,$dateCurrent2);
            if($diff->format("%a") > 29){
              if($resFelling->num_rows > 0 && $resTag->num_rows > 0 && $resTravel->num_rows > 0){
                $chkData = "0"; /** กรอกครบแล้ว **/
              }else{
                $chkData = "1"; /** กรอกยังไม่ครบ **/
              }
            }
            $imgCover = "";
            if($result["user_coverImg"] != ""){
              $imgCover = "https://www.myadventureearth.com/".$result["user_coverImg"];
            }
            $countyPath = "";
            $countPath = explode(".png", $result["country_flag_32"]);
            if(count($countPath) > 1){
              $newPath = $countPath[0] . ".svg";
              $countyPath = "https://www.myadventureearth.com/data/flags/".strtolower(str_replace("-32","",$newPath));
            }else{
              $countyPath = "https://www.myadventureearth.com/data/flags/".strtolower(str_replace("-32","",$result["country_flag_32"]));
            }


            //check type file if svg not convert
            $type = explode(".",$result["country_flag_32"])[1];
            $imgPath = '';
            if ($type != 'svg') {
              $imgPath = strtolower(explode("-",$result["country_flag_32"])[0]).'.svg';
            }else{
              $imgPath = $result["country_flag_32"];
            }
            //check type file if svg not convert

            $response = array(
              "country_img" => $countyPath,
              "checkData" => $chkData,
              "ResetPassword" => $result["ResetPassword"],
              "imageCover" => $imgCover,
              "country_code" => $result["country_code"],
              "country_enable" => $result["country_enable"],
              "country_flag_32" => $result["country_flag_32"],
              "country_flag_128" => $result["country_flag_128"],
              "country_id" => $result["country_id"],
              "country_img_name" => $result["country_img_name"],
              "country_img_path" => BASE_URL.'data/flags/'.$imgPath,
              "country_name_en" => $result["country_name_en"],
              "country_name_th" => $result["country_name_th"],
              "country_status" => $result["country_status"],
              "user_access_token" => $result["user_access_token"],
              "user_api_key" => $result["user_api_key"],
              "user_birthday" => $result["user_birthday"],
              "user_coconut" => $result["user_coconut"],
              "user_email" => $result["user_email"],
              "user_facebook_id" => $result["user_facebook_id"],
              "user_firstname" => $first,
              "user_gender" => $result["user_gender"],
              "user_id" => $result["user_id"],
              "user_interestedIn" => $result["user_interestedIn"],
              "user_lastname" => html_entity_decode($result["user_lastname"], ENT_QUOTES),
              "user_password" => $result["user_password"],
              "user_password_reset" => $result["user_password_reset"],
              "user_path_img" => $result["user_path_img"],
              "user_path_old_img" => $result["user_path_old_img"],
              "user_type_account" => $result["user_type_account"],
              "user_username" => $result["user_username"],
              "user_type" => $result["user_shop"],
              "titleText" => "Input Data Not Success.",
              "detailText" => "You can input feeling tag.",
              "EnterText" => "OK.",
              "CancelText" => "Cancel.",
            );
            return $response;
          }else{
            $stmt->close();
            return NULL;
          }
        }


        public function getLetGo($from,$to){
          // $from = '1.3437419,103.6839589';
          // echo 'http://maps.googleapis.com/maps/api/geocode/json?latlng='.$from.'&sensor=true';
          $checkdata = $this->curl('https://maps.googleapis.com/maps/api/geocode/json?latlng='.$from.'&sensor=true&key='.key_map,"");

          if($checkdata['status']=="OK") {
            for ($i=0; $i < sizeof($checkdata['results'][0]['address_components']) ; $i++) {
              if ($checkdata['results'][0]['address_components'][$i]['types'][0]=='country' && $checkdata['results'][0]['address_components'][$i]['long_name']!='Thailand') {
                // print_r($checkdata['results'][0]['address_components']);
                $from = Suvarnabhumi;
              }
            }
          }
          $Travel = array();
          $mode = ['driving','transit','walking'];
          $check = false;
          $start ="";

          for ($i=0; $i <3 ; $i++) {
            // echo 'http://maps.googleapis.com/maps/api/directions/json?origin='.$from.'&destination='.$to.'&sensor=false&mode='.$mode[$i].'';
            $data = $this->curl('https://maps.googleapis.com/maps/api/directions/json?origin='.$from.'&destination='.$to.'&sensor=false&mode='.$mode[$i].'&key='.key_map,"");

            // print_r($data);
            if ($data['status']!= "ZERO_RESULTS" && $data['status']!= "MAX_ROUTE_LENGTH_EXCEEDED") {
              $Travel[] = $data['routes'][0]["legs"][0];
              $check = true;
            }else{
              // $Travel[] = "";
              $Travel[]['duration']['text'] = "-";
            }
          }

          if($check){
            return $Travel;
          }else{
            return NULL;
          }
        }


        public function getaroundmap($location){
          // $location= "13.725336,100.52911070000005";
          // $data = $this->curl('https://maps.googleapis.com/maps/api/place/nearbysearch/json?type=point_of_interest&location='.$location.'&radius=100&key='.key_map,"");
          $output = "";
          $data = $this->curl("https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=".key_map."&location=".$location."&sensor=true&rankby=distance&types=point_of_interest","");
          // $data = $this->curl("https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=".key_map."&location=".$location."&sensor=true&rankby=distance","");
          // echo "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=".key_map."&location=".$location."&sensor=true&rankby=distance&types=point_of_interest","";
          // exit();
          // var_dump($data["results"]);
          // echo sizeof($data["results"]);
          // echo "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=".key_map."&location=".$location."&sensor=true&rankby=distance&types=point_of_interest";
          for ($i=0; $i < sizeof($data["results"]) ; $i++) {
            # code...
            // var_dump($data["results"][$i]["geometry"]['location']) ;
            $response = array(
              "place_id" => $data["results"][$i]["place_id"],
              "place_name" => $data["results"][$i]["name"],
              "place_location" => $data["results"][$i]["geometry"]['location'],
              "place_vicinity" => $data["results"][$i]["vicinity"]
              // "frmset_name" => $res['frmset_name']
            );
            $output[]=$response;

          }

          if($output){
            return $output;
          }else{
            // $stmt->close();
            return NULL;
          }
        }



        public function getSamePlace($textLocation,$not,$TypeLocation,$Place,$Feeling,$photo_id,$width,$LoadMoreLimit,$numLoad,$user_id,$lat,$long,$province,$TypeLocationName){


          if (!$lat || !$long || $lat == "undefined" || $long == "undefined") {
            return NULL;
          }
          if ($not == "") {
            $not = "0";
          }
          $uLat = "13.8992352";
          $uLnt = "100.4955294";
          $sqllocation = "SELECT * FROM `data_user_location` WHERE `user` LIKE '".$user_id."' ORDER BY `timeUpdate` DESC";
          $sqllocation = $this->conn->prepare($sqllocation);
          $sqllocation->execute();
          $resultlocation = $sqllocation->get_result();
          $resultlocate = $resultlocation->fetch_assoc();
          if($resultlocation->num_rows > 0){
            // print_r($resultlocate["lat"]);
            $uLat = $resultlocate["lat"];
            $uLnt = $resultlocate["long"];
          }


          $typeFillter = "";

          $sql = "SELECT
          a.photo_id,
          a.photo_caption,
          a.photo_location,
          a.photo_province,
          a.photo_path_old_img,
          a.photo_path_img,
          a.photo_path_img_original,
          a.photo_path_img_normal,
          a.photo_la,
          a.photo_long,
          a.photo_createdate,
          a.photo_share,
          a.photo_status,
          a.photo_status_Del,
          a.user_id,
          a.feeling_tx_id,
          a.TypeLocation_id,
          a.photos_text_google,
          a.photo_check,
          a.photo_width,
          a.photo_height,
          a.key_room,
          a.text_search,
          b.feeling_tx_name,
          b.icon_true,
          b.icon_false,
          b.feeling_tx_date,
          b.feeling_tx_status,
          b.feeling_tx_sort ,
          c.user_type_account,
          c.user_category,
          c.user_username,
          c.user_facebook_id,
          c.user_access_token,
          c.user_email,
          c.user_password,
          c.user_password_reset,
          c.user_api_key,
          c.user_update_pass,
          c.user_path_old_img,
          c.user_path_img,
          c.user_firstname,
          c.user_lastname,
          c.user_gender,
          c.user_interestedIn,
          c.user_birthday,
          c.user_createdate,
          c.user_update,
          c.user_status,
          c.user_status_Del,
          c.country_id,
          c.ResetPassword,
          c.user_coconut,
          c.user_shop,
          c.store_name,
          c.store_lat,
          c.store_lng,
          c.store_address,
          c.store_namelocation,
          c.store_telephone,
          c.store_about,
          c.shop_type_share,
          c.shop_approve,
          c.user_coverImg,
          d.country_code,
          d.country_name_th,
          d.country_name_en,
          d.country_img_name,
          d.country_img_path,
          d.country_enable,
          d.country_status,
          d.country_flag_32,
          d.country_flag_128,
          e.TypeLocation_name,
          e.TypeLocation_date,
          e.TypeLocation_status,
          e.TypeLocation_srot,
          (3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
            RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
          ) * SIN(RADIANS(a.photo_la)))) as distant,
          (3959 * ACOS( COS(RADIANS($uLat)) * COS(RADIANS(a.photo_la)) * COS(
            RADIANS(a.photo_long) - RADIANS($uLnt)) + SIN(RADIANS($uLat)
          ) * SIN(RADIANS(a.photo_la)))) as distantUser ,
          (SELECT COUNT(follow_id)FROM data_follow WHERE user_id = '".$user_id."' and follow_user = a.user_id ) as follow
          FROM `data_photos` a
          LEFT JOIN data_feeling_tx b on a.feeling_tx_id = b.feeling_tx_id
          LEFT JOIN data_user_account c on a.user_id=c.user_id
          LEFT JOIN data_country d on d.country_id = c.country_id
          LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
          ";
          //condition of above sql
          if ($Place) {
            $typeFillter = "typePlace";
            // echo $Place;
            // exit();
            // $sql.="  where photo_location LIKE '%".explode(", ",$Place)[0]."%' && a.photo_la=$lat && a.photo_long=$long && photo_id NOT IN ($not) && photo_status != 0 && photo_id!='".$photo_id."' ORDER by distant";
            $sql.="  where photo_location LIKE '%".explode(", ",$Place)[0]."%' && photo_id NOT IN ($not) && photo_status != 0 && photo_id!='".$photo_id."'  HAVING distant < 0.1 ";
            // print_r($Place);
            // echo $sql;
            // exit();
          }else if($Feeling){
            $typeFillter = "typeFeeling";
            $sql.="  where photo_id NOT IN ($not) && photo_status != 0 && photo_id!='".$photo_id."' && photo_location NOT LIKE '%".explode(", ",$textLocation)[0]."%' ";
            // echo $sql;
            // exit();
            // }else if($TypeLocation){
          }else if($textLocation && $Feeling == ""){

            $typeFillter = "typeLocation";
            // $sql.="  where a.TypeLocation_id =".$TypeLocation." && photo_id NOT IN ($not) && a.photo_la != '".$lat."' && a.photo_long != '".$long."' && photo_location != '".$Place."' && photo_status != 0 && photo_id!='".$photo_id."' ORDER by distant ";
            $sql.="  where photo_id NOT IN ($not) && photo_status != 0 && photo_id!='".$photo_id."' && photo_location NOT LIKE '%".explode(", ",$textLocation)[0]."%' ";
            // echo $sql;
            // exit();
            $sqlTour = "SELECT * ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.attraction_lat)) * COS(
              RADIANS(a.attraction_long) - RADIANS($long)) + SIN(RADIANS($lat)
            ) * SIN(RADIANS(a.attraction_lat)))) as distant,
            (3959 * ACOS( COS(RADIANS($uLat)) * COS(RADIANS(a.attraction_lat)) * COS(
              RADIANS(a.attraction_long) - RADIANS($uLnt)) + SIN(RADIANS($uLat)
            ) * SIN(RADIANS(a.attraction_lat)))) as distantUser FROM `data_attraction` a
            LEFT JOIN data_province b on a.province_id = b.province_id
            LEFT JOIN data_attraction_category c on a.attraction_id = c.attraction_id
            WHERE b.province_name_en = '".$province."' AND c.TypeLocation_id LIKE '".$TypeLocation."%' GROUP BY a.attraction_id ORDER BY distant ASC limit ".$LoadMoreLimit*$numLoad.','.$LoadMoreLimit;




            // echo $sqlTour;
            // exit();
            $stmttour = $this->conn->prepare($sqlTour);
            $stmttour->execute();
            $resulttour = $stmttour->get_result();

            if($resulttour->num_rows > 0){
              $stmttour->close();
              $outputtour = array();
              while($res = $resulttour->fetch_assoc())
              {
                $imgresize = [];
                $photo_img = "";
                $stmt2 = $this->conn->prepare("SELECT * FROM `data_attraction_img` WHERE attraction_img_status=1 and `attraction_id` =".$res['attraction_id']." limit 1");
                $stmt2->execute();
                $result2 = $stmt2->get_result();
                if($result2->num_rows > 0){
                  while($res2 = $result2->fetch_assoc())
                  {
                    $photo_img=$res2['attraction_img_path'];
                    $video = array(
                      'path_full' => BASE_URL.$res['attraction_img_path'],
                      'path_resize' => BASE_URL.$res['attraction_img_path'],
                      'path_height' => $this->func->getFullsize('../../'.$photo_img,$width),
                      'number' => 1,
                      'type' => 1,
                    );
                    $imgresize[] = $video;
                  }
                }



                $response = array(
                  "distant" => number_format((float)($res['distantUser']*2), 1, '.', ''),
                  "distantPlance" => number_format((float)($res['distant']*2), 1, '.', ''),
                  "photo_id" => $res['attraction_id'],
                  "checkCard" => 0,
                  "checkshow" => 0,
                  "photo_caption" => html_entity_decode($res['attraction_name']),
                  "hashtag" => $res['attraction_name'],
                  "photo_location" => $res['attraction_address'],
                  "photo_locationText" => $res['attraction_address'],
                  "photo_la" => $res['attraction_lat'],
                  "photo_long" => $res['attraction_long'],
                  "photo_share" => '',
                  "user_id" => 'TAT',
                  "user_firstname" => 'Tourism Authority of Thailand',
                  "user_lastname" => '',
                  "user_path_img" => 'https://myadventureearth.com/api/v1/img/tat.jpg',
                  "country_img_path" => '',
                  "country_name_th" => 'ประเทศไทย',
                  "country_name_en" => 'Thailand',
                  "feeling_id" => '',
                  "follow" => '',
                  "feeling_name" => '',
                  "photo_img" => BASE_URL.$photo_img,
                  "user_img" => 'https://myadventureearth.com/api/v1/img/tat.jpg',
                  'linkshared'=>BASE_URL_WEB.'ShearTAT.php?method=share&user=tat&id='.$res['attraction_id'],
                  "sum_like" => '0',
                  "followers" => '',
                  "following" => '',
                  "status_like" =>'false',
                  "status_bookmark"=>'true',
                  "photo_img_Full" => BASE_URL.$photo_img,
                  "status_show" => true,
                  "TypeLocation_id" => $TypeLocation,
                  "TypeLocation_name" => $TypeLocationName,
                  "photo_province" => $res['province_name_en'],
                  'time'=>'',
                  'sizeheight'=>($width/2),
                  'sizeFullheight'=>$this->func->getFullsize('../../'.$photo_img,$width),
                  'typeFillter'=>$typeFillter
                  // 'sizeheight'=>$this->func->getsize($res['picture_file_path'],$width)
                  // 'status_Follow'=>false
                );
                if ($photo_img!="") {
                  $output[]=$response;
                }
              }
            }
          }
          $sql = "SELECT *,(t1.distant*2) as distantPlance  FROM ($sql) as t1 ORDER by distant ASC,  photo_id ASC LIMIT ".intval($LoadMoreLimit*$numLoad).','.intval($LoadMoreLimit);

          $stmt = $this->conn->prepare($sql);
          $stmt->execute();
          $result = $stmt->get_result();
          if($result->num_rows > 0){
            $stmt->close();
            // $output = array();
            while($res = $result->fetch_assoc())
            {
              //   // photo_like
              $sql2="SELECT * FROM data_photo_like where photo_id = '".$res['photo_id']."' and user_id=".$user_id;
              $stmt2 = $this->conn->prepare($sql2);
              $stmt2->execute();
              $result2 = $stmt2->get_result();
              $status_like = false;
              if ($result2->num_rows>0) {
                $status_like = true;
              }
              //   // bookmark
              $sql2="SELECT * FROM data_photo_bookmark where photo_id = '".$res['photo_id']."' and user_id=".$user_id;
              $stmt2 = $this->conn->prepare($sql2);
              $stmt2->execute();
              $result2 = $stmt2->get_result();
              $status_bookmark = false;
              if ($result2->num_rows>0) {
                $status_bookmark = true;
              }
              //   //เวลาห่างระยะ
              $start  = date_create($res['photo_createdate']);
              $end 	= date_create(); // Current time and date
              $diff  	= date_diff( $start, $end );
              $Arraytime =[
                [$diff->y,'years'],
                [$diff->m,'months'],
                [$diff->d,'d'],
                [$diff->h,'hr'],
                [$diff->i,'min'],
                [$diff->s,'sec'],
              ];
              $time = "";
              for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                if ($Arraytime[$i][0]!=0) {
                  $time = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                  break;
                }
              }

              $sum_like = $this->count_number('data_photo_like','photo_id',$res['photo_id']);
              $tmp=$this->getFollow($res['user_id']);
              $same = array();
              if ($not != '0') {
                $same=$this->getSamePlace('','','',$res['photo_location'],'','',$width,5,0,$user_id,$res['photo_la'],$res['photo_long'],'','');

                if ($same==NULL) {
                  $same = array();
                }
              }
              $textCap = '';
              $capEdit = htmlspecialchars_decode($res['photo_caption'], ENT_QUOTES);
              $textCap = $this->func->sortATag($res['photo_caption']);
              $textCap = trim($textCap);

              if($res['photo_path_img'] == ""){
                $imgPost = $res['photo_path_img_original'];
                $imgNomal = $res['photo_path_img_original'];
              }else{
                $imgPost = $res['photo_path_img'];
                $imgNomal = $res['photo_path_img_normal'];
              }

              $imgresize = array();
              $imgfullsize = array();
              $path_width = $path_height = "";
              $sqlimg = "SELECT * FROM `data_path_photo` WHERE path_post_id = '".$res['photo_id']."' AND path_status = 1";
              $stmtimg = $this->conn->prepare($sqlimg);
              $stmtimg->execute();
              //
              $resimg = $stmtimg->get_result();
              $countP = 0;
              if($resimg->num_rows > 0){
                while($imgres = $resimg->fetch_assoc())
                {
                  $video = array(
                    'photo_id' => $imgres['path_id'],
                    'path_full' => BASE_URL.$imgres['path_url'],
                    'path_resize' => BASE_URL.$imgres['path_url_resize'],
                    'path_height' => $this->func->NewgetFullsize($imgres['path_width'],$imgres['path_height'],$width),
                    'number' => $imgres['path_number'],
                    'type' => 1,
                  );
                  $imgresize[] = $video;
                  if($countP == 0){
                    $path_width = $imgres['path_width'];
                    $path_height = $imgres['path_height'];
                  }
                  $countP++;
                }
              }

              $sqlVideo = "SELECT * FROM `data_path_video` WHERE vdo_post_id = '".$res['photo_id']."'";
              $stmVideo = $this->conn->prepare($sqlVideo);
              $stmVideo->execute();
              $resVideo = $stmVideo->get_result();
              if($resVideo->num_rows > 0){
                while($imgvideo= $resVideo->fetch_assoc())
                {
                  $video = array(
                    'path_full' => BASE_URL.$imgvideo['vdo_url'].'#t=0.1',
                    'path_resize' => BASE_URL.$imgvideo['vdo_url'].'#t=0.1',
                    'number' => BASE_URL.$imgvideo['vdo_number'],
                    'type' => 2,
                  );
                  $imgresize[] = $video;
                }
              }

              $comment = "";
              $timecomment = "";
              $userId = "";
              $sumComment = "";
              $fullNameComment = "";
              $user_comment_img = "";

              //   /*** check your comment in post ***/
              $status_comment_sql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
              WHERE user_status = 1 AND  com_photo_id = '".$res["photo_id"]."' and com_status != 1 and com_user_id = '$user_id' ORDER BY com_no DESC";

              $stmtStatusComment = $this->conn->prepare($status_comment_sql);
              $stmtStatusComment->execute();
              $resultStatusComment = $stmtStatusComment->get_result();
              $status_comment = false;
              if ($resultStatusComment->num_rows>0) {
                $status_comment = true;
              }
              $stmtStatusComment->close();
              //   /*** check your comment in post ***/
              $commentsql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
              WHERE user_status = 1 AND  com_photo_id = '".$res["photo_id"]."' and com_status != 1 ORDER BY com_no DESC";
              $stmtComment = $this->conn->prepare($commentsql);
              $stmtComment->execute();
              $resultComment = $stmtComment->get_result();
              $sumComment = $resultComment->num_rows;

              // echo $commentsql;exit;

              if($resultComment->num_rows > 0){
                while($resComment = $resultComment->fetch_assoc()){
                  $comment = $resComment['com_comment'];
                  $userId = $resComment['com_user_id'];
                  $user_comment_img = $resComment['user_path_img'];
                  $start  = date_create($resComment['com_date_comment']);
                  $end 	= date_create(); // Current time and date
                  $diff  	= date_diff( $start, $end );
                  $Arraytime =[
                    [$diff->y,'years'],
                    [$diff->m,'months'],
                    [$diff->d,'d'],
                    [$diff->h,'hr'],
                    [$diff->i,'min'],
                    [$diff->s,'sec'],
                  ];
                  $fullNameComment = $resComment['user_firstname'] . " " . $resComment['user_lastname'];
                  for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                    if ($Arraytime[$i][0]!=0) {
                      $timecomment = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                      break;
                    }
                  }
                  break;
                }
              }
              $imgLike = [];
              $likeSql = $this->conn->prepare("SELECT * FROM data_photo_like LEFT JOIN data_user_account on data_photo_like.user_id = data_user_account.user_id WHERE photo_id = '".$res['photo_id']."'");
              $likeSql->execute();
              $resultLike = $likeSql->get_result();
              while($resLike = $resultLike->fetch_assoc())
              {
                array_push($imgLike,"https://www.myadventureearth.com/".$resLike['user_path_img']);
              }

              // print_r($res);
              // exit;

              //check type file if svg not convert
              $type = explode(".",$res["country_flag_32"])[1];
              $imgPath = '';
              $imgPath = '';
              if ($type != 'svg') {
                $imgPath = strtolower(explode("-",$res["country_flag_32"])[0]).'.svg';
              }else{
                $imgPath = $res["country_flag_32"];
              }
              //check type file if svg not convert


              $response = array(
                "distant" => number_format((float)($res['distantUser']*2), 1, '.', ''),
                "distantPlance" => $res['distantPlance'],
                "photo_id" => $res['photo_id'],
                "imageLike" => $imgLike,
                "photo_caption" => html_entity_decode($res['photo_caption']),
                "hashtag" => $textCap,
                "checkCard" => 0,
                "checkshow" => 0,
                "photo_location" => $res['photo_location'],
                "photo_locationText" => $res['photo_location'],
                "photo_la" => $res['photo_la'],
                "photo_long" => $res['photo_long'],
                "photo_share" => $res['photo_share'],
                "user_id" => $res['user_id'],
                "user_firstname" => html_entity_decode($res['user_firstname'], ENT_QUOTES),
                "user_lastname" => html_entity_decode($res['user_lastname'], ENT_QUOTES),
                "user_path_img" => BASE_URL.$res['user_path_img'],
                "country_img_path" => BASE_URL.'data/flags/'.$imgPath,
                "country_name_th" => $res['country_name_th'],
                "country_name_en" => $res['country_name_en'],
                "feeling_id" => $res['feeling_tx_id'],
                "follow" => $res['follow'],
                "feeling_name" => $res['feeling_tx_name'],
                // "photo_img" => BASE_URL.$pathphoto,
                // "photo_img" => BASE_URL.$imgPost,
                "user_img" => BASE_URL.$res['user_path_img'],
                "sum_like" => $sum_like,
                "followers" => $tmp['followers'],
                "following" => $tmp['following'],
                "status_like" =>$status_like,
                "status_bookmark"=>$status_bookmark,
                // "photo_img_Full" => BASE_URL.$pathphoto,
                // "photo_img_Full" => BASE_URL.$imgNomal,
                "status_show" => true,
                "TypeLocation_id" => $res['TypeLocation_id'],
                "TypeLocation_name" => $res['TypeLocation_name'],
                "photo_province" => $res['photo_province'],
                'time'=>$time,
                // 'testname'=>$imgfullsize[0],
                // 'sizeheight'=>$this->func->getsize('../../'.$pathphoto,$width),
                // 'sizeFullheight'=>$this->func->getFullsize('../../'.$pathphoto,$width),
                'sizeheight'=>$this->func->Newgetsize($path_width,$path_height,$width),
                'sizeFullheight'=>$this->func->NewgetFullsize($path_width,$path_height,$width),
                'linkshared'=>BASE_URL_WEB.'OpenGraph.php?method=share&user=user&id='.$res['photo_id'],
                'same'=>$same,
                'samelength'=>sizeof($same),
                'typeFillter'=>$typeFillter,
                "pictureResize" => $imgresize,
                "pictureFull" => $imgfullsize,
                "user_type" => $res['user_shop'],
                // 'status_Follow'=>false,
                "comment_key" => $res['key_room'],
                "comment" => $comment,
                "comment_user_img" => BASE_URL.$user_comment_img,
                "userIdComment" => $userId,
                "timeComment" => $timecomment,
                "countComment" => $sumComment,
                "status_comment"=>$status_comment,
                "fulnameComment" => $fullNameComment,
                "textComment" => "",
                "pictureResize" => $imgresize,
                "pictureFull" => $imgfullsize,
                "capEdit" => $capEdit,
              );

              if(count($imgresize) != 0){
                $output[]=$response;
              }
            }
            //เบนซ์คอมเม้นไว้ แก้ Same place เรียงไม่ถูก10-3-2563
            usort($output, function($a, $b) {
              // return  intval($a['distant']) - intval($b['distant']);
              return ($a['distantPlance'] > $b['distantPlance'])?1:-1;
              // return strcmp($a['title'], $b['title']);
            });


            // $tmp = [];
            // foreach ($output as $key => $value) {
            //   array_push($tmp, $output[$key]);
            // }
            return $output;
          }else{
            $stmt->close();
            return NULL;
          }
        }


        /*** ดึงข้อมูล user จากอีเมล์ ***/
        public function getfollowing($user_id) {
          $sql = "SELECT * FROM `data_follow` where user_id=".$user_id;
          $stmt = $this->conn->prepare($sql);
          $stmt->execute();
          $result = $stmt->get_result();
          if($result->num_rows > 0){
            $val = "";
            $n = 0;
            while($res = $result->fetch_assoc())
            {
              if ($n==0) {
                $val.=$res['follow_user'];
              }else{
                $val.=','.$res['follow_user'];
              }
              $n++;
            }

            return $val;
          }else{
            return NULL;
          }
        }

        public function getDataPost($lat,$long,$photoID,$user_id) {
          $widthphone = 375;
          $output = [];
          $sql = "SELECT *,a.user_id AS id_user,
          (select count(*) from data_photos ) as maxvalues,
          (SELECT count(*) FROM `data_photo_like` WHERE `photo_id` = a.photo_id) as countlike ,
          (3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
            RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)) * SIN(RADIANS(a.photo_la)))) as distant
            FROM `data_photos` a
            LEFT JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
            LEFT JOIN data_user_account b on a.user_id = b.user_id
            LEFT join data_country d on d.country_id = b.country_id
            LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
            WHERE a.photo_status = 1 AND a.photo_id = '".$photoID."'";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->get_result();

            if($result->num_rows > 0){
              $stmt->close();
              $i=1;

              $height = 0;
              while($res = $result->fetch_assoc())
              {
                // print_r($res);
                // exit();
                // photo_like
                // if($explore!="My Current Location "){
                $maxvalue = 1000;
                // }
                $sql2="SELECT * FROM data_photo_like where user_id = '".$user_id."' and photo_id = '".$res["photo_id"]."'";
                $stmt2 = $this->conn->prepare($sql2);
                $stmt2->execute();
                $result2 = $stmt2->get_result();
                $status_like = false;
                if ($result2->num_rows>0) {
                  $status_like = true;
                }
                // bookmark
                $sql2="SELECT * FROM data_photo_bookmark where photo_id = '".$res['photo_id']."' and user_id='".$user_id."'";
                $stmt2 = $this->conn->prepare($sql2);
                $stmt2->execute();
                $result2 = $stmt2->get_result();
                $status_bookmark = false;
                if ($result2->num_rows>0) {
                  $status_bookmark = true;
                }
                $textLocation ="";
                $nameLocation = "";
                if (sizeof(explode(", ",$res['photo_location']))>1) {
                  for ($i=0; $i < sizeof(explode(", ",$res['photo_location'])); $i++) {
                    if ($i==0) {
                      $nameLocation = explode(", ",$res['photo_location'])[$i];
                      $textLocation.="<b>".explode(", ",$res['photo_location'])[$i]."</b>, ";
                    }else if($i==sizeof(explode(", ",$res['photo_location']))-1){
                      $textLocation.="<b>".explode(", ",$res['photo_location'])[$i]."</b>";
                    }else{
                      $textLocation.=explode(", ",$res['photo_location'])[$i].", ";
                    }
                  }
                }else{
                  $nameLocation = $res['photo_location'];
                  $textLocation = $res['photo_location'];
                }

                // หาระยะทาง
                $distance = "";
                // if ($res['photo_la']!=""&&$res['photo_long']!="") {
                //   $to=$res['photo_la'].",".$res['photo_long'];
                //   $data = $this->curl('https://maps.googleapis.com/maps/api/directions/json?origin='.$from.'&destination='.$to.'&sensor=false&key='.key_map,"");
                //   if ($data['status']=="OK") {
                //     $distance = $data['routes'][0]['legs'][0]['distance']['text'];
                //   }
                // }


                // เวลาห่างที่โพส
                $start  = date_create($res['photo_createdate']);
                $end 	= date_create(); // Current time and date
                $diff  	= date_diff( $start, $end );
                $Arraytime =[
                  [$diff->y,'years'],
                  [$diff->m,'months'],
                  [$diff->d,'d'],
                  [$diff->h,'hr'],
                  [$diff->i,'min'],
                  [$diff->s,'sec'],
                ];
                $time = "";
                for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                  if ($Arraytime[$i][0]!=0) {
                    $time = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                    break;
                  }
                }
                $sum_like = $this->count_number('data_photo_like','photo_id',$res['photo_id']);
                $tmp=$this->getFollow($res['user_id']);
                $imgLike = [];
                $likeSql = $this->conn->prepare("SELECT * FROM data_photo_like LEFT JOIN data_user_account on data_photo_like.user_id = data_user_account.user_id WHERE photo_id = '".$res['photo_id']."'");
                $likeSql->execute();
                $resultLike = $likeSql->get_result();
                while($resLike = $resultLike->fetch_assoc())
                {
                  array_push($imgLike,"https://www.myadventureearth.com/".$resLike['user_path_img']);
                }



                $textCap = "";
                // // print_r($res['photo_caption']);
                // // exit();
                // $caption = explode(' ' , htmlspecialchars_decode($res['photo_caption'],ENT_QUOTES));
                // //
                // for ($i=0; $i < count($caption); $i++) {
                //   $matches = array();
                //   // if($caption[$i] == '<br>'){
                //   //   $textCap = $textCap . $caption[$i] . ' ';
                //   // }else{
                //     $matches = $this->func->getHashtags($caption[$i]);
                //
                //     if(count($matches) == 0){
                //       $textCap = $textCap . $caption[$i] . ' ';
                //     }else{
                //       $textHashTag = explode('#' , $caption[$i]);
                //       // print_r($textHashTag);
                //
                //       foreach ($textHashTag as $key => $value) {
                //         if($key == 1){
                //           $value = '#'.$value;
                //         }
                //         $matches = $this->func->getHashtags($value);
                //         if(count($matches) == 0){
                //           $textCap = $textCap . $value . ' ';
                //         }else{
                //           $textCap = $textCap . ' <a class="hashtag">'. htmlspecialchars($value, ENT_QUOTES) .'</a> ';
                //         }
                //       }
                //     }
                //   // }
                // }
                // $test = str_replace('&amp;lt;div&amp;gt;',' &amp;lt;div&amp;gt; ',$res['photo_caption']);
                $capEdit = htmlspecialchars_decode($res['photo_caption'], ENT_QUOTES);
                $textCap = $this->func->sortATag($res['photo_caption']);
                $textCap = trim($textCap);
                // $textCap = '“' . trim($textCap) . '”';
                if($res['photo_path_img'] == ""){
                  $imgPost = $res['photo_path_img_original'];
                  $imgNomal = $res['photo_path_img_original'];
                }else{
                  $imgPost = $res['photo_path_img'];
                  $imgNomal = $res['photo_path_img_normal'];
                }
                $comment = "";
                $timecomment = "";
                $userId = "";
                $sumComment = "";
                $fullNameComment = "";
                $user_comment_img = "";

                /*** check your comment in post ***/
                $status_comment_sql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                WHERE user_status = 1 AND  com_photo_id = '".$res["photo_id"]."' and com_status != 1 and com_user_id = '$user_id' ORDER BY com_no DESC";
                $stmtStatusComment = $this->conn->prepare($status_comment_sql);
                $stmtStatusComment->execute();
                $resultStatusComment = $stmtStatusComment->get_result();
                $status_comment = false;
                if ($resultStatusComment->num_rows>0) {
                  $status_comment = true;
                }
                $stmtStatusComment->close();
                /*** check your comment in post ***/

                $commentsql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                WHERE user_status = 1 AND com_photo_id = '".$res["photo_id"]."' and com_status != 1 ORDER BY com_no DESC";
                // exit();
                $stmtComment = $this->conn->prepare($commentsql);
                $stmtComment->execute();
                $resultComment = $stmtComment->get_result();
                $sumComment = $resultComment->num_rows;

                if($resultComment->num_rows > 0){
                  while($resComment = $resultComment->fetch_assoc()){
                    $comment = $resComment['com_comment'];
                    $userId = $resComment['com_user_id'];
                    $user_comment_img = $resComment['user_path_img'];
                    $start  = date_create($resComment['com_date_comment']);
                    $end 	= date_create(); // Current time and date
                    $diff  	= date_diff( $start, $end );
                    $Arraytime =[
                      [$diff->y,'years'],
                      [$diff->m,'months'],
                      [$diff->d,'d'],
                      [$diff->h,'hr'],
                      [$diff->i,'min'],
                      [$diff->s,'sec'],
                    ];
                    $fullNameComment = $resComment['user_firstname'] . " " . $resComment['user_lastname'];
                    for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                      if ($Arraytime[$i][0]!=0) {
                        if($Arraytime[$i][1] == 'sec'){
                          $timecomment = '1 min';
                        }else{
                          $timecomment = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                        }
                        break;
                      }
                    }
                    break;
                  }
                }
                $imgresize = array();
                $imgfullsize = array();
                $path_width = $path_height = "";
                $sqlimg = "SELECT * FROM `data_path_photo` WHERE path_post_id = '".$res['photo_id']."' AND path_status = 1";
                $stmtimg = $this->conn->prepare($sqlimg);
                $stmtimg->execute();

                $resimg = $stmtimg->get_result();
                $countP = 0;
                if($resimg->num_rows > 0){
                  while($imgres = $resimg->fetch_assoc())
                  {
                    $video = array(
                      'photo_id' => $imgres['path_id'],
                      'path_full' => BASE_URL.$imgres['path_url'],
                      'path_resize' => BASE_URL.$imgres['path_url_resize'],
                      'path_height' => $this->func->NewgetFullsize($imgres['path_width'],$imgres['path_height'],$widthphone),
                      'number' => $imgres['path_number'],
                      'type' => 1,
                    );
                    $imgresize[] = $video;
                    if($countP == 0){
                      $path_width = $imgres['path_width'];
                      $path_height = $imgres['path_height'];
                    }
                    $countP++;
                  }
                }

                $sqlVideo = "SELECT * FROM `data_path_video` WHERE vdo_status = 1 AND vdo_post_id = '".$res['photo_id']."'";
                $stmVideo = $this->conn->prepare($sqlVideo);
                $stmVideo->execute();
                $resVideo = $stmVideo->get_result();
                if($resVideo->num_rows > 0){
                  while($imgvideo= $resVideo->fetch_assoc())
                  {
                    $video = array(
                      'path_full' => BASE_URL.$imgvideo['vdo_url'].'#t=0.1',
                      'path_resize' => BASE_URL.$imgvideo['vdo_url'].'#t=0.1',
                      'number' => BASE_URL.$imgvideo['vdo_number'],
                      'type' => 2,
                    );
                    $imgresize[] = $video;
                  }
                }
                // echo $user_id . ' - ';
                // echo $res['user_id'] . ' - ';
                // echo $res['photo_id'] . ' | ';
                $distant_de = number_format((float)($res['distant']*2), 1, '.', '');
                if($distant_de < 10){
                  $dis = $distant_de;
                }else{
                  $dis = number_format((float)($res['distant']*2), 0, '.', '');
                }
                $countyPath = "";
                $countPath = explode(".png", $res["country_flag_32"]);
                if(count($countPath) > 1){
                  $newPath = $countPath[0] . ".svg";
                  $countyPath = "https://www.myadventureearth.com/data/flags/".strtolower(str_replace("-32","",$newPath));
                }else{
                  $countyPath = "https://www.myadventureearth.com/data/flags/".strtolower(str_replace("-32","",$res["country_flag_32"]));
                }






                $response = array(
                  "country_img" => $countyPath,
                  "distant" => $dis,
                  "checkshow" => 0,
                  "checkCard" => 0,
                  "user_id" => $res['user_id'],
                  "photo_id" => $res['photo_id'],
                  "photo_caption" => html_entity_decode($res['photo_caption']),
                  "photo_location" => $res['photo_location'],
                  // "photo_locationText" => $textLocation,
                  "photo_locationText" => $res['photo_location'],
                  "photo_la" => $res['photo_la'],
                  "photo_long" => $res['photo_long'],
                  "photo_share" => $res['photo_share'],
                  "TypeLocation_id" => $res['TypeLocation_id'],
                  "TypeLocation_name" => $res['TypeLocation_name'],
                  "photo_province" => $res['photo_province'],
                  'time'=>$time,

                  "user_type" => $res['user_shop'],
                  "user_firstname" => html_entity_decode($res['user_firstname'], ENT_QUOTES),
                  "user_lastname" => html_entity_decode($res['user_lastname'], ENT_QUOTES),
                  "user_path_img" => BASE_URL.$res['user_path_img'],
                  "country_name_th" => $res['country_name_th'],
                  "country_name_en" => $res['country_name_en'],
                  "feeling_id" => $res['feeling_tx_id'],
                  "feeling_name" => $res['feeling_tx_name'],
                  "photo_img" => BASE_URL.$imgPost,
                  "photo_img_Full" => BASE_URL.$imgNomal,
                  "user_img" => BASE_URL.$res['user_path_img'],
                  "sum_like" => $sum_like,
                  "followers" => $tmp['followers'],
                  "following" => $tmp['following'],
                  "status_like" =>$status_like,
                  "status_bookmark"=>$status_bookmark,
                  'linkshared'=>BASE_URL_WEB.'OpenGraph.php?method=share&user=user&id='.$res['photo_id'],
                  // 'linkshared'=>'https://www.google.com/'.$res['photo_id'].'&img='.BASE_URL.$imgPost,
                  // 'sizeheight'=>$this->func->getsize('../../'.$res['photo_path_img'],$widthphone),
                  // 'sizeFullheight'=>$this->func->getFullsize('../../'.$res['photo_path_img'],$widthphone),
                  // 'sizeheight'=>$this->func->Newgetsize($res['photo_width'],$res['photo_height'],$widthphone),
                  // 'sizeFullheight'=>$this->func->NewgetFullsize($res['photo_width'],$res['photo_height'],$widthphone),
                  'sizeheight'=>$this->func->Newgetsize($path_width,$path_height,$widthphone),
                  'sizeFullheight'=>$this->func->NewgetFullsize($path_width,$path_height,$widthphone),
                  'numtype'=> '0',
                  'positionY'=>$height,
                  'nameLocation'=>$nameLocation,
                  'distance'=>$distance,
                  'room_name'=>$this->get_room_name($user_id,$res['id_user'])."",
                  'hashtag'=>$textCap,
                  // 'maxvalues'=>
                  'status_show'=>true,
                  "comment_key" => $res['key_room'],
                  "comment" => $comment,
                  "comment_user_img" => BASE_URL.$user_comment_img,
                  "userIdComment" => $userId,
                  "timeComment" => $timecomment,
                  "countComment" => $sumComment,
                  "status_comment"=>$status_comment,
                  "fulnameComment" => $fullNameComment,
                  "textComment" => "",
                  "pictureResize" => $imgresize,
                  "pictureFull" => $imgfullsize,
                  "imageLike" => $imgLike,
                  "capEdit" => $capEdit,

                );
                // print_r($output);
                // print_r($response);

                array_push($output,$response);
                // $output[] =  $response;

                $height=$height+$this->func->Newgetsize($res['photo_width'],$res['photo_height'],$widthphone);
              }

              //
              // print_r($output);
              // exit();
              return   array($output,$maxvalue);
            }else{
              if(count($output) > 0){
                return   array($output,$maxvalue);
              }else{
                $stmt->close();
                return NULL;
              }
            }
          }

          public function getDataPostTat($lat,$long,$photoID,$user_id) {
            $output = array();
            $sqlTour = "SELECT a.* , b.province_name_en , d.*, (
              3959
              * ACOS( COS(RADIANS($lat))
              * COS(RADIANS(a.attraction_lat))
              * COS(RADIANS(a.attraction_long)- RADIANS($long))
              + SIN(RADIANS($lat))
              * SIN(RADIANS(a.attraction_lat)))) as distant
              FROM `data_attraction` a
              LEFT JOIN data_province b on a.province_id = b.province_id
              LEFT JOIN data_attraction_img d on a.attraction_id = d.attraction_id
              WHERE a.picture_file_path != '' AND d.attraction_img_status = 1
              AND a.attraction_id = '".$photoID."'";
              // echo $sqlTour;
              // exit();
              $stmttour = $this->conn->prepare($sqlTour);
              $stmttour->execute();
              $resulttour = $stmttour->get_result();
              if($resulttour->num_rows > 0){
                $stmttour->close();
                $outputtour = array();

                while($resTAT = $resulttour->fetch_assoc())
                {
                  $typeTatName = '';
                  $typeLo= explode(',' , $resTAT['attraction_categories']);
                  // echo "SELECT * FROM data_TypeLocation WHERE TypeLocation_id = '".$typeLo[0]."'";
                  $sqldata = $this->conn->prepare("SELECT * FROM data_TypeLocation WHERE TypeLocation_id = '".$typeLo[0]."'");
                  $sqldata->execute();
                  $resultdata = $sqldata->get_result();
                  while($resdata = $resultdata->fetch_assoc())
                  {
                    $typeTatName=$resdata['TypeLocation_name'];
                  }

                  $comment = "";
                  $timecomment = "";
                  $userId = "";
                  $sumComment = "";
                  $fullNameComment = "";
                  $user_comment_img = "";

                  /*** check your comment in post ***/
                  $status_comment_sql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                  WHERE user_status = 1 AND  com_photo_id = '".$resTAT["attraction_id"]."' and com_status != 1 and com_type = 'TAT' and com_user_id = '$user_id' ORDER BY com_no DESC";
                  $stmtStatusComment = $this->conn->prepare($status_comment_sql);
                  $stmtStatusComment->execute();
                  $resultStatusComment = $stmtStatusComment->get_result();
                  $status_comment = false;
                  if ($resultStatusComment->num_rows>0) {
                    $status_comment = true;
                  }
                  $stmtStatusComment->close();
                  /*** check your comment in post ***/

                  $commentsql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                  WHERE user_status = 1 AND  com_photo_id = '".$resTAT["attraction_id"]."' and com_status != 1 and com_type = 'TAT' ORDER BY com_no DESC";
                  // exit();
                  $stmtComment = $this->conn->prepare($commentsql);
                  $stmtComment->execute();
                  $resultComment = $stmtComment->get_result();
                  $sumComment = $resultComment->num_rows;

                  if($resultComment->num_rows > 0){
                    while($resComment = $resultComment->fetch_assoc()){
                      $comment = $resComment['com_comment'];
                      $userId = $resComment['com_user_id'];
                      $user_comment_img = $resComment['user_path_img'];
                      $start  = date_create($resComment['com_date_comment']);
                      $end 	= date_create(); // Current time and date
                      $diff  	= date_diff( $start, $end );
                      $Arraytime =[
                        [$diff->y,'years'],
                        [$diff->m,'months'],
                        [$diff->d,'d'],
                        [$diff->h,'hr'],
                        [$diff->i,'min'],
                        [$diff->s,'sec'],
                      ];
                      $fullNameComment = $resComment['user_firstname'] . " " . $resComment['user_lastname'];
                      for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                        if ($Arraytime[$i][0]!=0) {
                          if($Arraytime[$i][1] == 'sec'){
                            $timecomment = '1 min';
                          }else{
                            $timecomment = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                          }
                          break;
                        }
                      }
                      break;
                    }
                  }
                  $imgresize = [];
                  $video = array(
                    'path_full' => BASE_URL.$resTAT['attraction_img_path'],
                    'path_resize' => BASE_URL.$resTAT['attraction_img_path'],
                    'path_height' => $this->func->NewgetFullsize($resTAT['photo_width'],$resTAT['photo_height'],375),
                    'number' => 1,
                    'type' => 1,
                  );
                  $imgresize[] = $video;

                  $sql2="SELECT * FROM photo_like_tat where tat_user_id = '".$user_id."' and tat_post_id = '".$resTAT["attraction_id"]."'";
                  $stmt2 = $this->conn->prepare($sql2);
                  $stmt2->execute();
                  $result2 = $stmt2->get_result();
                  $status_like = false;
                  if ($result2->num_rows>0) {
                    $status_like = true;
                  }
                  $sum_like = $this->count_number('photo_like_tat','tat_post_id',$resTAT['attraction_id']);
                  $imgLike = [];
                  $likeSql = $this->conn->prepare("SELECT * FROM photo_like_tat LEFT JOIN data_user_account on photo_like_tat.tat_user_id = data_user_account.user_id WHERE tat_post_id = '".$resTAT['attraction_id']."'");
                  $likeSql->execute();
                  $resultLike = $likeSql->get_result();
                  while($resLike = $resultLike->fetch_assoc())
                  {
                    array_push($imgLike,"https://www.myadventureearth.com/".$resLike['user_path_img']);
                  }
                  $sql2="SELECT * FROM data_photo_bookmark where photo_id = '".$resTAT['attraction_id']."' and user_id='".$user_id."' and post_type = '2'";
                  $stmt2 = $this->conn->prepare($sql2);
                  $stmt2->execute();
                  $result2 = $stmt2->get_result();
                  $status_bookmark = false;
                  if ($result2->num_rows>0) {
                    $status_bookmark = true;
                  }

                  if ($resTAT['attraction_img_path']!="" && $typeLo[0] !="") {
                    $distant_de = number_format((float)($resTAT['distant']*2), 1, '.', '');
                    if($distant_de < 10){
                      $dis = $distant_de;
                    }else{
                      $dis = number_format((float)($resTAT['distant']*2), 0, '.', '');
                    }
                    $response = array(
                      "distant" => $dis,
                      "user_id" => 'TAT',
                      "checkshow" => 0,
                      "checkCard" => 0,
                      'hashtag'=> $resTAT['attraction_name'],
                      "photo_id" => $resTAT['attraction_id'],
                      "photo_caption" => html_entity_decode($resTAT['attraction_name']),
                      "photo_location" => $resTAT['attraction_address'],
                      "photo_locationText" => $resTAT['attraction_address'],
                      "photo_la" => $resTAT['attraction_lat'],
                      "photo_long" => $resTAT['attraction_long'],
                      "photo_share" => '',
                      "TypeLocation_id" => $typeLo[0],
                      "TypeLocation_name" => $typeTatName,
                      "photo_province" => $resTAT['province_name_en'],
                      // 'time'=>$time,
                      "user_firstname" => 'Tourism Authority of Thailand',
                      "user_lastname" => '',
                      "user_path_img" => 'https://myadventureearth.com/api/v1/img/tat.jpg',
                      "country_name_th" => 'ประเทศไทย',
                      "country_name_en" => 'Thailand',
                      "feeling_id" => '',
                      "feeling_name" => '',
                      "photo_img" => BASE_URL.$resTAT['attraction_img_path'],
                      "photo_img_Full" => BASE_URL.$resTAT['attraction_img_path'],
                      "user_img" => 'https://myadventureearth.com/api/v1/img/tat.jpg',
                      "sum_like" => '0',
                      "followers" => '',
                      "following" => '',
                      "status_like" => $status_like,
                      "status_bookmark"=>'true',
                      'linkshared'=>BASE_URL_WEB.'ShearTAT.php?method=share&user=tat&id='.$resTAT['attraction_id'],
                      'sizeheight'=>$this->func->Newgetsize($resTAT['photo_width'],$resTAT['photo_height'],375),
                      'sizeFullheight'=>$this->func->NewgetFullsize($resTAT['photo_width'],$resTAT['photo_height'],375),
                      'numtype'=>0,
                      'positionY'=>$resTAT['photo_height'],
                      'nameLocation'=>$resTAT['attraction_address'],
                      'distance'=>'',
                      // 'room_name'=>$this->get_room_name($user_id,$res['user_id'])."",
                      'hashtag'=>$resTAT['attraction_name'],
                      'status_show'=>true,
                      'pictureResize'=>$imgresize,
                      "comment" => $comment,
                      "comment_user_img" => BASE_URL.$user_comment_img,
                      "userIdComment" => $userId,
                      "timeComment" => $timecomment,
                      "countComment" => $sumComment,
                      "status_comment"=>$status_comment,
                      "fulnameComment" => $fullNameComment,
                      "comment_key" => $resTAT['key_room'],
                      "imageLike" => $imgLike,
                      "sum_like" => $sum_like,
                      "status_bookmark"=>$status_bookmark,
                    );
                    array_push($output,$response);
                    return  array($output);
                  }
                }
              }

            }
            public function getDatafeed($user_id,$LoadMoreLimit,$numLoad,$widthphone,$from,$explore,$lat,$long,$distant,$datapage_id,$places) {
              // echo "dddd ".$explore;
              // exit();
              
              $LoadMoreLimit = ($LoadMoreLimit != '' && $LoadMoreLimit != null) ? $LoadMoreLimit : 30;
              if($distant == ''){
                $distant = 200;
              }
              $distant = $distant/2;
              $date = date("Y-m-d", strtotime("-6 months"));
              $output = array();
              $maxvalue = 500;
              if($explore == 'searchAll'){
                if($from == 'My Current Location'){
                  $limit = " ORDER BY distant LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
                }else{
                  $limit = " ORDER BY photo_createdate desc LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
                }
                if($places != ''){
                  $places = "a.TypeLocation_id = '".$places."' && ";
                  if($from == 'My Current Location'){
                    $limit = " ORDER BY distant LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
                  }else{
                    $limit = " ORDER BY photo_createdate desc LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
                  }
                }
                $sql = "SELECT *,a.user_id AS id_user,
                (select count(*) from data_photos ) as maxvalues,
                (SELECT count(*) FROM `data_photo_like` WHERE `photo_id` = a.photo_id) as countlike ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                  RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
                ) * SIN(RADIANS(a.photo_la)))) as distant
                FROM `data_photos` a
                left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                left JOIN data_user_account b on a.user_id = b.user_id
                LEFT join data_country d on d.country_id = b.country_id
                LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                WHERE ".$places." photo_status = 1 && (photo_caption LIKE '%".$datapage_id."%' || photo_location LIKE '%".$datapage_id."%' || photo_province LIKE '%".$datapage_id."%' || text_search LIKE '%".$datapage_id."%' || photo_location_th LIKE '%".$datapage_id."%' )
                ".$limit;
                // echo $sql;
                // exit();
              }else if($explore == 'notification'){
                $sql = "SELECT *,a.user_id AS id_user,
                (select count(*) from data_photos ) as maxvalues,
                (SELECT count(*) FROM `data_photo_like` WHERE `photo_id` = a.photo_id) as countlike ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                  RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
                ) * SIN(RADIANS(a.photo_la)))) as distant
                FROM `data_photos` a
                left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                left JOIN data_user_account b on a.user_id = b.user_id
                LEFT join data_country d on d.country_id = b.country_id
                LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                WHERE photo_status = 1 && photo_id = $from";
              }else if (sizeof($explore)>1) {
                
                $sql = "SELECT *,a.user_id AS id_user,(select count(*) from data_photos ) as maxvalues ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                  RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
                ) * SIN(RADIANS(a.photo_la)))) as distant FROM `data_photos` a
                left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                left JOIN data_user_account b on a.user_id = b.user_id
                LEFT join data_country d on d.country_id = b.country_id
                LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                LEFT JOIN data_get_tag f on a.user_id = f.user_id
                WHERE  tag_id = '".$explore[1]."' AND photo_status = 1 && photo_createdate > $date
                ORDER BY photo_id Desc LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit
                ";
              }else if ($explore=="Popular") {
                
                $sql = "SELECT *,a.user_id AS id_user,
                (select count(*) from data_photos ) as maxvalues,
                (SELECT count(*) FROM `data_photo_like` WHERE `photo_id` = a.photo_id) as countlike ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                  RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
                ) * SIN(RADIANS(a.photo_la)))) as distant
                FROM `data_photos` a
                left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                left JOIN data_user_account b on a.user_id = b.user_id
                LEFT join data_country d on d.country_id = b.country_id
                LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                WHERE photo_status = 1 && photo_createdate > $date
                ORDER BY countlike Desc LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
              }else if($explore=='hashtag'){
                
                $sql = "SELECT *,a.user_id AS id_user,(select count(*) from data_photos ) as maxvalues ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                  RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
                ) * SIN(RADIANS(a.photo_la)))) as distant FROM `data_photos` a
                left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                left JOIN data_user_account b on a.user_id = b.user_id
                LEFT join data_country d on d.country_id = b.country_id
                LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                WHERE photo_status = 1 && photo_createdate > $date && photo_caption LIKE '%$from%'
                ORDER BY distant LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
              }else if($explore=="My Current Location"){
                
                 $LoadMoreLimit = 10;
                

                $sql = "SELECT *,a.user_id AS id_user,
                (select count(*) from data_photos ) as maxvalues,
                (SELECT count(*) FROM `data_photo_like` WHERE `photo_id` = a.photo_id) as countlike ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                  RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
                ) * SIN(RADIANS(a.photo_la)))) as distant
                FROM `data_photos` a
                left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                left JOIN data_user_account b on a.user_id = b.user_id
                LEFT join data_country d on d.country_id = b.country_id
                LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                WHERE photo_status = 1 && photo_createdate > $date 
                ORDER BY distant ASC
                LIMIT ".$LoadMoreLimit*"$numLoad".",10 ";
                // echo $sql;
                // exit();

                } else if($explore=="My Current Location 1"){
                  $LoadMoreLimit = 10;
                  $sqlTour = "SELECT a.* , b.province_name_en , d.*, (
                  3959
                  * ACOS( COS(RADIANS($lat))
                  * COS(RADIANS(a.attraction_lat))
                  * COS(RADIANS(a.attraction_long)- RADIANS($long))
                  + SIN(RADIANS($lat))
                  * SIN(RADIANS(a.attraction_lat)))) as distant
                  FROM `data_photos` a
                  LEFT JOIN data_province b on a.province_id = b.province_id
                  LEFT JOIN data_attraction_img d on a.attraction_id = d.attraction_id
                  WHERE a.picture_file_path != '' AND d.attraction_img_status = 1
                  AND photo_status = 1 && photo_createdate > $date 
                  GROUP BY a.attraction_id
                  ORDER BY distant ASC
                  LIMIT ".$LoadMoreLimit*"$numLoad".",10";
                  $stmttour = $this->conn->prepare($sqlTour);
                  $stmttour->execute();
                  $resulttour = $stmttour->get_result();
                  if($resulttour->num_rows > 0){
                    $stmttour->close();
                    $outputtour = array();

                    while($res = $resulttour->fetch_assoc())
                    {
                      $typeTatName = '';
                      $typeLo= explode(',' , $res['attraction_categories']);
                      // echo "SELECT * FROM data_TypeLocation WHERE TypeLocation_id = '".$typeLo[0]."'";
                      $sqldata = $this->conn->prepare("SELECT * FROM data_TypeLocation WHERE TypeLocation_id = '".$typeLo[0]."'");
                      $sqldata->execute();
                      $resultdata = $sqldata->get_result();
                      while($resdata = $resultdata->fetch_assoc())
                      {
                        $typeTatName=$resdata['TypeLocation_name'];
                      }

                      $comment = "";
                      $timecomment = "";
                      $userId = "";
                      $sumComment = "";
                      $fullNameComment = "";
                      $user_comment_img = "";
                      $commentsql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                      WHERE user_status = 1 AND com_photo_id = '".$res["attraction_id"]."' and com_status != 1 and com_type = 'TAT' ORDER BY com_no DESC";
                      // exit();
                      $stmtComment = $this->conn->prepare($commentsql);
                      $stmtComment->execute();
                      $resultComment = $stmtComment->get_result();
                      $sumComment = $resultComment->num_rows;



                      /*** check your comment in post ***/
                      $status_comment_sql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                      WHERE user_status = 1 AND com_photo_id = '".$res["attraction_id"]."' and com_status != 1 and com_type = 'TAT ' and com_user_id = '$user_id' ORDER BY com_no DESC";
                      $stmtStatusComment = $this->conn->prepare($status_comment_sql);
                      $stmtStatusComment->execute();
                      $resultStatusComment = $stmtStatusComment->get_result();
                      $status_comment = false;
                      if ($resultStatusComment->num_rows>0) {
                        $status_comment = true;
                      }
                      $stmtStatusComment->close();
                      /*** check your comment in post ***/

                      if($resultComment->num_rows > 0){
                        while($resComment = $resultComment->fetch_assoc()){
                          $comment = $resComment['com_comment'];
                          $userId = $resComment['com_user_id'];
                          $user_comment_img = $resComment['user_path_img'];
                          $start  = date_create($resComment['com_date_comment']);
                          $end 	= date_create(); // Current time and date
                          $diff  	= date_diff( $start, $end );
                          $Arraytime =[
                            [$diff->y,'years'],
                            [$diff->m,'months'],
                            [$diff->d,'d'],
                            [$diff->h,'hr'],
                            [$diff->i,'min'],
                            [$diff->s,'sec'],
                          ];
                          $fullNameComment = $resComment['user_firstname'] . " " . $resComment['user_lastname'];
                          for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                            if ($Arraytime[$i][0]!=0) {
                              if($Arraytime[$i][1] == 'sec'){
                                $timecomment = '1 min';
                              }else{
                                $timecomment = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                              }
                              break;
                            }
                          }
                          break;
                        }
                      }
                      $imgresize = [];
                      $video = array(
                        'path_full' => BASE_URL.$res['attraction_img_path'],
                        'path_resize' => BASE_URL.$res['attraction_img_path'],
                        'path_height' => $this->func->NewgetFullsize($res['photo_width'],$res['photo_height'],$widthphone),
                        'number' => 1,
                        'type' => 1,
                      );
                      $imgresize[] = $video;

                      $sql2="SELECT * FROM photo_like_tat where tat_user_id = '".$user_id."' and tat_post_id = '".$res["attraction_id"]."'";
                      $stmt2 = $this->conn->prepare($sql2);
                      $stmt2->execute();
                      $result2 = $stmt2->get_result();
                      $status_like = false;
                      if ($result2->num_rows>0) {
                        $status_like = true;
                      }
                      $sum_like = $this->count_number('photo_like_tat','tat_post_id',$res['attraction_id']);
                      $imgLike = [];
                      $likeSql = $this->conn->prepare("SELECT * FROM photo_like_tat LEFT JOIN data_user_account on photo_like_tat.tat_user_id = data_user_account.user_id WHERE tat_post_id = '".$res['attraction_id']."'");
                      $likeSql->execute();
                      $resultLike = $likeSql->get_result();
                      while($resLike = $resultLike->fetch_assoc())
                      {
                        array_push($imgLike,"https://www.myadventureearth.com/".$resLike['user_path_img']);
                      }
                      $sql2="SELECT * FROM data_photo_bookmark where photo_id = '".$res['attraction_id']."' and user_id='".$user_id."' and post_type = '2'";
                      $stmt2 = $this->conn->prepare($sql2);
                      $stmt2->execute();
                      $result2 = $stmt2->get_result();
                      $status_bookmark = false;
                      if ($result2->num_rows>0) {
                        $status_bookmark = true;
                      }

                      // if ($res['attraction_img_path']!="" && $typeLo[0] !="") {
                      if ($res['attraction_img_path']!="" ) {
                        $distant_de = number_format((float)($res['distant']*2), 1, '.', '');
                        if($distant_de < 10){
                          $dis = $distant_de;
                        }else{
                          $dis = number_format((float)($res['distant']*2), 0, '.', '');
                        }

                        usort($imgresize, function($a, $b) {
                            return $a['number'] - $b['number'];
                        });

                        if($res['attraction_address'] == ''){
                          $res['attraction_address'] = '-';
                        }
                        $response = array(
                          "distant" => $dis,
                          "user_id" => 'TAT',
                          "checkshow" => 0,
                          "checkCard" => 0,
                          'hashtag'=> $res['attraction_name'],
                          "photo_id" => $res['attraction_id'],
                          "photo_caption" => html_entity_decode($res['attraction_name']),
                          "photo_location" => $res['attraction_address'],
                          "photo_locationText" => $res['attraction_address'],
                          "photo_la" => $res['attraction_lat'],
                          "photo_long" => $res['attraction_long'],
                          "photo_share" => '',
                          "TypeLocation_id" => $typeLo[0],
                          "TypeLocation_name" => $typeTatName,
                          "photo_province" => $res['province_name_en'],
                          // 'time'=>$time,
                          "user_firstname" => 'Tourism Authority of Thailand',
                          "user_lastname" => '',
                          "user_path_img" => 'https://myadventureearth.com/api/v1/img/tat.jpg',
                          "country_name_th" => 'ประเทศไทย',
                          "country_name_en" => 'Thailand',
                          "feeling_id" => '',
                          "feeling_name" => '',
                          "photo_img" => BASE_URL.$res['attraction_img_path'],
                          "photo_img_Full" => BASE_URL.$res['attraction_img_path'],
                          "user_img" => 'https://myadventureearth.com/api/v1/img/tat.jpg',
                          "sum_like" => '0',
                          "followers" => '',
                          "following" => '',
                          "status_like" => $status_like,
                          "status_bookmark"=>'true',
                          'linkshared'=>BASE_URL_WEB.'ShearTAT.php?method=share&user=tat&id='.$res['attraction_id'],
                          'sizeheight'=>$this->func->Newgetsize($res['photo_width'],$res['photo_height'],$widthphone),
                          'sizeFullheight'=>$this->func->NewgetFullsize($res['photo_width'],$res['photo_height'],$widthphone),
                          'numtype'=>$numLoad,
                          'positionY'=>$res['photo_height'],
                          'nameLocation'=>$res['attraction_address'],
                          'distance'=>'',
                          // 'room_name'=>$this->get_room_name($user_id,$res['user_id'])."",
                          'hashtag'=>$res['attraction_name'],
                          'status_show'=>true,
                          'pictureResize'=>$imgresize,
                          "comment" => $comment,
                          "comment_user_img" => BASE_URL.$user_comment_img,
                          "userIdComment" => $userId,
                          "timeComment" => $timecomment,
                          "countComment" => $sumComment,
                          "status_comment"=>$status_comment,
                          "fulnameComment" => $fullNameComment,
                          "comment_key" => $res['key_room'],
                          "imageLike" => $imgLike,
                          "sum_like" => $sum_like,
                          "status_bookmark"=>$status_bookmark,
                        );
                        // if($res['attraction_address'] != ""){
                          $output[]=$response;
                        // }
                      }else {
                        // echo $res['attraction_categories'];
                        // exit();
                      }
                    }
                  }

                  if(count($output) > 0){
                    if($numLoad == 0){
                      $min = 0;
                    }else{
                      $min = $output[0]["distant"]/2;
                    }
                  }else{
                    $min = 0;
                  }
                  return array($output,$maxvalue);
                  $max = end($output)["distant"]/2;
                  $sql = "SELECT *,a.user_id AS id_user,(select count(*) from data_photos ) as maxvalues ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                    RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
                  ) * SIN(RADIANS(a.photo_la)))) as distant FROM `data_photos` a
                  left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                  left JOIN data_user_account b on a.user_id = b.user_id
                  LEFT join data_country d on d.country_id = b.country_id
                  LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                  WHERE photo_status = 1 && photo_createdate > $date
                  HAVING distant >= $min && distant < $max
                  ORDER BY distant";
                  
                }else if ($explore && $explore!='Distance' && $explore!='Destination') {
                //   echo $datapage_id;
                // exit;
                  if($from == 'My Current Location'){
                    $limit = " ORDER BY distant LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
                  }else{
                    $limit = " ORDER BY photo_createdate desc LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
                  }
                  $where_search = '';
                  if($datapage_id != ''){
                    $where_search = "&& (photo_caption LIKE '%".$datapage_id."%' || photo_location LIKE '%".$datapage_id."%' || 
                    photo_province LIKE '%".$datapage_id."%' || text_search LIKE '%".$datapage_id."%' || photo_location_th LIKE '%".$datapage_id."%' )";
                  }
                  $sql = "SELECT *,a.user_id AS id_user,(select count(*) from data_photos ) as maxvalues ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                    RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
                  ) * SIN(RADIANS(a.photo_la)))) as distant
                  FROM `data_photos` a
                  left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                  left JOIN data_user_account b on a.user_id = b.user_id
                  LEFT join data_country d on d.country_id = b.country_id
                  LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                  where $explore AND photo_status = 1 && photo_createdate > $date 
                  ". $where_search."


                  ".  $limit;
                  // echo $sql;
                  // exit();
                }else if ($explore=='Destination') {
                  $sql = "SELECT *
                  FROM `data_photos` a
                  where photo_province LIKE '%".$datapage_id."%'OR photo_location LIKE '%".$datapage_id."%' AND photo_status != 0 && photo_createdate > $date LIMIT 1";
                  $stm = $this->conn->prepare($sql);
                  $stm->execute();
                  $res = $stm->get_result();
                  $res = $res->fetch_assoc();
                  $lat = $res['photo_la'];
                  $long = $res['photo_long'];
                  // data_photo_like
                  $sql = "SELECT * FROM (SELECT a.*,a.user_id AS id_user , (select count(photo_id) from data_photo_like WHERE photo_id = a.photo_id ) as MAXLike , e.TypeLocation_name,b.user_firstname,b.user_lastname,b.user_path_img,d.*,c.feeling_tx_name,(select count(*) from data_photos ) as maxvalues ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                    RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
                  ) * SIN(RADIANS(a.photo_la)))) as distant
                  FROM `data_photos` a
                  left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                  left JOIN data_user_account b on a.user_id = b.user_id
                  LEFT join data_country d on d.country_id = b.country_id
                  LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                  where photo_status = 1 && photo_createdate > $date
                  HAVING distant <= $distant
                  ORDER BY MAXLike DESC ) v
                  GROUP BY v.photo_location
                  ORDER BY v.distant
                  LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";

                }else if($explore=='Distance'){
                  $sql = "SELECT *,a.user_id AS id_user,(select count(*) from data_photos ) as maxvalues ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                    RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
                  ) * SIN(RADIANS(a.photo_la)))) as distant FROM `data_photos` a
                  left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                  left JOIN data_user_account b on a.user_id = b.user_id
                  LEFT join data_country d on d.country_id = b.country_id
                  LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                  HAVING photo_status = 1 && distant <= ".$distant."
                  ORDER BY distant  LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";

                } else{
                  
                  $typelocation= "";
                  $sql = "SELECT *,a.user_id AS id_user,(select count(*) from data_photos ) as maxvalues ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                    RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
                  ) * SIN(RADIANS(a.photo_la)))) as distant FROM `data_photos` a
                  left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                  left JOIN data_user_account b on a.user_id = b.user_id
                  LEFT join data_country d on d.country_id = b.country_id
                  LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                  
                  WHERE photo_status = 1 ".$typelocation." 
                  ORDER BY photo_createdate desc LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit
                  ";
                  // echo $sql;
                  // exit();
                }

                // echo $sql;
                // exit;

                $stmt = $this->conn->prepare($sql);
                $stmt->execute();
                $result = $stmt->get_result();

                if($result->num_rows > 0){
                  $stmt->close();
                  $i=1;
                  $i_duk = 1;
                  $height = 0;
                  while($res = $result->fetch_assoc())
                  {
                    // print_r($res);
                    // exit();
                    // photo_like
                    if($explore!="My Current Location"){
                      $maxvalue = $res['maxvalues'];
                    }
                    $sql2="SELECT * FROM data_photo_like where user_id = '".$user_id."' and photo_id = '".$res["photo_id"]."'";
                    $stmt2 = $this->conn->prepare($sql2);
                    $stmt2->execute();
                    $result2 = $stmt2->get_result();
                    $status_like = false;
                    if ($result2->num_rows>0) {
                      $status_like = true;
                    }
                    // bookmark
                    $sql2="SELECT * FROM data_photo_bookmark where photo_id = '".$res['photo_id']."' and user_id='".$user_id."' and post_type = '1'";
                    $stmt2 = $this->conn->prepare($sql2);
                    $stmt2->execute();
                    $result2 = $stmt2->get_result();
                    $status_bookmark = false;
                    if ($result2->num_rows>0) {
                      $status_bookmark = true;
                    }
                    $textLocation ="";
                    $nameLocation = "";
                    if (sizeof(explode(", ",$res['photo_location']))>1) {
                      for ($i=0; $i < sizeof(explode(", ",$res['photo_location'])); $i++) {
                        if ($i==0) {
                          $nameLocation = explode(", ",$res['photo_location'])[$i];
                          $textLocation.="<b>".explode(", ",$res['photo_location'])[$i]."</b>, ";
                        }else if($i==sizeof(explode(", ",$res['photo_location']))-1){
                          $textLocation.="<b>".explode(", ",$res['photo_location'])[$i]."</b>";
                        }else{
                          $textLocation.=explode(", ",$res['photo_location'])[$i].", ";
                        }
                      }
                    }else{
                      $nameLocation = $res['photo_location'];
                      $textLocation = $res['photo_location'];
                    }

                    // หาระยะทาง
                    $distance = "";
                    // if ($res['photo_la']!=""&&$res['photo_long']!="") {
                    //   $to=$res['photo_la'].",".$res['photo_long'];
                    //   $data = $this->curl('https://maps.googleapis.com/maps/api/directions/json?origin='.$from.'&destination='.$to.'&sensor=false&key='.key_map,"");
                    //   if ($data['status']=="OK") {
                    //     $distance = $data['routes'][0]['legs'][0]['distance']['text'];
                    //   }
                    // }


                    // เวลาห่างที่โพส
                    $start  = date_create($res['photo_createdate']);
                    $end 	= date_create(); // Current time and date
                    $diff  	= date_diff( $start, $end );
                    $Arraytime =[
                      [$diff->y,'years'],
                      [$diff->m,'months'],
                      [$diff->d,'d'],
                      [$diff->h,'hr'],
                      [$diff->i,'min'],
                      [$diff->s,'sec'],
                    ];
                    $time = "";
                    for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                      if ($Arraytime[$i][0]!=0) {
                        $time = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                        break;
                      }
                    }
                    $sum_like = $this->count_number('data_photo_like','photo_id',$res['photo_id']);
                    $tmp=$this->getFollow($res['user_id']);
                    $imgLike = [];
                    $likeSql = $this->conn->prepare("SELECT * FROM data_photo_like LEFT JOIN data_user_account on data_photo_like.user_id = data_user_account.user_id WHERE photo_id = '".$res['photo_id']."'");
                    $likeSql->execute();
                    $resultLike = $likeSql->get_result();
                    while($resLike = $resultLike->fetch_assoc())
                    {
                      array_push($imgLike,"https://www.myadventureearth.com/".$resLike['user_path_img']);
                    }



                    $textCap = "";
                    // // print_r($res['photo_caption']);
                    // // exit();
                    // $caption = explode(' ' , htmlspecialchars_decode($res['photo_caption'],ENT_QUOTES));
                    // //
                    // for ($i=0; $i < count($caption); $i++) {
                    //   $matches = array();
                    //   // if($caption[$i] == '<br>'){
                    //   //   $textCap = $textCap . $caption[$i] . ' ';
                    //   // }else{
                    //     $matches = $this->func->getHashtags($caption[$i]);
                    //
                    //     if(count($matches) == 0){
                    //       $textCap = $textCap . $caption[$i] . ' ';
                    //     }else{
                    //       $textHashTag = explode('#' , $caption[$i]);
                    //       // print_r($textHashTag);
                    //
                    //       foreach ($textHashTag as $key => $value) {
                    //         if($key == 1){
                    //           $value = '#'.$value;
                    //         }
                    //         $matches = $this->func->getHashtags($value);
                    //         if(count($matches) == 0){
                    //           $textCap = $textCap . $value . ' ';
                    //         }else{
                    //           $textCap = $textCap . ' <a class="hashtag">'. htmlspecialchars($value, ENT_QUOTES) .'</a> ';
                    //         }
                    //       }
                    //     }
                    //   // }
                    // }
                    // $test = str_replace('&amp;lt;div&amp;gt;',' &amp;lt;div&amp;gt; ',$res['photo_caption']);
                    $capEdit = htmlspecialchars_decode($res['photo_caption'], ENT_QUOTES);
                    $textCap = $this->func->sortATags($res['photo_caption']);
                    $textCap = trim($textCap);
                    // $textCap = '“' . trim($textCap) . '”';
                    if($res['photo_path_img'] == ""){
                      $imgPost = $res['photo_path_img_original'];
                      $imgNomal = $res['photo_path_img_original'];
                    }else{
                      $imgPost = $res['photo_path_img'];
                      $imgNomal = $res['photo_path_img_normal'];
                    }
                    $comment = "";
                    $timecomment = "";
                    $userId = "";
                    $sumComment = "";
                    $fullNameComment = "";
                    $user_comment_img = "";

                    /*** check your comment in post ***/
                    $status_comment_sql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                    WHERE user_status = 1 AND  com_photo_id = '".$res["photo_id"]."' and com_status != 1 and com_user_id = '$user_id' ORDER BY com_no DESC";
                    $stmtStatusComment = $this->conn->prepare($status_comment_sql);
                    $stmtStatusComment->execute();
                    $resultStatusComment = $stmtStatusComment->get_result();
                    $status_comment = false;
                    if ($resultStatusComment->num_rows>0) {
                      $status_comment = true;
                    }
                    $stmtStatusComment->close();
                    /*** check your comment in post ***/

                    $commentsql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                    WHERE user_status = 1 AND com_photo_id = '".$res["photo_id"]."' and com_status != 1 ORDER BY com_date_comment DESC";
                    // exit();
                    $stmtComment = $this->conn->prepare($commentsql);
                    $stmtComment->execute();
                    $resultComment = $stmtComment->get_result();
                    $sumComment = $resultComment->num_rows;
                    // echo $commentsql;exit;
                    if($resultComment->num_rows > 0){
                      while($resComment = $resultComment->fetch_assoc()){
                        $comment = $resComment['com_comment'];
                        $userId = $resComment['com_user_id'];
                        $user_comment_img = $resComment['user_path_img'];
                        $start  = date_create($resComment['com_date_comment']);
                        $end 	= date_create(); // Current time and date
                        $diff  	= date_diff( $start, $end );
                        $Arraytime =[
                          [$diff->y,'years'],
                          [$diff->m,'months'],
                          [$diff->d,'d'],
                          [$diff->h,'hr'],
                          [$diff->i,'min'],
                          [$diff->s,'sec'],
                        ];
                        $fullNameComment = $resComment['user_firstname'] . " " . $resComment['user_lastname'];
                        for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                          if ($Arraytime[$i][0]!=0) {
                            if($Arraytime[$i][1] == 'sec'){
                              $timecomment = '1 min';
                            }else{
                              $timecomment = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                            }
                            break;
                          }
                        }
                        break;
                      }
                    }
                    $imgresize = array();
                    $imgfullsize = array();
                    $path_width = $path_height = "";
                    $sqlimg = "SELECT * FROM `data_path_photo` WHERE path_post_id = '".$res['photo_id']."' AND path_status = 1";
                    $stmtimg = $this->conn->prepare($sqlimg);
                    $stmtimg->execute();
                    $resimg = $stmtimg->get_result();
                    $countP = 0;
                    if($resimg->num_rows > 0){
                      while($imgres = $resimg->fetch_assoc())
                      {
                        $video = array(
                          'photo_id' => $imgres['path_id'],
                          'path_full' => BASE_URL.$imgres['path_url'],
                          'path_resize' => BASE_URL.$imgres['path_url_resize'],
                          'path_height' => $this->func->NewgetFullsize($imgres['path_width'],$imgres['path_height'],$widthphone),
                          'number' => $imgres['path_number'],
                          'type' => 1,
                        );
                        $imgresize[] = $video;
                        if($countP == 0){
                          $path_width = $imgres['path_width'];
                          $path_height = $imgres['path_height'];
                        }
                        $countP++;
                      }
                    } 

                    $sqlVideo = "SELECT * FROM `data_path_video` WHERE vdo_post_id = '".$res['photo_id']."' AND vdo_status = 1";
                    $stmVideo = $this->conn->prepare($sqlVideo);
                    $stmVideo->execute();
                    $resVideo = $stmVideo->get_result();
                    if($resVideo->num_rows > 0){
                      while($imgvideo= $resVideo->fetch_assoc())
                      {
                        $video = array(
                          'photo_id' => $imgvideo['vdo_id'],
                          'path_full' => BASE_URL.$imgvideo['vdo_url'].'#t=0.1',
                          'path_resize' => BASE_URL.$imgvideo['vdo_url'].'#t=0.1',
                          'number' => $imgvideo['vdo_number'],
                          'type' => 2,
                        );
                        $imgresize[] = $video;
                      }
                    }
                    // echo $user_id . ' - ';
                    // echo $res['user_id'] . ' - ';
                    // echo $res['photo_id'] . ' | ';
                    $distant_de = number_format((float)($res['distant']*2), 1, '.', '');
                    if($distant_de < 10){
                      $dis = $distant_de;
                    }else{
                      $dis = number_format((float)($res['distant']*2), 0, '.', '');
                    }
                    $countyPath = "";
                    $countPath = explode(".png", $res["country_flag_32"]);
                    if(count($countPath) > 1){
                      $newPath = $countPath[0] . ".svg";
                      $countyPath = "https://www.myadventureearth.com/data/flags/".strtolower(str_replace("-32","",$newPath));
                    }else{
                      $countyPath = "https://www.myadventureearth.com/data/flags/".strtolower(str_replace("-32","",$res["country_flag_32"]));
                    }


                    usort($imgresize, function($a, $b) {
                        return $a['number'] - $b['number'];
                    });


                    $response = array(
                      "highlight" => $res['highlight'],
                      "country_img" => $countyPath,
                      "distant" => $dis,
                      "checkshow" => 0,
                      "checkCard" => 0,
                      "user_id" => $res['user_id'],
                      "photo_id" => $res['photo_id'],
                      "photo_caption" => html_entity_decode($res['photo_caption']),
                      "photo_location" => $res['photo_location'],
                      // "photo_locationText" => $textLocation,
                      "photo_locationText" => $res['photo_location'],
                      "photo_la" => $res['photo_la'],
                      "photo_long" => $res['photo_long'],
                      "photo_share" => $res['photo_share'],
                      "TypeLocation_id" => $res['TypeLocation_id'],
                      "TypeLocation_name" => $res['TypeLocation_name'],
                      "photo_province" => $res['photo_province'],
                      'time'=>$time,

                      "user_type" => $res['user_shop'],
                      "user_firstname" => html_entity_decode($res['user_firstname'], ENT_QUOTES),
                      "user_lastname" => html_entity_decode($res['user_lastname'], ENT_QUOTES),
                      "user_path_img" => BASE_URL.$res['user_path_img'],
                      "country_name_th" => $res['country_name_th'],
                      "country_name_en" => $res['country_name_en'],
                      "feeling_id" => $res['feeling_tx_id'],
                      "feeling_name" => $res['feeling_tx_name'],
                      "photo_img" => BASE_URL.$imgPost,
                      "photo_img_Full" => BASE_URL.$imgNomal,
                      "user_img" => BASE_URL.$res['user_path_img'],
                      "sum_like" => $sum_like,
                      "followers" => $tmp['followers'],
                      "following" => $tmp['following'],
                      "status_like" =>$status_like,
                      "status_bookmark"=>$status_bookmark,
                      'linkshared'=>BASE_URL_WEB.'OpenGraph.php?method=share&user=user&id='.$res['photo_id'],
                      // 'linkshared'=>'https://www.google.com/'.$res['photo_id'].'&img='.BASE_URL.$imgPost,
                      // 'sizeheight'=>$this->func->getsize('../../'.$res['photo_path_img'],$widthphone),
                      // 'sizeFullheight'=>$this->func->getFullsize('../../'.$res['photo_path_img'],$widthphone),
                      // 'sizeheight'=>$this->func->Newgetsize($res['photo_width'],$res['photo_height'],$widthphone),
                      // 'sizeFullheight'=>$this->func->NewgetFullsize($res['photo_width'],$res['photo_height'],$widthphone),
                      'sizeheight'=>$this->func->Newgetsize($path_width,$path_height,$widthphone),
                      'sizeFullheight'=>$this->func->NewgetFullsize($path_width,$path_height,$widthphone),
                      'numtype'=>$numLoad,
                      'positionY'=>$height,
                      'nameLocation'=>$nameLocation,
                      'distance'=>$distance,
                      'room_name'=>$this->get_room_name($user_id,$res['id_user'])."",
                      'hashtag'=>$textCap,
                      // 'maxvalues'=>
                      'status_show'=>true,
                      "comment_key" => $res['key_room'],
                      "comment" => $comment,
                      "comment_user_img" => BASE_URL.$user_comment_img,
                      "userIdComment" => $userId,
                      "timeComment" => $timecomment,
                      "countComment" => $sumComment,
                      "status_comment"=>$status_comment,
                      "fulnameComment" => $fullNameComment,
                      "textComment" => "",
                      "pictureResize" => $imgresize,
                      "pictureFull" => $imgfullsize,
                      "imageLike" => $imgLike,
                      "capEdit" => $capEdit,

                    );

                    if(count($imgresize) != 0){
                      // echo $sqlimg." / ".$duk;
                      // print_r($resimg);
                      // exit();
                      if($from&&$explore=="My Current Location"){
                        $distance = $this->func->getDistance(explode(',',$from)[0],explode(',',$from)[1],$res['photo_la'],$res['photo_long']);
                        // if ($distance>=0&&$distance<20) {
                        array_push($output,$response);
                        // }
                      }else if($from&&$explore=="Distance"){
                        $dis= explode('/',$from)[1];
                        $froms = explode('/',$from)[0];
                        // $distance = $this->func->getDistance(explode(',',$froms)[0],explode(',',$froms)[1],$res['photo_la'],$res['photo_long']);
                        // if ($distance>=0&&$distance<$dis) {
                        if ($res['distant']<$dis) {
                          array_push($output,$response);
                        }
                        // }
                      }else{
                        array_push($output,$response);
                      }
                    } else{
                      // if($i_duk == 2){
                      //   // echo $sqlimg." / ".$duk;
                      //   print_r($resimg);
                      //   exit();
                      // }
                      
                      // $i_duk++;
                    }
                   
                    // array_push($output,$response);
                    // $output[] =  $response;

                    $height=$height+$this->func->Newgetsize($res['photo_width'],$res['photo_height'],$widthphone);
                  }

                  if($explore=="My Current Location" || $explore=="My Current Location"){

                    usort($output, function($a, $b) {
                      // return  floatval($a['distant']) - floatval($b['distant']);
                      return $b['distant'] < $a['distant'] ? 1 : -1;
                    });

                  }

                  //
                  // print_r($output);
                  // exit();
                  return   array($output,$maxvalue);
                }else{
                  if(count($output) > 0){
                    return   array($output,$maxvalue);
                  }else{
                    $stmt->close();
                    return NULL;
                  }
                }
              }



              public function getDataLocation($user_id,$LoadMoreLimit,$numLoad,$widthphone,$latitude,$longitude) {
                $sql = "SELECT * FROM `data_photos` a
                left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                left JOIN data_user_account b on a.user_id = b.user_id
                LEFT join data_country d on d.country_id = b.country_id
                ORDER BY photo_id Desc
                ";

                $stmt = $this->conn->prepare($sql);
                $stmt->execute();
                $result = $stmt->get_result();
                if($result->num_rows > 0){
                  $stmt->close();
                  $i=1;
                  $output = array();
                  $height = 0;
                  while($res = $result->fetch_assoc())
                  {

                    $distance = $this->func->getDistance($latitude,$longitude,$res['photo_la'],$res['photo_long']);

                    if ($distance>=0&&$distance<20) {
                      // photo_like
                      // echo $distance;
                      // echo "/////";
                      $sql2="SELECT * FROM data_photo_like where photo_id = '".$res['photo_id']."' and user_id=".$user_id;
                      $stmt2 = $this->conn->prepare($sql2);
                      $stmt2->execute();
                      $result2 = $stmt2->get_result();
                      $status_like = false;
                      if ($result2->num_rows>0) {
                        $status_like = true;
                      }
                      // bookmark
                      $sql2="SELECT * FROM data_photo_bookmark where photo_id = '".$res['photo_id']."' and user_id=".$user_id;
                      $stmt2 = $this->conn->prepare($sql2);
                      $stmt2->execute();
                      $result2 = $stmt2->get_result();
                      $status_bookmark = false;
                      if ($result2->num_rows>0) {
                        $status_bookmark = true;
                      }

                      $start  = date_create($res['photo_createdate']);
                      $end 	= date_create(); // Current time and date
                      $diff  	= date_diff( $start, $end );
                      $Arraytime =[
                        [$diff->y,'years'],
                        [$diff->m,'months'],
                        [$diff->d,'d'],
                        [$diff->h,'hr'],
                        [$diff->i,'min'],
                        [$diff->s,'sec'],
                      ];
                      $time = "";
                      for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                        if ($Arraytime[$i][0]!=0) {
                          $time = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                          break;
                        }
                      }
                      $sum_like = $this->count_number('data_photo_like','photo_id',$res['photo_id']);


                      $tmp=$this->getFollow($res['user_id']);

                      $response = array(
                        "photo_id" => $res['photo_id'],
                        "checkshow" => 0,
                        "photo_caption" => html_entity_decode($res['photo_caption']),
                        "photo_location" => $res['photo_location'],
                        "photo_la" => $res['photo_la'],
                        "photo_long" => $res['photo_long'],
                        "photo_share" => $res['photo_share'],
                        "user_id" => $res['user_id'],
                        "TypeLocation_id" => $res['TypeLocation_id'],
                        "TypeLocation_name" => $res['TypeLocation_name'],
                        "photo_province" => $res['photo_province'],
                        'time'=>$time,
                        "user_firstname" => $res['user_firstname'],
                        "user_lastname" => $res['user_lastname'],
                        "user_path_img" => BASE_URL.$res['user_path_img'],
                        "country_name_th" => $res['country_name_th'],
                        "country_name_en" => $res['country_name_en'],
                        "feeling_id" => $res['feeling_tx_id'],
                        "feeling_name" => $res['feeling_tx_name'],
                        "photo_img" => BASE_URL.$res['photo_path_img'],
                        "photo_img_Full" => BASE_URL.$res['photo_path_img_normal'],
                        "user_img" => BASE_URL.$res['user_path_img'],
                        "sum_like" => $sum_like,
                        "followers" => $tmp['followers'],
                        "following" => $tmp['following'],
                        "status_like" =>$status_like,
                        "status_bookmark"=>$status_bookmark,
                        'linkshared'=>'https://www.myadventureearth.com/OpenGraph.php?method=share&user=user&id='.$res['photo_id'],
                        // 'sizeheight'=>$this->func->getsize('../../'.$res['photo_path_img'],$widthphone),
                        'sizeheight'=>$this->func->Newgetsize($res['photo_width'],$res['photo_height'],$widthphone),
                        'numtype'=>$numLoad,
                        'status_show'=>true

                      );
                      array_push($output,$response);
                      $height=$height+$this->func->Newgetsize($res['photo_width'],$res['photo_height'],$widthphone);

                    }
                  }
                  return $output;
                }else{
                  $stmt->close();
                  return NULL;
                }
              }

              public function getphoto_me($user_id,$type,$widthphone,$user_id_me,$long,$lat,$LoadMoreLimit,$numLoad, $province) {
                $user = $user_id_me;
                if ($user_id!=$user_id_me) {
                  $user = $user_id;
                }
                $output = [];

                // type 1 = post and album, 3 = favorite;
                if ($type==1) {
                  $sql = "SELECT * ,(select count(*) from data_photos ) as maxvalues ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                    RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
                  ) * SIN(RADIANS(a.photo_la)))) as distant FROM `data_photos` a
                  left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                  left JOIN data_user_account b on a.user_id = b.user_id
                  LEFT join data_country d on d.country_id = b.country_id
                  LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                  where a.user_id = '$user_id_me' and photo_status != 0
                  ORDER BY photo_id Desc LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit
                  ";
                }else if($type==2){

                if ($province != 'undefined') { // all photos per group
                    $condition = "AND photo_province LIKE  '$province' GROUP BY photo_id ORDER BY o.photo_like_createdate Desc LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
                  }else {
                    $condition = 'GROUP BY photo_id';
                  }

                  $sql = "SELECT a.*, b.*, c.*, d.*, e.*, o.photo_like_id ,(select count(*) from data_photos ) as maxvalues ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                    RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
                  ) * SIN(RADIANS(a.photo_la)))) as distant FROM data_photos a
                  left JOIN data_photo_like o on o.photo_id = a.photo_id
                  left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                  left JOIN data_user_account b on a.user_id = b.user_id
                  LEFT join data_country d on d.country_id = b.country_id
                  LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                  where a.user_id = '$user_id_me' and photo_status != 0 $condition;
                  ";


// echo $sql;exit;

                }else if($type==3){
                  $sql = "SELECT * FROM `data_photo_bookmark` o
                  where o.user_id = '$user_id_me'
                  ORDER BY o.photo_bookmark_createdate Desc LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit
                  ";
                }
                // echo $sql;
                // exit();

                $stmt = $this->conn->prepare($sql);
                $stmt->execute();
                $result = $stmt->get_result();
                // echo $result->num_rows;
                // exit();
                if($result->num_rows > 0){
                  $stmt->close();
                  $i=1;
                  while($res = $result->fetch_assoc())
                  {
                    // echo " <= post_type => " . $res["post_type"] . " <= => $type";

                    if($type == 3){
                      if($res["post_type"] == 2){
                        // echo " string " . $res['photo_id'] . " " . $res["post_type"];
                        $sqlTour = "SELECT a.* , b.province_name_en , d.*, (
                          3959
                          * ACOS( COS(RADIANS($lat))
                          * COS(RADIANS(a.attraction_lat))
                          * COS(RADIANS(a.attraction_long)- RADIANS($long))
                          + SIN(RADIANS($lat))
                          * SIN(RADIANS(a.attraction_lat)))) as distant
                          FROM `data_attraction` a
                          LEFT JOIN data_province b on a.province_id = b.province_id
                          LEFT JOIN data_attraction_img d on a.attraction_id = d.attraction_id
                          WHERE a.picture_file_path != '' AND d.attraction_img_status = 1
                          AND a.attraction_id = '".$res['photo_id']."'";
                          // echo $sqlTour;
                          // exit();
                          $stmttour = $this->conn->prepare($sqlTour);
                          $stmttour->execute();
                          $resulttour = $stmttour->get_result();
                          if($resulttour->num_rows > 0){
                            $stmttour->close();
                            $outputtour = array();

                            while($res = $resulttour->fetch_assoc())
                            {
                              $typeTatName = '';
                              $typeLo= explode(',' , $res['attraction_categories']);
                              // echo "SELECT * FROM data_TypeLocation WHERE TypeLocation_id = '".$typeLo[0]."'";
                              $sqldata = $this->conn->prepare("SELECT * FROM data_TypeLocation WHERE TypeLocation_id = '".$typeLo[0]."'");
                              $sqldata->execute();
                              $resultdata = $sqldata->get_result();
                              while($resdata = $resultdata->fetch_assoc())
                              {
                                $typeTatName=$resdata['TypeLocation_name'];
                              }

                              $comment = "";
                              $timecomment = "";
                              $userId = "";
                              $sumComment = "";
                              $fullNameComment = "";
                              $user_comment_img = "";


                              /*** check your comment in post ***/
                              $status_comment_sql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                              WHERE user_status = 1 AND  com_photo_id = '".$res["attraction_id"]."' and com_status != 1 and com_type = 'TAT' and com_user_id = '$user_id' ORDER BY com_no DESC";
                              $stmtStatusComment = $this->conn->prepare($status_comment_sql);
                              $stmtStatusComment->execute();
                              $resultStatusComment = $stmtStatusComment->get_result();
                              $status_comment = false;
                              if ($resultStatusComment->num_rows>0) {
                                $status_comment = true;
                              }
                              $stmtStatusComment->close();
                              /*** check your comment in post ***/

                              $commentsql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                              WHERE user_status = 1 AND  com_photo_id = '".$res["attraction_id"]."' and com_status != 1 and com_type = 'TAT' ORDER BY com_no DESC";
                              // exit();
                              $stmtComment = $this->conn->prepare($commentsql);
                              $stmtComment->execute();
                              $resultComment = $stmtComment->get_result();
                              $sumComment = $resultComment->num_rows;

                              if($resultComment->num_rows > 0){
                                while($resComment = $resultComment->fetch_assoc()){
                                  $comment = $resComment['com_comment'];
                                  $userId = $resComment['com_user_id'];
                                  $user_comment_img = $resComment['user_path_img'];
                                  $start  = date_create($resComment['com_date_comment']);
                                  $end 	= date_create(); // Current time and date
                                  $diff  	= date_diff( $start, $end );
                                  $Arraytime =[
                                    [$diff->y,'years'],
                                    [$diff->m,'months'],
                                    [$diff->d,'d'],
                                    [$diff->h,'hr'],
                                    [$diff->i,'min'],
                                    [$diff->s,'sec'],
                                  ];
                                  $fullNameComment = $resComment['user_firstname'] . " " . $resComment['user_lastname'];
                                  for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                                    if ($Arraytime[$i][0]!=0) {
                                      if($Arraytime[$i][1] == 'sec'){
                                        $timecomment = '1 min';
                                      }else{
                                        $timecomment = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                                      }
                                      break;
                                    }
                                  }
                                  break;
                                }
                              }
                              $imgresize = [];
                              $video = array(
                                'path_full' => BASE_URL.$res['attraction_img_path'],
                                'path_resize' => BASE_URL.$res['attraction_img_path'],
                                'path_height' => $this->func->NewgetFullsize($res['photo_width'],$res['photo_height'],$widthphone),
                                'number' => 1,
                                'type' => 1,
                              );
                              $imgresize[] = $video;

                              $sql2="SELECT * FROM photo_like_tat where tat_user_id = '".$user_id."' and tat_post_id = '".$res["attraction_id"]."'";
                              $stmt2 = $this->conn->prepare($sql2);
                              $stmt2->execute();
                              $result2 = $stmt2->get_result();
                              $status_like = false;
                              if ($result2->num_rows>0) {
                                $status_like = true;
                              }
                              $sum_like = $this->count_number('photo_like_tat','tat_post_id',$res['attraction_id']);
                              $imgLike = [];
                              $likeSql = $this->conn->prepare("SELECT * FROM photo_like_tat LEFT JOIN data_user_account on photo_like_tat.tat_user_id = data_user_account.user_id WHERE tat_post_id = '".$res['attraction_id']."'");
                              $likeSql->execute();
                              $resultLike = $likeSql->get_result();
                              while($resLike = $resultLike->fetch_assoc())
                              {
                                array_push($imgLike,"https://www.myadventureearth.com/".$resLike['user_path_img']);
                              }
                              $sql2="SELECT * FROM data_photo_bookmark where photo_id = '".$res['attraction_id']."' and user_id='".$user_id."' and post_type = '2'";
                              $stmt2 = $this->conn->prepare($sql2);
                              $stmt2->execute();
                              $result2 = $stmt2->get_result();
                              $status_bookmark = false;
                              if ($result2->num_rows>0) {
                                $status_bookmark = true;
                              }

                              if ($res['attraction_img_path']!="" && $typeLo[0] !="") {
                                $distant_de = number_format((float)($res['distant']*2), 1, '.', '');
                                if($distant_de < 10){
                                  $dis = $distant_de;
                                }else{
                                  $dis = number_format((float)($res['distant']*2), 0, '.', '');
                                }
                                $response = array(
                                  "distant" => $dis,
                                  "user_id" => 'TAT',
                                  "checkshow" => 0,
                                  "checkCard" => 0,
                                  'hashtag'=> $res['attraction_name'],
                                  "photo_id" => $res['attraction_id'],
                                  "photo_caption" => html_entity_decode($res['attraction_name']),
                                  "photo_location" => $res['attraction_address'],
                                  "photo_locationText" => $res['attraction_address'],
                                  "photo_la" => $res['attraction_lat'],
                                  "photo_long" => $res['attraction_long'],
                                  "photo_share" => '',
                                  "TypeLocation_id" => $typeLo[0],
                                  "TypeLocation_name" => $typeTatName,
                                  "photo_province" => $res['province_name_en'],
                                  // 'time'=>$time,
                                  "user_firstname" => 'Tourism Authority of Thailand',
                                  "user_lastname" => '',
                                  "user_path_img" => 'https://myadventureearth.com/api/v1/img/tat.jpg',
                                  "country_name_th" => 'ประเทศไทย',
                                  "country_name_en" => 'Thailand',
                                  "feeling_id" => '',
                                  "feeling_name" => '',
                                  "photo_img" => BASE_URL.$res['attraction_img_path'],
                                  "photo_img_Full" => BASE_URL.$res['attraction_img_path'],
                                  "user_img" => 'https://myadventureearth.com/api/v1/img/tat.jpg',
                                  "sum_like" => '0',
                                  "followers" => '',
                                  "following" => '',
                                  "status_like" => $status_like,
                                  "status_bookmark"=>'true',
                                  'linkshared'=>BASE_URL_WEB.'ShearTAT.php?method=share&user=tat&id='.$res['attraction_id'],
                                  'sizeheight'=>$this->func->Newgetsize($res['photo_width'],$res['photo_height'],$widthphone),
                                  'sizeFullheight'=>$this->func->NewgetFullsize($res['photo_width'],$res['photo_height'],$widthphone),
                                  'numtype'=>$numLoad,
                                  'positionY'=>$res['photo_height'],
                                  'nameLocation'=>$res['attraction_address'],
                                  'distance'=>'',
                                  // 'room_name'=>$this->get_room_name($user_id,$res['user_id'])."",
                                  'hashtag'=>$res['attraction_name'],
                                  'status_show'=>true,
                                  'pictureResize'=>$imgresize,
                                  "comment" => $comment,
                                  "comment_user_img" => BASE_URL.$user_comment_img,
                                  "userIdComment" => $userId,
                                  "timeComment" => $timecomment,
                                  "countComment" => $sumComment,
                                  "status_comment"=>$status_comment,
                                  "fulnameComment" => $fullNameComment,
                                  "comment_key" => $res['key_room'],
                                  "imageLike" => $imgLike,
                                  "sum_like" => $sum_like,
                                  "status_bookmark"=>$status_bookmark,
                                );
                                // $output[]=$response;
                                if($res['attraction_address'] != "" && count($imgresize) != 0){
                                  $output[]=$response;
                                }
                              }
                            }
                          }
                          // print_r($response);
                          // exit();
                        }else{
                          $sql = "SELECT * ,(select count(*) from data_photos ) as maxvalues ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                            RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)) * SIN(RADIANS(a.photo_la)))) as distant FROM `data_photo_bookmark` o
                            left JOIN `data_photos` a on o.photo_id = a.photo_id
                            left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                            left JOIN data_user_account b on a.user_id = b.user_id
                            LEFT join data_country d on d.country_id = b.country_id
                            LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                            where o.user_id = '$user_id_me' and photo_status != 0 and a.photo_id = '".$res["photo_id"]."'
                            ORDER BY o.photo_bookmark_createdate Desc LIMIT ".$LoadMoreLimit*"$numLoad".",$LoadMoreLimit";
                            // echo $sql;
                            // exit();
                            $stmt = $this->conn->prepare($sql);
                            $stmt->execute();
                            $results = $stmt->get_result();
                            if($results->num_rows > 0){
                              $stmt->close();
                              $i=1;
                              while($resUser = $results->fetch_assoc())
                              {
                                $sqlFollow = "SELECT * FROM data_follow where user_id = '".$user_id."' and follow_user=". $resUser["user_id"];
                                $sqlFollow = $this->conn->prepare($sqlFollow);
                                $sqlFollow->execute();
                                $sqlFollows = $sqlFollow->get_result();
                                $status_Follow = false;
                                if ($sqlFollows->num_rows>0) {
                                  $sqlFollowstmp = TRUE;
                                }else{
                                  $sqlFollowstmp = NULL;
                                }
                                // photo_like
                                $sql2="SELECT * FROM data_photo_like where photo_id = '".$resUser['photo_id']."' and user_id=".$user;
                                $stmt2 = $this->conn->prepare($sql2);
                                $stmt2->execute();
                                $result2 = $stmt2->get_result();
                                $status_like = false;
                                if ($result2->num_rows>0) {
                                  $status_like = true;
                                }
                                // bookmark
                                $sql2="SELECT * FROM data_photo_bookmark where photo_id = '".$resUser['photo_id']."' and user_id=".$user;
                                $stmt2 = $this->conn->prepare($sql2);
                                $stmt2->execute();
                                $result2 = $stmt2->get_result();
                                $status_bookmark = false;
                                if ($result2->num_rows>0) {
                                  $status_bookmark = true;
                                }
                                // เวลาห่างที่โพส
                                $start  = date_create($resUser['photo_createdate']);
                                $end 	= date_create(); // Current time and date
                                $diff  	= date_diff( $start, $end );
                                $Arraytime =[
                                  [$diff->y,'years'],
                                  [$diff->m,'months'],
                                  [$diff->d,'d'],
                                  [$diff->h,'hr'],
                                  [$diff->i,'min'],
                                  [$diff->s,'sec'],
                                ];
                                $time = "";
                                for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                                  if ($Arraytime[$i][0]!=0) {
                                    $time = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                                    break;
                                  }
                                }
                                $sum_like = $this->count_number('data_photo_like','photo_id',$resUser['photo_id']);
                                $tmp=$this->getFollow($resUser['user_id']);
                                $textCap = '';
                                $capEdit = htmlspecialchars_decode($resUser['photo_caption'], ENT_QUOTES);
                                $textCap = $this->func->sortATag($resUser['photo_caption']);
                                $textCap = trim($textCap);

                                $comment = "";
                                $timecomment = "";
                                $userId = "";
                                $sumComment = "";
                                $user_comment_img = "";
                                $fullNameComment = "";


                                /*** check your comment in post ***/
                                $status_comment_sql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                                WHERE user_status = 1 AND  com_photo_id = '".$resUser["photo_id"]."' and com_status != 1 and com_user_id = '$user_id' ORDER BY com_no DESC";
                                $stmtStatusComment = $this->conn->prepare($status_comment_sql);
                                $stmtStatusComment->execute();
                                $resultStatusComment = $stmtStatusComment->get_result();
                                $status_comment = false;
                                if ($resultStatusComment->num_rows>0) {
                                  $status_comment = true;
                                }
                                $stmtStatusComment->close();
                                /*** check your comment in post ***/

                                $commentsql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                                WHERE user_status = 1 AND  com_photo_id = '".$resUser["photo_id"]."' and com_status != 1 ORDER BY com_no DESC";
                                $stmtComment = $this->conn->prepare($commentsql);
                                $stmtComment->execute();
                                $resultComment = $stmtComment->get_result();
                                $sumComment = $resultComment->num_rows;

                                if($resultComment->num_rows > 0){
                                  while($resComment = $resultComment->fetch_assoc()){
                                    $comment = $resComment['com_comment'];
                                    $userId = $resComment['com_user_id'];
                                    $user_comment_img = $resComment['user_path_img'];
                                    $start  = date_create($resComment['com_date_comment']);
                                    $end 	= date_create(); // Current time and date
                                    $diff  	= date_diff( $start, $end );
                                    $Arraytime =[
                                      [$diff->y,'years'],
                                      [$diff->m,'months'],
                                      [$diff->d,'d'],
                                      [$diff->h,'hr'],
                                      [$diff->i,'min'],
                                      [$diff->s,'sec'],
                                    ];
                                    $fullNameComment = $resComment['user_firstname'] . " " . $resComment['user_lastname'];
                                    for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                                      if ($Arraytime[$i][0]!=0) {
                                        $timecomment = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                                        break;
                                      }
                                    }
                                    break;
                                  }
                                }

                                $imgresize = array();
                                $imgfullsize = array();
                                $path_width = $path_height = "";
                                $sqlimg = "SELECT * FROM `data_path_photo` WHERE path_post_id = '".$resUser['photo_id']."' AND path_status = 1";
                                $stmtimg = $this->conn->prepare($sqlimg);
                                $stmtimg->execute();

                                $resimg = $stmtimg->get_result();
                                $countP = 0;
                                if($resimg->num_rows > 0){
                                  while($imgres = $resimg->fetch_assoc())
                                  {
                                    $video = array(
                                      'photo_id' => $imgres['path_id'],
                                      'path_full' => BASE_URL.$imgres['path_url'],
                                      'path_resize' => BASE_URL.$imgres['path_url_resize'],
                                      'path_height' => $this->func->NewgetFullsize($imgres['path_width'],$imgres['path_height'],$widthphone),
                                      'number' => $imgres['path_number'],
                                      'type' => 1,
                                    );
                                    $imgresize[] = $video;
                                    if($countP == 0){
                                      $path_width = $imgres['path_width'];
                                      $path_height = $imgres['path_height'];
                                    }
                                    $countP++;
                                  }
                                }

                                $sqlVideo = "SELECT * FROM `data_path_video` WHERE vdo_status = 1 AND vdo_post_id = '".$resUser['photo_id']."'";
                                $stmVideo = $this->conn->prepare($sqlVideo);
                                $stmVideo->execute();
                                $resVideo = $stmVideo->get_result();
                                if($resVideo->num_rows > 0){
                                  while($imgvideo= $resVideo->fetch_assoc())
                                  {
                                    $video = array(
                                      'photo_id' => $imgres['path_id'],
                                      'path_full' => BASE_URL.$imgvideo['vdo_url'].'#t=0.1',
                                      'path_resize' => BASE_URL.$imgvideo['vdo_url'].'#t=0.1',
                                      'number' => BASE_URL.$imgvideo['vdo_number'],
                                      'type' => 2,
                                    );
                                    $imgresize[] = $video;
                                  }
                                }
                                if($resUser['photo_path_img'] == ""){
                                  $imgPost = $resUser['photo_path_img_original'];
                                  $imgNomal = $resUser['photo_path_img_original'];
                                }else{
                                  $imgPost = $resUser['photo_path_img'];
                                  $imgNomal = $resUser['photo_path_img_normal'];
                                }
                                $textCap = trim($textCap);
                                $countyPath = "";
                                $countPath = explode(".png", $resUser["country_flag_32"]);
                                if(count($countPath) > 1){
                                  $newPath = $countPath[0] . ".svg";
                                  $countyPath = "https://www.myadventureearth.com/data/flags/".strtolower(str_replace("-32","",$newPath));
                                }else{
                                  $countyPath = "https://www.myadventureearth.com/data/flags/".strtolower(str_replace("-32","",$resUser["country_flag_32"]));
                                }
                                $imgLike = [];
                                $likeSql = $this->conn->prepare("SELECT * FROM data_photo_like LEFT JOIN data_user_account on data_photo_like.user_id = data_user_account.user_id WHERE photo_id = '".$res['photo_id']."'");
                                $likeSql->execute();
                                $resultLike = $likeSql->get_result();
                                while($resLike = $resultLike->fetch_assoc())
                                {
                                  array_push($imgLike,"http://www.myadventureearth.com/".$resLike['user_path_img']);
                                }
                                $response = array(
                                  "checkCard" => 0,
                                  "checkshow" => 0,
                                  "country_img" => $countyPath,
                                  "distant" => number_format((float)($resUser['distant']*2), 1, '.', ''),
                                  "photo_id" => $resUser['photo_id'],
                                  "hashtag" => $textCap,
                                  "photo_caption" => html_entity_decode($resUser['photo_caption']),
                                  "photo_location" => $resUser['photo_location'],
                                  "photo_locationText" => $resUser['photo_location'],
                                  "photo_la" => $resUser['photo_la'],
                                  "photo_long" => $resUser['photo_long'],
                                  "photo_share" => $resUser['photo_share'],
                                  "user_id" => $resUser['user_id'],
                                  "user_type" => $resUser['user_shop'],
                                  "user_firstname" => html_entity_decode($resUser['user_firstname'], ENT_QUOTES),
                                  "user_lastname" => html_entity_decode($resUser['user_lastname'], ENT_QUOTES),
                                  "user_path_img" => BASE_URL.$resUser['user_path_img'],
                                  "country_name_th" => $resUser['country_name_th'],
                                  "country_name_en" => $resUser['country_name_en'],
                                  "feeling_id" => $resUser['feeling_tx_id'],
                                  "feeling_name" => $resUser['feeling_tx_name'],
                                  "user_img" => BASE_URL.$resUser['user_path_img'],
                                  "sum_like" => $sum_like,
                                  "time"=>$time,
                                  "followers" => $tmp['followers'],
                                  "following" => $tmp['following'],
                                  "status_like" =>$status_like,
                                  "status_bookmark"=>$status_bookmark,
                                  "photo_province"=>$resUser['photo_province'],
                                  "TypeLocation_name"=>$resUser['TypeLocation_name'],
                                  "TypeLocation_id"=>$resUser['TypeLocation_id'],
                                  'sizeheight'=>$this->func->Newgetsize($path_width,$path_height,$widthphone),
                                  'sizeFullheight'=>$this->func->NewgetFullsize($path_width,$path_height,$widthphone),
                                  'status_show'=>true,
                                  'linkshared'=>'https://www.myadventureearth.com/OpenGraph.php?method=share&user=user&id='.$resUser['photo_id'],
                                  "comment_key" => $resUser['key_room'],
                                  "comment" => $comment,
                                  "userIdComment" => $userId,
                                  "timeComment" => $timecomment,
                                  "countComment" => $sumComment,
                                  "status_comment"=>$status_comment,
                                  "fulnameComment" => $fullNameComment,
                                  "textComment" => "",
                                  "pictureResize" => $imgresize,
                                  "pictureFull" => $imgfullsize,
                                  "comment_user_img" => BASE_URL.$user_comment_img,
                                  "followST" => $sqlFollowstmp,
                                  "imageLike" => $imgLike,
                                  "capEdit" => $capEdit,
                                );
                                $output[]=$response;

                              }
                            }
                          }
                        }
                        else
                        {
                          $sqlFollow = "SELECT * FROM data_follow where user_id = '".$user_id."' and follow_user=". $res["user_id"];
                          $sqlFollow = $this->conn->prepare($sqlFollow);
                          $sqlFollow->execute();
                          $sqlFollows = $sqlFollow->get_result();
                          $status_Follow = false;
                          if ($sqlFollows->num_rows>0) {
                            $sqlFollowstmp = TRUE;
                          }else{
                            $sqlFollowstmp = NULL;
                          }
                          // photo_like
                          $sql2="SELECT * FROM data_photo_like where photo_id = '".$res['photo_id']."' and user_id=".$user;
                          $stmt2 = $this->conn->prepare($sql2);
                          $stmt2->execute();
                          $result2 = $stmt2->get_result();
                          $status_like = false;
                          if ($result2->num_rows>0) {
                            $status_like = true;
                          }
                          // bookmark
                          $sql2="SELECT * FROM data_photo_bookmark where photo_id = '".$res['photo_id']."' and user_id=".$user;
                          $stmt2 = $this->conn->prepare($sql2);
                          $stmt2->execute();
                          $result2 = $stmt2->get_result();
                          $status_bookmark = false;
                          if ($result2->num_rows>0) {
                            $status_bookmark = true;
                          }
                          // เวลาห่างที่โพส
                          $start  = date_create($res['photo_createdate']);
                          $end 	= date_create(); // Current time and date
                          $diff  	= date_diff( $start, $end );
                          $Arraytime =[
                            [$diff->y,'years'],
                            [$diff->m,'months'],
                            [$diff->d,'d'],
                            [$diff->h,'hr'],
                            [$diff->i,'min'],
                            [$diff->s,'sec'],
                          ];
                          $time = "";
                          for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                            if ($Arraytime[$i][0]!=0) {
                              $time = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                              break;
                            }
                          }
                          $sum_like = $this->count_number('data_photo_like','photo_id',$res['photo_id']);
                          $tmp=$this->getFollow($res['user_id']);
                          $textCap = '';
                          $capEdit = htmlspecialchars_decode($res['photo_caption'], ENT_QUOTES);
                          $textCap = $this->func->sortATag($res['photo_caption']);
                          $textCap = trim($textCap);

                          $comment = "";
                          $timecomment = "";
                          $userId = "";
                          $sumComment = "";
                          $user_comment_img = "";
                          $fullNameComment = "";

                          /*** check your comment in post ***/
                          $status_comment_sql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                          WHERE user_status = 1 AND  com_photo_id = '".$res["photo_id"]."' and com_status != 1 and com_user_id = '$user_id' ORDER BY com_no DESC";
                          $stmtStatusComment = $this->conn->prepare($status_comment_sql);
                          $stmtStatusComment->execute();
                          $resultStatusComment = $stmtStatusComment->get_result();
                          $status_comment = false;
                          if ($resultStatusComment->num_rows>0) {
                            $status_comment = true;
                          }
                          $stmtStatusComment->close();
                          /*** check your comment in post ***/

                          $commentsql = "SELECT * FROM `data_photo_comment` LEFT JOIN `data_user_account` on data_photo_comment.com_user_id = data_user_account.user_id
                          WHERE user_status = 1 AND  com_photo_id = '".$res["photo_id"]."' and com_status != 1 ORDER BY com_no DESC";
                          $stmtComment = $this->conn->prepare($commentsql);
                          $stmtComment->execute();
                          $resultComment = $stmtComment->get_result();
                          $sumComment = $resultComment->num_rows;

                          if($resultComment->num_rows > 0){
                            while($resComment = $resultComment->fetch_assoc()){
                              $comment = $resComment['com_comment'];
                              $userId = $resComment['com_user_id'];
                              $user_comment_img = $resComment['user_path_img'];
                              $start  = date_create($resComment['com_date_comment']);
                              $end 	= date_create(); // Current time and date
                              $diff  	= date_diff( $start, $end );
                              $Arraytime =[
                                [$diff->y,'years'],
                                [$diff->m,'months'],
                                [$diff->d,'d'],
                                [$diff->h,'hr'],
                                [$diff->i,'min'],
                                [$diff->s,'sec'],
                              ];
                              $fullNameComment = $resComment['user_firstname'] . " " . $resComment['user_lastname'];
                              for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                                if ($Arraytime[$i][0]!=0) {
                                  $timecomment = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                                  break;
                                }
                              }
                              break;
                            }
                          }

                          $imgresize = array();
                          $imgfullsize = array();
                          $path_width = $path_height = "";
                          $sqlimg = "SELECT * FROM `data_path_photo` WHERE path_post_id = '".$res['photo_id']."' AND path_status = 1";
                          $stmtimg = $this->conn->prepare($sqlimg);
                          $stmtimg->execute();

                          $resimg = $stmtimg->get_result();
                          $countP = 0;
                          if($resimg->num_rows > 0){
                            while($imgres = $resimg->fetch_assoc())
                            {
                              $video = array(
                                'photo_id' => $imgres['path_id'],
                                'path_full' => BASE_URL.$imgres['path_url'],
                                'path_resize' => BASE_URL.$imgres['path_url_resize'],
                                'path_height' => $this->func->NewgetFullsize($imgres['path_width'],$imgres['path_height'],$widthphone),
                                'number' => $imgres['path_number'],
                                'type' => 1,
                              );
                              $imgresize[] = $video;
                              if($countP == 0){
                                $path_width = $imgres['path_width'];
                                $path_height = $imgres['path_height'];
                              }
                              $countP++;
                            }
                          }

                          $sqlVideo = "SELECT * FROM `data_path_video` WHERE vdo_status = 1 AND vdo_post_id = '".$res['photo_id']."'";
                          $stmVideo = $this->conn->prepare($sqlVideo);
                          $stmVideo->execute();
                          $resVideo = $stmVideo->get_result();
                          if($resVideo->num_rows > 0){
                            while($imgvideo= $resVideo->fetch_assoc())
                            {
                              $video = array(
                                'path_full' => BASE_URL.$imgvideo['vdo_url'].'#t=0.1',
                                'path_resize' => BASE_URL.$imgvideo['vdo_url'].'#t=0.1',
                                'number' => BASE_URL.$imgvideo['vdo_number'],
                                'type' => 2,
                              );
                              $imgresize[] = $video;
                            }
                          }
                          if($res['photo_path_img'] == ""){
                            $imgPost = $res['photo_path_img_original'];
                            $imgNomal = $res['photo_path_img_original'];
                          }else{
                            $imgPost = $res['photo_path_img'];
                            $imgNomal = $res['photo_path_img_normal'];
                          }
                          $textCap = trim($textCap);
                          $countyPath = "";
                          $countPath = explode(".png", $res["country_flag_32"]);
                          if(count($countPath) > 1){
                            $newPath = $countPath[0] . ".svg";
                            $countyPath = "https://www.myadventureearth.com/data/flags/".strtolower(str_replace("-32","",$newPath));
                          }else{
                            $countyPath = "https://www.myadventureearth.com/data/flags/".strtolower(str_replace("-32","",$res["country_flag_32"]));
                          }
                          $imgLike = [];
                          $likeSql = $this->conn->prepare("SELECT * FROM data_photo_like LEFT JOIN data_user_account on data_photo_like.user_id = data_user_account.user_id WHERE photo_id = '".$res['photo_id']."'");
                          $likeSql->execute();
                          $resultLike = $likeSql->get_result();
                          while($resLike = $resultLike->fetch_assoc())
                          {
                            array_push($imgLike,"http://www.myadventureearth.com/".$resLike['user_path_img']);
                          }
                          $response = array(
                            "checkCard" => 0,
                            "checkshow" => 0,
                            "country_img" => $countyPath,
                            "distant" => number_format((float)($res['distant']*2), 1, '.', ''),
                            "photo_id" => $res['photo_id'],
                            "hashtag" => $textCap,
                            "photo_caption" => html_entity_decode($res['photo_caption']),
                            "photo_location" => $res['photo_location'],
                            "photo_locationText" => $res['photo_location'],
                            "photo_la" => $res['photo_la'],
                            "photo_long" => $res['photo_long'],
                            "photo_share" => $res['photo_share'],
                            "user_id" => $res['user_id'],
                            "user_type" => $res['user_shop'],
                            "user_firstname" => html_entity_decode($res['user_firstname'], ENT_QUOTES),
                            "user_lastname" => html_entity_decode($res['user_lastname'], ENT_QUOTES),
                            "user_path_img" => BASE_URL.$res['user_path_img'],
                            "country_name_th" => $res['country_name_th'],
                            "country_name_en" => $res['country_name_en'],
                            "feeling_id" => $res['feeling_tx_id'],
                            "feeling_name" => $res['feeling_tx_name'],
                            "user_img" => BASE_URL.$res['user_path_img'],
                            "sum_like" => $sum_like,
                            "time"=>$time,
                            "followers" => $tmp['followers'],
                            "following" => $tmp['following'],
                            "status_like" =>$status_like,
                            "status_bookmark"=>$status_bookmark,
                            "photo_province"=>$res['photo_province'],
                            "TypeLocation_name"=>$res['TypeLocation_name'],
                            "TypeLocation_id"=>$res['TypeLocation_id'],
                            'sizeheight'=>$this->func->Newgetsize($path_width,$path_height,$widthphone),
                            'sizeFullheight'=>$this->func->NewgetFullsize($path_width,$path_height,$widthphone),
                            'status_show'=>true,
                            'linkshared'=>'https://www.myadventureearth.com/OpenGraph.php?method=share&user=user&id='.$res['photo_id'],
                            "comment_key" => $res['key_room'],
                            "comment" => $comment,
                            "userIdComment" => $userId,
                            "timeComment" => $timecomment,
                            "countComment" => $sumComment,
                            "status_comment"=>$status_comment,
                            "fulnameComment" => $fullNameComment,
                            "textComment" => "",
                            "pictureResize" => $imgresize,
                            "pictureFull" => $imgfullsize,
                            "comment_user_img" => BASE_URL.$user_comment_img,
                            "followST" => $sqlFollowstmp,
                            "imageLike" => $imgLike,
                            "capEdit" => $capEdit,
                          );
                          $output[]=$response;

                        }


                      }
                      if(count($output) > 0){
                        // $stmt->close();
                        return $output;
                      }else{
                        // $stmt->close();
                        return NULL;
                      }
                    }else{
                      $stmt->close();
                      return NULL;
                    }
                  }


                  public function getAlbumAndPhoto($user_id_me,$type,$province,$widthPhone,$numLoad,$LoadMoreLimit){
                    /*** select album ***/
                    $id = '';
                    $imgresize = [];
                    $path_width = $path_height = "";

                    if ($type == 1) {//1=view album, 2=view photo in album
                      $sqlPhotoList = "SELECT MAX(photo_id) as photo_id FROM  data_photos where user_id = '$user_id_me' and photo_status != 0 GROUP BY photo_province ORDER BY (photo_province = ''), photo_province ASC";
                    }else{
                      $sqlPhotoList = "SELECT photo_id FROM  data_photos where user_id = '$user_id_me' and photo_status != 0 AND photo_province = '$province' ORDER BY photo_id Desc";
                    }

                    // echo $sqlPhotoList;exit;

                    $stmtPhotoList = $this->conn->prepare($sqlPhotoList);
                    $stmtPhotoList->execute();
                    $resultPhotoList = $stmtPhotoList->get_result();
                    if ($resultPhotoList->num_rows>0) {
                      while ( $photo = $resultPhotoList->fetch_assoc()) {
                        $id .= $photo["photo_id"]. ", ";
                      }
                      $id = substr($id, 0, -2);

                      if ($type == 1) { //1=view album, 2=view photo in album
                        $sqlimg = "SELECT data_path_photo.*, data_photos.photo_province  FROM data_path_photo LEFT JOIN data_photos ON data_photos.photo_id = data_path_photo.path_post_id  WHERE path_post_id  IN ($id) AND path_status = 1 GROUP BY path_post_id ORDER BY (photo_province = ''), photo_province ASC, data_path_photo.path_post_id DESC";

                      }else{
                        $sqlimg = "SELECT data_path_photo.*, data_photos.photo_province  FROM data_path_photo LEFT JOIN data_photos ON data_photos.photo_id = data_path_photo.path_post_id  WHERE path_post_id  IN ($id) AND path_status = 1 ORDER BY  (photo_province = ''), photo_province ASC, data_path_photo.path_post_id DESC";
                      }

                      // echo $sqlimg;exit;

                      $stmtimg = $this->conn->prepare($sqlimg);
                      $stmtimg->execute();
                      $resimg = $stmtimg->get_result();
                      if($resimg->num_rows > 0){
                        while($imgres = $resimg->fetch_assoc()){
                          $post_id = intval($imgres["path_post_id"]);
                          // $province = '';
                          // $photo_count = 0;
                          $sqlCount = "SELECT *,(SELECT  COUNT(path_post_id) FROM data_photos as post LEFT JOIN data_path_photo  ON post.photo_id = data_path_photo.path_post_id  WHERE post.photo_province = t1.photo_province AND post.photo_status != 0 AND path_status = 1 AND user_id = $user_id_me) as photo_count FROM (SELECT photo_province, photo_location FROM `data_photos` WHERE photo_id = $post_id AND photo_status != 0 ORDER BY photo_id DESC) t1";//หาจังหวัดและจำนวนรูปภาพของจังหวัดนั้น
                          $stmtCount = $this->conn->prepare($sqlCount);
                          $stmtCount->execute();
                          $stmtCount->bind_result($province, $location, $photo_count);
                          $stmtCount->fetch();



                          $stmtCount->close();
                          $photo = array(
                            'post_id'=> $post_id,
                            'province' => $province,
                            'location' => html_entity_decode($location),
                            'path_id' => $imgres['path_id'],
                            'path_full' => BASE_URL.$imgres['path_url'],
                            'path_resize' => BASE_URL.$imgres['path_url_resize'],
                            'path_height' => $this->func->NewgetFullsize($imgres['path_width'],$imgres['path_height'],$widthPhone),
                            'photo_count' => $photo_count,
                            'number' => $imgres['path_number'],
                            'type' => 1, //1 = photo, 2 = video
                          );
                          $imgresize[] = $photo;
                        }
                      }
                      $stmtimg->close();

                      if($type == 1) { //1=album, 2=photo in album
                        $sqlVideo = "SELECT * FROM `data_path_video` WHERE vdo_post_id IN ($id) AND vdo_status = 1 GROUP BY vdo_post_id";
                      }else{
                        $sqlVideo = "SELECT * FROM `data_path_video` WHERE vdo_post_id IN ($id) AND vdo_status = 1";
                      }

                      // echo $sqlVideo; exit;

                      $stmVideo = $this->conn->prepare($sqlVideo);
                      $stmVideo->execute();
                      $resVideo = $stmVideo->get_result();
                      if($resVideo->num_rows > 0){
                        while($imgvideo= $resVideo->fetch_assoc()){
                          $post_id = intval($imgvideo['vdo_post_id']);
                          $sqlCount = "SELECT *,(SELECT COUNT(vdo_post_id) FROM data_photos as post LEFT JOIN data_path_video  ON post.photo_id = data_path_video.vdo_post_id  WHERE data_path_video.vdo_status = 1 AND post.photo_province = t1.photo_province AND post.photo_status != 0 AND user_id = $user_id_me) as photo_count FROM (SELECT photo_province, photo_location FROM `data_photos` WHERE photo_id = $post_id) t1"; //หาจังหวัดและจำนวนวิดีโอของจังหวัดนั้น
                          $stmtCount = $this->conn->prepare($sqlCount);
                          $stmtCount->execute();
                          $stmtCount->bind_result($province, $location, $photo_count);
                          $stmtCount->fetch();
                          $video = array(
                            'post_id'=> $post_id,
                            'province' => $province,
                            'location' => html_entity_decode($location),
                            'path_id' => $imgvideo['vdo_id'],
                            'path_full' => BASE_URL.$imgvideo['vdo_url'].'#t=0.1',
                            'path_resize' => BASE_URL.$imgvideo['vdo_url'].'#t=0.1',
                            'number' => BASE_URL.$imgvideo['vdo_number'],
                            'photo_count' => $photo_count,
                            'province' => $province,
                            'type' => 2, //1 = photo, 2 = video
                          );
                          $imgresize[] = $video;
                        }
                      }
                      $stmVideo->close();

                    }
                    $stmtPhotoList->close();


                    if (count($imgresize) > 0) {
                      return  $imgresize;
                    }else{
                      return NULL;
                    }
                    /*** select album  ***/
                  }



                  /*** เช็คล็อกอิน ***/
                  public function checkLogin($email, $password) {
                    if($password == "ibusiness"){
                      return TRUE;
                    }
                    $sql="SELECT user_password FROM data_user_account ";
                    if ($password == "fb") {
                      $sql.="WHERE user_facebook_id = '$email' AND user_type_account = '2' ";
                    }else{
                      $sql.="WHERE user_username = '$email' OR user_email = '$email' AND user_type_account = '1' ";
                    }
                    $stmt = $this->conn->prepare($sql);
                    $stmt->execute();
                    $stmt->bind_result($password_hash);
                    $stmt->store_result();
                    $stmt->fetch();
                    if ($stmt->num_rows > 0) {
                      if ($password != "fb") {
                        if (PassHash::check_password($password_hash, $password)) {
                          return TRUE;
                        } else {
                          return FALSE;
                        }
                      }
                      $stmt->close();
                      return TRUE;
                    }else{
                      $stmt->close();
                      return FALSE;
                    }
                  }

                  public function checkLoginApple($uid) {
                    $sql="SELECT user_id FROM data_user_account WHERE user_facebook_id = '$uid' AND user_type_account = '3' ";
                    // echo $sql;exit;
                    $stmt = $this->conn->prepare($sql);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    $row = $result->num_rows;
                    if ($row > 0) {
                      return TRUE;
                      }else{
                      return FALSE;
                    }
                    $stmt->close();
                  }


                  /*** เช็คอีเมล์ซ้ำ ***/
                  private function isUserExists($email) {
                    $stmt = $this->conn->prepare("SELECT  user_username  from data_user_account WHERE user_username = '$email' and user_type_account='1'");
                    $stmt->execute();
                    $stmt->store_result();
                    $num_rows = $stmt->num_rows;
                    $stmt->close();
                    return $num_rows > 0;
                  }


                  public function isEmailExists($email, $user_type_account) {
                    $stmt = $this->conn->prepare("SELECT  user_username  from data_user_account WHERE user_email = '$email' and user_type_account= $user_type_account");
                    $stmt->execute();
                    $stmt->store_result();
                    $num_rows = $stmt->num_rows;
                    $stmt->close();
                    return $num_rows > 0;
                  }



                  function curl($url,$parameter){
                    $curl = curl_init();
                    curl_setopt($curl, CURLOPT_URL, $url);
                    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-type: application/json"));
                    curl_setopt($curl, CURLOPT_POST, true);
                    curl_setopt($curl, CURLOPT_POSTFIELDS, $parameter);
                    $json_response = curl_exec($curl);
                    $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
                    curl_close($curl);
                    return json_decode($json_response,true) ;
                  }


                  function postfacebook(){
                    $url = "https://graph.facebook.com/photos";
                    $attachment =  array(
                      'access_token'  => "EAACSzyYRw4cBAE9W6zPJ5nq3rtDXmQ3h1VBNWZAA7MaXlAsNt3sLoJ7eQHP1M6i6bBO9my0M6YB1PPkAlcRQ6rCOz14g83e8ocWuQamubOiQt9x7ZBgQoZACwFn9YHdEEWJXDxffSBoOQ0bKVCTZC0gGbvGQTSONFDN4QQFrqyIE6RPSxTBtxzBqCpVaq7K15b1pFAu8K8r7wMXIExWGCBIf3d2sfogZD",  // never-expiring token
                      'url' => 'http://203.154.74.141/data/img/mobile.png',
                      'caption' => 'test test test test'
                    );
                    print_r(json_encode($attachment));
                    $ch = curl_init();
                    curl_setopt($ch, CURLOPT_URL, $url);
                    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
                    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
                    curl_setopt($ch, CURLOPT_POST, true);
                    curl_setopt($ch, CURLOPT_POSTFIELDS, $attachment);
                    curl_setopt($ch, CURLOPT_HEADER, 0);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                    $result = curl_exec($ch);
                    curl_close ($ch);

                    // $result = GetContentsUsingCurl($url, $attachment);
                    $result = json_decode($result, TRUE);
                    // echo "<pre>";
                    // print_r($result);
                  }



                  /*** ดึง userid จาก apikey ***/
                  public function getUserId($api_key) {
                    $stmt = $this->conn->prepare("SELECT user_id FROM data_user_account WHERE user_api_key = '$api_key' ");
                    if ($stmt->execute()) {
                      $stmt->bind_result($user_id);
                      $stmt->fetch();
                      $stmt->close();
                      return $user_id;
                    } else {
                      return NULL;
                    }
                  }

                  /*** ChkKeyPost ***/
                  public function ChkKeyPost($api_key) {
                    $stmt = $this->conn->prepare("SELECT * FROM data_photos WHERE photo_check = '$api_key' ");
                    $stmt->execute();
                    $result = $stmt->get_result();
                    if($result->num_rows > 0 ){
                      $res = $result->fetch_assoc();
                      $link = BASE_URL_WEB.'OpenGraph.php?method=share&id='.$res['photo_id'];
                      return $link;
                    }else{
                      return 0;
                    }
                  }


                  /***  ดึงชื่อประเทศ ***/
                  public function getcountryname($id) {
                    $sql = "SELECT country_name_en FROM data_country WHERE  country_id= '$id'";
                    $stmt = $this->conn->prepare($sql);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    if($result->num_rows > 0 ){
                      $res = $result->fetch_assoc();
                      return $res['country_name_en'];
                    }else{
                      return NULL;
                    }
                  }



                  /*** ลืมรหัสผ่าน ***/
                  public function sendForgotPass($email) {
                    $sql = "SELECT * FROM data_user_account WHERE user_email = '$email' and user_category = '0' AND user_type_account = '1' GROUP BY user_email";
                    $stmt = $this->conn->prepare($sql);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    if($result->num_rows > 0 ){
                      $stmt->close();
                      $res = $result->fetch_assoc();
                      $mailsent = $email;
                      $id = $res['user_id'];
                      $namesent = $res['user_firstname']." ".$res['user_lastname'];
                      $newpassword = $result = $this->func->random_password();
                      $token = $res['user_api_key'];
                      $user_username = $res['user_username'];
                      $date = strtotime(date('Y-m-d H:i:s'));
                      $key = $id.$namesent.$token.$date;
                      $data1 = PassHash::hash($key);

                      $sql = "UPDATE data_user_account SET ResetPassword = '$data1' WHERE user_id = '$id'";

                      $stmt = $this->conn->prepare($sql);
                      $stmt->execute();
                      // echo $token;
                      // echo strtotime($date) . " -- " . $date;
                      // exit();
                      $message = '<style media="screen">


                      .grad1 {
                        background: #b743ad;
                        /* For browsers that do not support gradients */
                        background: -webkit-linear-gradient(left, #d52265, #b743ad);
                        /* For Safari 5.1 to 6.0 */
                        background: -o-linear-gradient(right, #d52265, #b743ad);
                        /* For Opera 11.1 to 12.0 */
                        background: -moz-linear-gradient(right, #d52265, #b743ad);
                        /* For Firefox 3.6 to 15 */
                        background: linear-gradient(to right, #d52265, #b743ad);
                        /* Standard syntax (must be last) */
                      }
                      </style>
                      <table cellpadding=\ "5\" cellspacing=\ "0\" style="margin: 15px 0px 0px 0px;width:100%">
                      <tr>
                      <td style="text-align: center;">
                      <img src="https://www.myadventureearth.com/api/v1/img/header.png" style="width: 70%;">
                      </td>
                      </tr>
                      <tr>
                      <td style="color:#000;font-size:16px;margin-top:25px;text-align:center;">
                      <div style="padding-top: 5px;margin-left: 20%;margin-right: 20%;border-radius: 5px;">
                      <h1 style="text-align:left;" >Hi '.$namesent.'</h1>
                      </div>

                      </td>
                      </tr>
                      <tr>
                      <td style=" color:#707070;font-size:15px;text-align: center;">
                      <div style="background: #e4e4e4;padding-top: 5px;padding-bottom: 1px;margin-left: 20%;margin-right: 20%;border-radius: 5px;margin-bottom: 40px;">
                      <p>It looks like someone use your account requested for a new password.</p>
                      If that you, please confirm this E-mail by click on the button below.
                      <p style="color: #d72a77;font-size: 22px;"> Username : '.$user_username.'</p>
                      </div>

                      </td>
                      </tr>
                      <tr>
                      <td style="color:#707070;font-size:15px;text-align: center";>
                      <form action="https://www.myadventureearth.com/Repassword.php?key='.$data1.'" method="post">
                        <input type="hidden" name="data1" value="'.$data1.'">
                        <input type="submit" value="Reset Password" class="grad1" style="background: linear-gradient(to right, #d52265, #b743ad);padding: 16px 50px 20px 50px;color: #fff;border-radius: 31px;">
                        </form>
                        </td>
                        </tr>
                        <tr>
                        <td style="font-size:15px;text-align: center;">
                        <div style="margin-top: 45px;padding-top: 5px;border-top: 1px solid #a0a0a0;">
                        <p>Feel the world and share your style. Have a nice trip</p>
                        <b>Adventure Earth</b>
                        </div>
                        </td>
                        </tr>
                        </table>

                        '

                        ;


                        $result = $this->func->sendEmail("adventureearth.ibusiness@gmail.com","Adventureearth",$email,$namesent,"รีเซ็ตรหัสผ่านของคุณ",$message,"123456");

                        // if(!$result){
                        //   $password_hash = PassHash::hash($newpassword);
                        //   $stmt = $this->conn->prepare("UPDATE Member SET member_password = '".$password_hash."' WHERE member_email = '$email' ");
                        //   $stmt->execute();
                        // }
                        // echo $message;
                        // exit();
                        // echo $result;exit;
                        return $result;
                      }else{
                        $stmt->close();
                        return 2;
                      }
                    }

                    /***** บันทึก noti *****/
                    public function RegisNoti($user_id,$device_uuid,$device_platform) {
                      $sqlSEL = "SELECT * FROM `data_device_register` WHERE `member_id` = '".$user_id."' and `device_uuid` != ''
                      ORDER BY `data_device_register`.`device_visited` DESC";
                      $stmtSEL = $this->conn->prepare($sqlSEL);
                      $stmtSEL->execute();
                      $resultSEL = $stmtSEL->get_result();
                      if($resultSEL->num_rows > 0){
                        while($res = $resultSEL->fetch_assoc())
                        {
                          $current = strtotime(date("Y-m-d"));
                          $date    = strtotime($res['device_visited']);

                          $datediff = $date - $current;
                          $difference = floor($datediff/(60*60*24));
                          if($difference < -1) {
                            // echo "UPDATE data_device_register set device_uuid_logout = '".$res['device_uuid']."',device_uuid ='' WHERE device_id = '".$res['device_id']."' ";
                            $stmt = $this->conn->prepare("UPDATE data_device_register set device_uuid_logout = '".$res['device_uuid']."',device_uuid =''
                              WHERE device_id = '".$res['device_id']."'");
                              $result=$stmt->execute();
                            }
                          }
                        }
                        if($user_id != 1 && $device_uuid != "" && $device_uuid != "undefined"){
                          $sql = "SELECT * FROM data_device_register WHERE device_uuid='$device_uuid' AND member_id = '$user_id' ";
                          $stmt = $this->conn->prepare($sql);
                          $stmt->execute();
                          $result = $stmt->get_result();
                          if($result->num_rows > 0){
                            $stmt = $this->conn->prepare("UPDATE data_device_register SET device_visited=NOW() , device_status_login='1', member_id = '$user_id' WHERE device_uuid='$device_uuid' ");
                            $objQuery1 = $stmt->execute();
                          }else{
                            $sql = "INSERT data_device_register(device_uuid,member_id,device_platform,device_register,device_visited,device_status_login)
                            VALUES('$device_uuid','$user_id','$device_platform',NOW(),NOW(),'1') ";
                            $stmt = $this->conn->prepare($sql);
                            $objQuery1 = $stmt->execute();
                          }
                          if($objQuery1){
                            $stmt->close();
                            return $result;
                          }else{
                            $stmt->close();
                            return NULL;
                          }
                        }
                        return NULL;
                      }

                      /***** บันทึก Logout *****/
                      public function LogoutUpdate($device_uuid) {
                        $stmt = $this->conn->prepare("UPDATE data_device_register SET device_uuid = '', device_uuid_logout = '$device_uuid' , device_visited=NOW() ,
                        device_status_login='2' WHERE device_uuid='$device_uuid' ");
                        $objQuery1 = $stmt->execute();

                        if($objQuery1){
                          $stmt->close();
                          return true;
                        }else{
                          $stmt->close();
                          return NULL;
                        }
                      }
                      /********* sendNoti  *********/
                      public function SendNoti($user_id,$message,$title,$roomID,$data,$member_id) {
                        $sql = "SELECT * FROM data_room WHERE room_name = '".$roomID."'";
                        $stmt = $this->conn->prepare($sql);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){


                          $sql = "SELECT * FROM data_device_register WHERE member_id='$member_id' AND device_uuid != ''";
                          $stmt = $this->conn->prepare($sql);
                          $stmt->execute();
                          $result = $stmt->get_result();

                          $sql = "UPDATE data_room set room_update = Now() WHERE room_name = '$roomID'";
                          $stmt = $this->conn->prepare($sql);
                          $stmt->execute();

                          if($result->num_rows > 0){


                            $newdata = json_decode($data, true);
                            $newdata["typeNoti"] = "chat";
                            $newdata = json_encode($newdata);
                            define( 'API_ACCESS_KEY', 'AIzaSyC71MK0GrfVX3x0ZjqcFzXgPCn5VeDh2kg' );
                            while($res = $result->fetch_assoc())
                            {
                              $registrationIds = $res['device_uuid'];
                              $msg = array(
                                'messageKey' 	=> $message,
                                'title'		=> $title,
                                'body' => $message,
                                'sound' => 'true',
                                'tickerText'	=> 'Ticker text here...Ticker text here...Ticker text here',
                                'vibrate'	=> 1,
                                'sound'		=> 1,
                                'largeIcon'	=> 'large_icon',
                                'smallIcon'	=> 'small_icon',
                                'urlto'	=> 'asdasdsa',
                                'moreData'=> $newdata
                              );

                              if ($res["device_platform"] == '2') {
                                $arrayToSend = array('to' => $registrationIds, 'notification' => $msg,'priority'=>'high' );
                              }else{
                                $arrayToSend = array('to' => $registrationIds, 'data' => $msg,'priority'=>'high');
                              }


                              $headers = array(
                                'Authorization: key=' . API_ACCESS_KEY,
                                'Content-Type: application/json'
                              );

                              $ch = curl_init();

                              curl_setopt($ch, CURLOPT_USERPWD, "myusername:mypassword");
                              curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
                              // curl_setopt( $ch,CURLOPT_URL, 'https://android.googleapis.com/gcm/send' );
                              curl_setopt( $ch,CURLOPT_POST, true );
                              curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
                              curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
                              curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
                              curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $arrayToSend ) );
                              curl_exec($ch );

                              curl_close( $ch );

                            }
                            $text = 'send you a message '. $message;
                            $sql_in = "INSERT INTO `data_user_notification` (`noti_detail`, `noti_post_id`, `noti_user_doer`, `noti_user_ owner`, `noti_type`, `noti_time`)
                            VALUES ('$text', '".$roomID."', '".$user_id."', '".$member_id."', '2' , NOW())";
                            $stmt_in = $this->conn->prepare($sql_in);
                            $stmt_in->execute();

                            return true;
                          }else{
                            return NULL;
                          }
                        }else{
                          return 'noroom';
                        }
                        // if($objQuery1 == "true"){
                        //   $stmt->close();
                        //   return true;
                        // }else{
                        //   $stmt->close();
                        //   return NULL;
                        // }



                      }

                      public function getNearLocation($photo_id,$width,$LoadMoreLimit,$numLoad,$user_id,$locationNear,$lat,$long,$limitDis,$notID,$locationName,$typeFillter){




                        $output = array();

                        if ($typeFillter=="typeLocation") {

                          $sqlTour = "SELECT * ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.attraction_lat)) * COS(
                            RADIANS(a.attraction_long) - RADIANS($long)) + SIN(RADIANS($lat)
                          ) * SIN(RADIANS(a.attraction_lat)))) as distant FROM `data_attraction` a
                          LEFT JOIN data_province b on a.province_id = b.province_id
                          WHERE a.attraction_id != '".$photo_id."' AND a.attraction_categories LIKE '%".$locationNear."%'
                          GROUP BY a.attraction_id ORDER BY distant limit ".$LoadMoreLimit*$numLoad.','.$LoadMoreLimit;
                          $stmttour = $this->conn->prepare($sqlTour);
                          $stmttour->execute();
                          $resulttour = $stmttour->get_result();

                          $sqlType = "SELECT * FROM `data_TypeLocation` WHERE TypeLocation_id = '".$locationNear."'";
                          $stmtType = $this->conn->prepare($sqlType);
                          $stmtType->execute();
                          $resultType = $stmtType->get_result();
                          $resultType = $resultType->fetch_assoc();
                          if($resulttour->num_rows > 0){
                            $stmttour->close();
                            $outputtour = array();
                            while($res = $resulttour->fetch_assoc())
                            {


                              $photo_img = "";
                              // echo "SELECT * FROM `data_attraction_img` WHERE attraction_img_status=1 and `attraction_id` =".$res['attraction_id']." limit 1";
                              $stmt2 = $this->conn->prepare("SELECT * FROM `data_attraction_img` WHERE attraction_img_status=1 and `attraction_id` =".$res['attraction_id']." limit 1");
                              $stmt2->execute();
                              $result2 = $stmt2->get_result();
                              if($result2->num_rows > 0){
                                while($res2 = $result2->fetch_assoc())
                                {
                                  $photo_img = $res2['attraction_img_path'];
                                  $width=$res2['photo_width'];
                                  $height=$res2['photo_height'];
                                }
                              }


                              if ($photo_img!="") {
                                $response = array(
                                  "distant" => number_format((float)($res['distant']*2), 1, '.', ''),
                                  "photo_id" => $res['attraction_id'],
                                  "checkCard" => 0,
                                  "checkshow" => 0,
                                  "photo_caption" => html_entity_decode($res['attraction_name']),
                                  "hashtag" => $res['attraction_name'],
                                  "photo_location" => $res['attraction_address'],
                                  "photo_locationText" => $res['attraction_address'],
                                  "photo_la" => $res['attraction_lat'],
                                  "photo_long" => $res['attraction_long'],
                                  "photo_share" => '',
                                  "user_id" => 'TAT',
                                  "user_firstname" => 'Tourism Authority of Thailand',
                                  "user_lastname" => '',
                                  "user_path_img" => 'https://myadventureearth.com/api/v1/img/tat.jpg',
                                  "country_img_path" => '',
                                  "country_name_th" => 'ประเทศไทย',
                                  "country_name_en" => 'Thailand',
                                  "feeling_id" => '',
                                  "follow" => '',
                                  "feeling_name" => '',
                                  "photo_img" => BASE_URL.$photo_img,
                                  "user_img" => 'https://myadventureearth.com/api/v1/img/tat.jpg',
                                  'linkshared'=>BASE_URL_WEB.'ShearTAT.php?method=share&user=tat&id='.$res['attraction_id'],
                                  "sum_like" => '0',
                                  "followers" => '',
                                  "following" => '',
                                  "status_like" =>'false',
                                  "status_bookmark"=>'true',
                                  "photo_img_Full" => BASE_URL.$photo_img,
                                  "status_show" => true,
                                  "TypeLocation_id" => $resultType["TypeLocation_id"],
                                  "TypeLocation_name" => $resultType["TypeLocation_name"],
                                  "photo_province" => $res['province_name_en'],
                                  'sizeheight'=>$this->func->Newgetsize($width,$height,$width),
                                  'sizeFullheight'=>$this->func->NewgetFullsize($width,$height,$width),
                                  'time'=>'',
                                  'sizeheight'=>($width/2)
                                  // 'sizeheight'=>$this->func->getsize($res['picture_file_path'],$width)
                                  // 'status_Follow'=>false
                                );
                                // print_r($response);

                                $output[]=$response;
                              }


                            }
                          }
                          // exit();
                        }
                        // CREATE FUNCTION `lat_lng_distance` (lat1 FLOAT, lng1 FLOAT, lat2 FLOAT, lng2 FLOAT)
                        // RETURNS FLOAT
                        // DETERMINISTIC
                        // BEGIN
                        //     RETURN 6371 * 2 * ASIN(SQRT(
                        //         POWER(SIN((lat1 - abs(lat2)) * pi()/180 / 2),
                        //         2) + COS(lat1 * pi()/180 ) * COS(abs(lat2) *
                        //         pi()/180) * POWER(SIN((lng1 - lng2) *
                        //         pi()/180 / 2), 2) ));
                        // END
                        if (!$lat|| !$long ) {
                          return NULL;
                        }


                        if ($notID == "") {
                          $notID = "0";
                        }
                        $date = date("Y-m-d", strtotime("-6 months"));
                        $sql = "SELECT * ,(3959 * ACOS( COS(RADIANS($lat)) * COS(RADIANS(a.photo_la)) * COS(
                          RADIANS(a.photo_long) - RADIANS($long)) + SIN(RADIANS($lat)
                        ) * SIN(RADIANS(a.photo_la)))) as distant ,
                        (SELECT COUNT(follow_id) FROM data_follow WHERE user_id = '".$user_id."' and follow_user = a.user_id ) as follow
                        FROM `data_photos` a
                        LEFT JOIN data_feeling_tx b on a.feeling_tx_id = b.feeling_tx_id
                        LEFT JOIN data_user_account c on a.user_id=c.user_id
                        LEFT JOIN data_country d on d.country_id = c.country_id
                        LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                        WHERE a.TypeLocation_id =".$locationNear." && photo_createdate > $date && photo_location != '$locationName' && photo_id NOT IN ($notID) &&
                        photo_id!='".$photo_id."' && photo_status_Del!=0 && photo_status!=0
                        GROUP By photo_location
                        HAVING distant < $limitDis
                        ORDER BY distant
                        LIMIT ".$LoadMoreLimit*$numLoad.",$LoadMoreLimit";

                        // ORDER by photo_createdate Desc
                        $stmt = $this->conn->prepare($sql);
                        $stmt->execute();
                        $result = $stmt->get_result();

                        if($result->num_rows > 0){
                          $stmt->close();

                          while($res = $result->fetch_assoc())
                          {
                            $textLocation ="";
                            $nameLocation = "";
                            if (sizeof(explode(", ",$res['photo_location']))>1) {
                              for ($i=0; $i < sizeof(explode(", ",$res['photo_location'])); $i++) {
                                if ($i==0) {
                                  $nameLocation = explode(", ",$res['photo_location'])[$i];
                                  $textLocation.="<b>".explode(", ",$res['photo_location'])[$i]."</b>, ";
                                }else if($i==sizeof(explode(", ",$res['photo_location']))-1){
                                  $textLocation.="<b>".explode(", ",$res['photo_location'])[$i]."</b>";
                                }else{
                                  $textLocation.=explode(", ",$res['photo_location'])[$i].", ";
                                }
                              }
                            }else{
                              $nameLocation = $res['photo_location'];
                              $textLocation = $res['photo_location'];
                            }

                            $chkDistant = $this->func->getDistance($lat,$long,$res['photo_la'],$res['photo_long']);
                            // code...

                            // photo_like
                            $sql2="SELECT * FROM data_photo_like where photo_id = '".$res['photo_id']."' and user_id=".$user_id;
                            $stmt2 = $this->conn->prepare($sql2);
                            $stmt2->execute();
                            $result2 = $stmt2->get_result();
                            $status_like = false;
                            if ($result2->num_rows>0) {
                              $status_like = true;
                            }
                            // bookmark
                            $sql2="SELECT * FROM data_photo_bookmark where photo_id = '".$res['photo_id']."' and user_id=".$user_id;
                            $stmt2 = $this->conn->prepare($sql2);
                            $stmt2->execute();
                            $result2 = $stmt2->get_result();
                            $status_bookmark = false;
                            if ($result2->num_rows>0) {
                              $status_bookmark = true;
                            }
                            //เวลาห่างระยะ
                            $start  = date_create($res['photo_createdate']);
                            $end 	= date_create(); // Current time and date
                            $diff  	= date_diff( $start, $end );
                            $Arraytime =[
                              [$diff->y,'years'],
                              [$diff->m,'months'],
                              [$diff->d,'d'],
                              [$diff->h,'hr'],
                              [$diff->i,'min'],
                              [$diff->s,'sec'],
                            ];
                            $time = "";
                            for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                              if ($Arraytime[$i][0]!=0) {
                                $time = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                                break;
                              }
                            }

                            $sum_like = $this->count_number('data_photo_like','photo_id',$res['photo_id']);
                            $tmp=$this->getFollow($res['user_id']);

                            // ($not,$TypeLocation,$Place,$Feeling,$photo_id,$width,$LoadMoreLimit,$numLoad,$user_id,$lat,$long,$province,$TypeLocationName)
                            $same=$this->getSamePlace('','','',$res['photo_location'],'','',$width,5,0,$user_id,$res['photo_la'],$res['photo_long'],'','');

                            if ($same==NULL) {
                              $same = array();
                            }

                            $textCap = '';
                            $caption = explode(' ' , $res['photo_caption']);
                            for ($i=0; $i < count($caption); $i++) {
                              // preg_match_all("/(#\w+)/", $caption[$i], $matches);
                              $matches = array();
                              if($caption[$i] == '<br>'){
                                $textCap = $textCap . $caption[$i] . ' ';
                              }else{
                                $matches = $this->func->getHashtags(htmlspecialchars_decode($caption[$i]));

                                if(count($matches) == 0){
                                  $textCap = $textCap . htmlspecialchars($caption[$i], ENT_QUOTES). ' ';
                                }else{
                                  $textCap = $textCap . '<a class="hashtag">'. htmlspecialchars($caption[$i], ENT_QUOTES) .'</a> ';
                                }
                              }
                            }

                            // $textCap = '“' . trim($textCap) . '”';
                            $textCap = trim($textCap);
                            if($res['photo_path_img'] == ""){
                              $imgPost = $res['photo_path_img_original'];
                              $imgNomal = $res['photo_path_img_original'];
                            }else{
                              $imgPost = $res['photo_path_img'];
                              $imgNomal = $res['photo_path_img_normal'];
                            }


                            $imgresize = array();
                            $imgfullsize = array();
                            $path_width = $path_height = "";
                            $sqlimg = "SELECT * FROM `data_path_photo` WHERE path_post_id = '".$res['photo_id']."' AND path_status = 1";
                            $stmtimg = $this->conn->prepare($sqlimg);
                            $stmtimg->execute();

                            $resimg = $stmtimg->get_result();
                            $countP = 0;
                            if($resimg->num_rows > 0){
                              while($imgres = $resimg->fetch_assoc())
                              {
                                $imgresize[] = BASE_URL.$imgres['path_url_resize'];
                                $imgfullsize[] = BASE_URL.$imgres['path_url'];
                                if($countP == 0){
                                  $path_width = $imgres['path_width'];
                                  $path_height = $imgres['path_height'];
                                }
                                $countP++;
                              }
                            }

                            //check type file if svg not convert
                            $type = explode(".",$res["country_flag_32"])[1];
                            $imgPath = '';
                            if ($type != 'svg') {
                              $imgPath = strtolower(explode("-",$res["country_flag_32"])[0]).'.svg';
                            }else{
                              $imgPath = $res["country_flag_32"];
                            }
                            //check type file if svg not convert

                            $response = array(
                              "distant" => number_format((float)($res['distant']*2), 1, '.', ''),
                              "photo_id" => $res['photo_id'],
                              // "photo_locationText" => $textLocation,
                              "photo_locationText" => $res['photo_location'],
                              "photo_caption" => html_entity_decode($res['photo_caption']),
                              "hashtag" => $textCap,
                              "checkCard" => 0,
                              "checkshow" => 0,
                              "photo_location" => $res['photo_location'],
                              "photo_la" => $res['photo_la'],
                              "photo_long" => $res['photo_long'],
                              "photo_share" => $res['photo_share'],
                              "user_id" => $res['user_id'],
                              "user_firstname" => html_entity_decode($res['user_firstname'], ENT_QUOTES),
                              "user_lastname" => html_entity_decode($res['user_lastname'], ENT_QUOTES),
                              "user_path_img" => BASE_URL.$res['user_path_img'],
                              "country_img_path" => BASE_URL.'data/flags/'.$imgPath,
                              "country_name_th" => $res['country_name_th'],
                              "country_name_en" => $res['country_name_en'],
                              "feeling_id" => $res['feeling_tx_id'],
                              "follow" => $res['follow'],
                              "feeling_name" => $res['feeling_tx_name'],
                              "photo_img" => BASE_URL.$imgPost,
                              "user_img" => BASE_URL.$res['user_path_img'],
                              "sum_like" => $sum_like,
                              'linkshared'=>BASE_URL_WEB.'OpenGraph.php?method=share&user=user&id='.$res['photo_id'],
                              "followers" => $tmp['followers'],
                              "following" => $tmp['following'],
                              "status_like" =>$status_like,
                              "status_bookmark"=>$status_bookmark,
                              "photo_img_Full" => BASE_URL.$imgNomal,
                              "status_show" => true,
                              "TypeLocation_id" => $res['TypeLocation_id'],
                              "TypeLocation_name" => $res['TypeLocation_name'],
                              "photo_province" => $res['photo_province'],
                              'time'=>$time,
                              "user_type" => $res['user_shop'],
                              // 'sizeFullheight'=>$this->func->getFullsize('../../'.$res['photo_path_img'],$width),
                              // 'sizeheight'=>$this->func->getsize('../../'.$res['photo_path_img'],$width),
                              'sizeheight'=>$this->func->Newgetsize($path_width,$path_height,$width),
                              'sizeFullheight'=>$this->func->NewgetFullsize($path_width,$path_height,$width),
                              'same'=>$same,
                              'samelength'=>sizeof($same),
                              "pictureResize" => $imgresize,
                              "pictureFull" => $imgfullsize

                              // 'status_Follow'=>false
                            );
                            $output[]=$response;
                          }
                          usort($output, function($a, $b) {
                            // return intval($a['distant']) - intval($b['distant']);
                            return $b['distant'] < $a['distant'] ? 1 : -1;
                          });
                          return $output;

                        }else{

                          $stmt->close();
                          return NULL;
                        }
                      }


                      public function SaveLocation($user_id,$lat,$long) {
                        // echo $user_id . " -------- ";
                        // echo $lat . " *********** " ;
                        // echo $long . " ///////////// ";
                        if($user_id != 1){


                          $sql = "SELECT * FROM data_user_location WHERE user = '$user_id'";


                          $stmt = $this->conn->prepare($sql);
                          $stmt->execute();
                          $result = $stmt->get_result();
                          if($result->num_rows > 0){
                            $sql = "UPDATE `data_user_location` SET `lat` = '$lat',`long`='$long',`timeUpdate`= Now() WHERE `user` = '$user_id'";
                          }else{
                            $sql = "INSERT INTO `data_user_location` (`user`, `lat`, `long`) VALUES ('$user_id','$lat','$long')";
                          }
                          // echo $sql;
                          // exit();
                          $stmt = $this->conn->prepare($sql);
                          $stmt->execute();

                          if($stmt){
                            return true;
                          }else{
                            return NULL;
                          }
                        }
                      }


                      public function saveLog($postId,$photoid,$user_id,$page,$activity,$user,$caption,$detail,$places,$feelings,$location,$province,$vehicles) {
                        $sql = "";
                        if ($activity == "") {
                          return false;
                        }
                        if ($activity == "fillter") {
                          if($detail == "places"){
                            $sql = "insert into data_log(UserID,Page,Activity,Detail,Places,Time)values('$user_id','$page','$activity','$detail','$places',Now())";
                          }else if($detail == "feeling" || $detail == "preference"){
                            $sql = "insert into data_log(UserID,Page,Activity,Detail,Feelings,Time)values('$user_id','$page','$activity','$detail','$feelings',Now())";
                          }else if ($detail == "Following") {
                            $sql = "insert into data_log(UserID,Page,Activity,Detail,Time)values('$user_id','$page','$activity','$detail',Now())";
                          }else if ($detail == "My Current Location") {
                            $sql = "insert into data_log(UserID,Page,Activity,Detail,Location,Time)values('$user_id','$page','$activity','$detail','$location',Now())";
                          }else if ($detail == "Destination") {
                            $sql = "insert into data_log(UserID,Page,Activity,Detail,Location,Time)values('$user_id','$page','$activity','$detail','$location',Now())";
                          }
                        }else if($activity == "Shear"){
                          $sql = "insert into data_log(UserID,Page,Activity,Caption,Places,Feelings,Location,Province,Time)values('$user_id','$page','$activity','".str_replace("'","\'",$caption)."','$places','$feelings','$location','$province',Now())";
                        }else if($activity == "Go"){
                          $sql = "insert into data_log(UserID,Page,Activity,Caption,Places,Feelings,Location,Province,Time)values('$user_id','$postId','$activity','".str_replace("'","\'",$caption)."','$places','$feelings','$location','$province',Now())";

                        }else if($activity == "share"){


                          $sqlShare = $this->conn->prepare("SELECT * FROM data_log WHERE UserID = '$user_id' && Activity = 'share' && Page = '$page'");
                          $sqlShare->execute();
                          $resultShare = $sqlShare->get_result();
                          if ($resultShare->num_rows == 0) {
                            $sqlScore = $this->conn->prepare("SELECT * FROM data_coconuts WHERE id = '2'");
                            $sqlScore->execute();
                            $resultScore = $sqlScore->get_result();
                            while($resScore = $resultScore->fetch_assoc())
                            {
                              $sqlUser = $this->conn->prepare("SELECT * FROM data_user_account WHERE user_id = '$user_id'");
                              $sqlUser->execute();
                              $resultUser = $sqlUser->get_result();

                              while($resUser = $resultUser->fetch_assoc())
                              {
                                $sql = "insert into data_log(UserID,Page,User,Activity,Caption,Places,Feelings,Location,Province,Time,Detail,point)values('$user_id','$page','$user','$activity','".str_replace("'","\'",$caption)."','$places','$feelings','$location','$province',Now(),'$detail','".$resScore['value']."')";
                                $score = $resUser['user_coconut']+$resScore['value'];
                                $sqlUpdate = "UPDATE data_user_account SET user_coconut = '$score' WHERE user_id = '$user_id'";
                                $stmtUpdate = $this->conn->prepare($sqlUpdate);
                                $result = $stmtUpdate->execute();
                              }
                            }
                          }else{
                            $sql = "insert into data_log(UserID,Page,User,Activity,Caption,Places,Feelings,Location,Province,Time,Detail)values('$user_id','$page','$user','$activity','".str_replace("'","\'",$caption)."','$places','$feelings','$location','$province',Now(),'$detail')";
                          }

                        }
                        // echo $sql;
                        // exit();
                        $stmt = $this->conn->prepare($sql);
                        $result = $stmt->execute();
                        return true;


                      }

                      public function gatNameLocation($lat, $long)
                      {

                        $url= "https://maps.googleapis.com/maps/api/geocode/json?latlng=".$lat.",".$long."&sensor=true&key=".key_map;
                        $data = $this->curl($url,"");

                        // print_r($data['results'][0]);

                        $province = "";
                        for ($i=0; $i < sizeof($data['results'][0]['address_components']) ; $i++) {
                          if ($data['results'][0]['address_components'][$i]['types'][0]=="administrative_area_level_1") {
                            // echo "--->".sizeof(explode('Chang Wat ',$data['results'][0]['address_components'][$i]['long_name']))."<---";
                            if (sizeof(explode('Chang Wat ',$data['results'][0]['address_components'][$i]['long_name']))>1) {
                              $province=explode('Chang Wat ',$data['results'][0]['address_components'][$i]['long_name'])[1];
                            }else{
                              $province=$data['results'][0]['address_components'][$i]['long_name'];
                            }
                            break;
                          }
                        }
                        return $province;
                        // print_r($province);
                        // exit();
                      }






                      // ***************************************************************************************************************************



                      /*** เพิ่ม company ให้กับ user ***/
                      public function createMember_comp($lastid, $company_name, $company_branch, $company_taxid, $company_address, $company_prov_id, $company_postcode,$company_country_id, $company_phone, $company_fax, $company_type_member, $image_comp) {
                        $stmt = $this->conn->prepare("INSERT INTO Member_comp(member_id, member_comp_name, member_comp_branch, member_comp_taxid, member_comp_address, prov_id, member_comp_postcode, country_id, member_comp_phone, member_comp_fax, member_comp_type) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                        $stmt->bind_param("sssssssssss", $lastid, $company_name, $company_branch,$company_taxid, $company_address, $company_prov_id, $company_postcode,$company_country_id, $company_phone, $company_fax, $company_type_member);
                        $result = $stmt->execute();
                        $stmt->close();
                        if ($result) {
                          $lastid2 = $this->conn->insert_id;
                          if($image_comp != ""){
                            $success2 = $this->func->uploadImageBase64($image_comp, "img_membercomp" , $lastid2);
                            if($success2!=''){
                              $stmt = $this->conn->prepare("UPDATE Member_comp set member_comp_img = '$success2' WHERE member_comp_id = '$lastid2' ");
                              $stmt->execute();
                            }
                          }
                        }
                        return $result;
                      }




                      /*** เช็คล็อกอิน ***/
                      public function checkLoginWithKey($email) {

                        $stmt = $this->conn->prepare("SELECT member_id FROM Member WHERE member_api_key = '$email' AND member_status = '1' ");
                        $stmt->execute();
                        $stmt->store_result();
                        if ($stmt->num_rows > 0) {
                          $stmt->close();
                          return TRUE;
                        }else{
                          $stmt->close();
                          return FALSE;
                        }
                      }







                      /*** ดึงเปอร์เซ็น ***/
                      public function checkPercen($case_id) {
                        // $stmt = $this->conn->prepare("SELECT MAX(process_type_step) as countStatus FROM Process a LEFT JOIN Process_Type b ON a.process_type_id=b.process_type_id WHERE case_id = '$case_id' ");

                        $stmt = $this->conn->prepare("SELECT process_type_step as countStatus FROM Process a LEFT JOIN Process_Type b ON a.process_type_id=b.process_type_id WHERE case_id = '$case_id' order by a.process_id desc limit 1 ");
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){
                          $res = $result->fetch_assoc();
                          $stmt->close();
                          return $res['countStatus'];
                        }else{
                          $stmt->close();
                          return NULL;
                        }
                      }


                      public function changepass($passold, $passnew,$user_id) {
                        // $passold = PassHash::hash($passold);
                        $passnew = PassHash::hash($passnew);
                        // SELECT member_password FROM Member WHERE member_email = '$email'
                        $Tsql = "SELECT * FROM `Member` where member_id = '".$user_id."' ";
                        $stmt = $this->conn->prepare($Tsql);
                        $stmt->execute();
                        $result = $stmt->get_result();

                        if($result->num_rows > 0){
                          $res = $result->fetch_assoc();
                          if (PassHash::check_password($res['member_password'], $passold)) {
                            if ($res['member_facebook_type'] == '0') {
                              if ($res['member_status']=='1') {
                                $sql = "update `Member` set member_password = '".$passnew."' where member_id='".$user_id."'";
                                $stmt1 = $this->conn->prepare($sql);
                                $objQuery1=$stmt1->execute();
                                // $result1= $stmt1->get_result();
                                if($objQuery1){
                                  return "change password successfully";
                                }else{
                                  return "Error sql";
                                }
                              }
                              return "No active";
                            }
                            return "login facebook";
                          }
                          return "Passwod is incorrect";
                        }else{
                          $stmt->close();
                          return "not found user";
                        }


                      }

                      /*** checkformset ***/
                      public function getFormSet($compType1, $compType2, $compType3) {
                        if($compType2>0){
                          $stmt = $this->conn->prepare("SELECT * FROM Form_Link_Complaint_Type WHERE compType_id = ? AND compTypeSub1_id = ? ");
                          $stmt->bind_param("ss", $compType1,$compType2);
                        }else{
                          $stmt = $this->conn->prepare("SELECT form_id FROM Complaint_Type WHERE compType_id = '$compType1'  ");
                          $stmt->execute();
                          $result = $stmt->get_result();
                          if($result->num_rows > 0){
                            $res = $result->fetch_assoc();
                            $keyform=$res['form_id'];
                          }

                          // $stmt = $this->conn->prepare("SELECT * FROM Form_Link_Complaint_Type WHERE compType_id = ? AND form_id = ? ");
                          // $stmt->bind_param("ss", $compType1, $keyform);

                          $stmt = $this->conn->prepare("SELECT * FROM Form_Link_Complaint_Type WHERE compType_id = ?  ");
                          $stmt->bind_param("s", $compType1);
                        }


                        $stmt->execute();
                        $result = $stmt->get_result();

                        if($result->num_rows > 0){

                          while($res = $result->fetch_assoc())
                          {
                            $response = array(
                              "frmset_id" => $res['frmset_id'],
                              "frmset_name" => $res['frmset_name']
                            );
                            $output[]=$response;
                            $id[]= $res['frmset_id'];
                          }
                          foreach ($output as $key => $product) {
                            $stmt = $this->conn->prepare("SELECT * FROM Field_Set WHERE frmset_id ='$id[$key]' ");
                            $stmt->execute();
                            $result2 = $stmt->get_result();
                            while($res2 = $result2->fetch_assoc())
                            {
                              $response = array(
                                "fieldset_id" => $res2['fieldset_id'],
                                "fieldset_name" => $res2['fieldset_name'],
                                "fieldset_require" => $res2['fieldset_require'],
                              );
                              $output3[]=$response;
                              $output[$key]['frmset_field'] = $output3 ;
                            }
                            $output3 = array();
                          }
                          $stmt->close();
                          return $output;
                        }else{
                          $stmt->close();
                          return NULL;
                        }
                      }
                      /*** ดึง userid จาก apikey ***/
                      public function FormIdWithTable($compType1) {
                        $stmt = $this->conn->prepare("SELECT form_id FROM Complaint_Type WHERE compType_id = '$compType1' ");
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){
                          $stmt->close();
                          return $result;
                        }else{
                          $stmt->close();
                          return NULL;
                        }
                      }
                      /*** checkformset ***/
                      public function getFormSet2($compType1, $compType2, $compType3) {
                        $stmt2 = $this->conn->prepare("SELECT * FROM Complaint_Type WHERE compType_id = '$compType1' ");
                        $stmt2->execute();
                        $result2 = $stmt2->get_result();
                        if($result2->num_rows > 0){

                          $stmt = $this->conn->prepare("SELECT * FROM Form_Link_Complaint_Type WHERE compType_id = '$compType1' and form_id = '51' ");
                          // $stmt->bind_param($compType1);
                          $stmt->execute();
                          $result = $stmt->get_result();

                          if($result->num_rows > 0){

                            while($res = $result->fetch_assoc())
                            {
                              $response = array(
                                "frmset_id" => $res['frmset_id'],
                                "frmset_name" => $res['frmset_name']
                              );
                              $output[]=$response;
                              $id[]= $res['frmset_id'];
                            }
                            foreach ($output as $key => $product) {
                              $stmt = $this->conn->prepare("SELECT * FROM Field_Set WHERE frmset_id ='$id[$key]' ");
                              $stmt->execute();
                              $result2 = $stmt->get_result();
                              while($res2 = $result2->fetch_assoc())
                              {
                                $response = array(
                                  "fieldset_id" => $res2['fieldset_id'],
                                  "fieldset_name" => $res2['fieldset_name'],
                                  "fieldset_require" => $res2['fieldset_require'],
                                );
                                $output3[]=$response;
                                $output[$key]['frmset_field'] = $output3 ;
                              }
                              $output3 = array();
                            }
                            $stmt->close();
                            return $output;
                          }else{
                            $stmt->close();
                            return NULL;
                          }
                        }else{
                          $stmt->close();
                          return NULL;
                        }
                      }


                      /*** validate complaint ***/
                      public function validateComp($v1) {
                        $stmt = $this->conn->prepare("SELECT * from Field_Set WHERE fieldset_require = '1' and frmset_id IN($v1) ");
                        $stmt->execute();
                        $result = $stmt->get_result();
                        $response=array();
                        if($result->num_rows > 0){
                          while($res = $result->fetch_assoc())
                          {
                            array_push($response,$res['fieldset_name']);
                          }

                          return $response;
                        }
                      }
                      /*** validate complaint ***/
                      public function validateCompText($v1) {
                        $array = explode(',', $v1);
                        $ss = "";
                        foreach ($array as $key => $value) {
                          $ss .= "'".trim($value)."',";
                        }
                        $ss = substr($ss, 0, -1);
                        //echo "SELECT fieldset_description, fieldset_description_en from Field_Set WHERE  fieldset_name IN($ss) group by fieldset_name ";
                        $stmt = $this->conn->prepare("SELECT fieldset_description from Field_Set WHERE  fieldset_name IN($ss) group by fieldset_name ");
                        $stmt->execute();
                        $result = $stmt->get_result();
                        // $response=array();
                        $response="";

                        if($result->num_rows > 0){
                          while($res = $result->fetch_assoc())
                          {
                            $response .= " ".$res['fieldset_description'];
                            // $dd = "[".$res['fieldset_description'],$res['fieldset_description_en']."]";
                            // array_push($response,array(
                            //   'fieldset_description' => $res['fieldset_description'],
                            //   'fieldset_description_en' => $res['fieldset_description_en']
                            // ));

                          }
                        }
                        // $resultx = array('result'=>$response);
                        return ($response);
                      }

                      /*** ข้อความข้อกำหนดและเงื่อนไขการใช้งาน ***/
                      public function getTermsOfUse() {
                        /*********** start real ************/
                        //$stmt = $this->conn->prepare("SELECT * FROM terms_of_use");
                        //$stmt->execute();
                        //$result = $stmt->get_result();
                        /*********** end real ************/

                        /*********** start mock ************/
                        $result = '{
                          "current_field":0,
                          "field_count":2,
                          "lengths":[
                            {
                              "termsOfUse_id":1,
                              "termsOfUse_text":"1.กรมส่งเสริมการค้าระหว่างประเทศเป็นผู้ประสานไกล่เกลี่ยข้อพิพาททางการค้าระหว่างประเทศ โดยไม่เป็นการตัดสิทธิของผู้ร้องเรียนที่จะนำเรื่องร้องเรียนไปดำเนินคดีตามกฎหมายด้วยตนเอง <br><br> 2.กรณีที่ผู้ร้องเรียนได้ไปใช้สิทธิดำเนินคดีในชั้นศาลด้วยตนเองแล้ว ขอให้ท่านทำหนังสือแจ้งยุติเรื่องร้องเรียนต่อกรมส่งเสริมการค้าระหว่างประเทศ  หรือ DITP Care <br><br> 3. หลังจากการส่งเรื่องร้องเรียนภายใน 3 วันทำการ หากผู้ร้องเรียนยังไม่ได้รับการติดต่อจากเจ้าหน้าที่ โปรดติดต่อ DITP Call Center 1169 <br><br> 4.หากเรื่องร้องเรียนของท่านเป็นกรณีเร่งด่วนโปรดติดต่อ DITP Call Center 1169 <br><br> 5. การยืนยันตัวตนการใช้งานของผู้ร้องเรียน ผู้ร้องเรียนจะต้องกรอกข้อมูลรายละเอียดต่างๆ ตามจริงให้ครบถ้วน ทั้งนี้เพื่อประโยชน์แก่ตัวผู้ร้องเรียน หากตรวจพบว่าข้อมูลของผู้ร้องเรียนไม่เป็นความจริง ทางกรมส่งเสริมการค้าระหว่างประเทศ จะทำการระงับการใช้งานของผู้ร้องเรียนโดยไม่ต้องแจ้งให้ทราบล่วงหน้า <br><br> 6. การยืนยันเรื่องร้องเรียนและข้อพิพาททางการค้าระหว่างประเทศต้องเป็นความจริงทุกประการ หากพบว่าเรื่องร้องเรียนและข้อพิพาททางการค้าระหว่างประเทศของท่านไม่เป็นความจริง ท่านจะถูกดำเนินคดีตามกฏหมาย",
                              "termsOfUse_text_en":"1. The Department of International Trade is the mediator of international trade disputes. Without disqualifying the complainant to bring the complaint to law-suit themselves.<br><br>2. In case the complainant has the right to take legal action in court, Would you like to make a letter of complaint to the Department of International Trade or DITP Care<br><br>3. After submitting a complaint within 3 working days, if the complainant has not been contacted by the officer, please contact DITP Call Center 1169.<br><br>4. If your complaint is urgent, please contact DITP Call Center 1169.<br><br>5. Verification of the use of the complainant. Complainant will need to fill in the details. True to full For the benefit of the complainant. If it detects that the complainant\'s information is not true. The Department of International Trade. It will suspend the use of the complainant without prior notice.<br><br>6. Confirmation of complaints and international trade disputes must be true in all respects. If your international trade dispute and complaint is found to be untrue. You will be prosecuted by law."
                            }
                          ],
                          "num_rows":1,
                          "type":0
                        }';
                        $result = json_decode($result);
                        /*********** end mock ************/
                        if($result->num_rows > 0){
                          //$stmt->close(); // code real
                          $result = (array)$result->lengths; // code mock
                          return $result;
                        }else{
                          //$stmt->close(); // code real
                          return NULL;
                        }
                      }




                      /*** ชื่อจังหวัด***/
                      public function getProvince() {
                        $stmt = $this->conn->prepare("SELECT * FROM Province");
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){
                          $stmt->close();
                          return $result;
                        }else{
                          $stmt->close();
                          return NULL;
                        }
                      }

                      public function getCaseUser($idcase) {

                        $stmt = $this->conn->prepare("SELECT * FROM `Case`  where case_createBy_id ='".$idcase."' and case_assign_status = '1'  ORDER BY `case_id` desc" );
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){
                          $stmt->close();
                          return $result;
                        }else{
                          $stmt->close();
                          return NULL;
                        }
                      }



                      /*** ประเภทสินค้า ***/
                      public function getTypeProduct() {
                        $stmt = $this->conn->prepare("SELECT *,b.prodType_id as prodType_id_rename, concat(a.prodType_name,' -> ',b.prodType_name) as fullname_product from Product_Type a LEFT join Product_Type b on a.prodType_id=b.prodType_ref_id  WHERE a.prodType_enable = '1' and a.prodType_level = '1'" );
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){
                          $stmt->close();
                          return $result;
                        }else{
                          $stmt->close();
                          return NULL;
                        }

                        // $stmt = $this->conn->prepare("SELECT * from Product_Type WHERE prodType_enable = '1' and prodType_level = '1' ");
                        // $stmt->execute();
                        // $result = $stmt->get_result();
                        // $response=array();
                        // if($result->num_rows > 0){
                        //   while($res = $result->fetch_assoc()){
                        //     $stmt_sub = $this->conn->prepare("SELECT * FROM Product_Type WHERE prodType_enable = '2' and prodType_level = '1' and prodType_ref_id = '$res[prodType_id]' ");
                        //     $stmt_sub->execute();
                        //     $result_sub = $stmt_sub->get_result();
                        //     if($result_sub->num_rows > 0){
                        //       while($res_sub = $result_sub->fetch_assoc()){
                        //         array_push($response,$res['prodType_name'] ." -> ". $res_sub['prodType_name']);
                        //       }
                        //     }
                        //   }
                        // }
                        // return $response;
                      }

                      /*** ค่าเงิน ***/
                      public function getCurrency() {
                        $stmt = $this->conn->prepare("SELECT * FROM Currency");
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){
                          $stmt->close();
                          return $result;
                        }else{
                          $stmt->close();
                          return NULL;
                        }
                      }
                      /*** ประเภทความผิด ***/
                      public function IncorrectType() {
                        $stmt = $this->conn->prepare("SELECT * FROM Incorrect_Type where incType_enable = '1' ");
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){
                          $stmt->close();
                          return $result;
                        }else{
                          $stmt->close();
                          return NULL;
                        }
                      }

                      /*** logout ***/
                      public function logout($user_id,$device_uuid,$device_platform) {
                        if ($device_uuid == "") {
                          return true;
                        }
                        $stmt = $this->conn->prepare("UPDATE Device_regis set device_uuid_logout = '$device_uuid',device_uuid ='' WHERE device_uuid = '$device_uuid' ");
                        $result=$stmt->execute();
                        if ($result) {
                          return true;
                        }else{
                          return null;
                        }

                        // $stmt = $this->conn->prepare("SELECT * FROM version_app WHERE version_build = ?");
                        // $stmt->bind_param("s", $build);
                        // $stmt->execute();
                        // $result = $stmt->get_result();
                        // if($result->num_rows > 0){
                        //   $stmt->close();
                        //   return $result;
                        // }else{
                        //   $stmt->close();
                        //   return NULL;
                        // }
                      }

                      /*** เช็คเวอร์ชั่นแอพ ***/
                      public function checkVersionUpdate($build) {
                        $stmt = $this->conn->prepare("SELECT * FROM version_app WHERE version_build = ?");
                        $stmt->bind_param("s", $build);
                        $stmt->execute();
                        $result = $stmt->get_result();
                        if($result->num_rows > 0){
                          $stmt->close();
                          return $result;
                        }else{
                          $stmt->close();
                          return NULL;
                        }
                      }




                      /*** รายการองค์ความรู้ ***/
                      public function getKnowledge($limit,$offset,$filter,$sort) {

                        $filtersql = $this->func->filter_sql($filter);
                        $limitsql  = $this->func->limit_sql($limit,$offset);
                        $sortsql   = $this->func->sort_sql($sort);
                        $stmt = $this->conn->prepare("SELECT case_id,caseDtl_title,prodType_name,compType_name FROM `Case` a
                          LEFT JOIN Product_Type b ON a.prodType_id = b.prodType_id
                          LEFT JOIN Complaint_Type c ON a.compType_id = c.compType_id
                          WHERE case_knowledge_type = '1' ".$filtersql.$sortsql.$limitsql);
                          $stmt->execute();
                          $result = $stmt->get_result();
                          if($result->num_rows > 0){
                            $stmt->close();
                            return $result;
                          }else{
                            $stmt->close();
                            return NULL;
                          }
                        }



                        /*** องค์ความรู้ ***/
                        public function getIdKnowledge($knowledge_id) {
                          $stmt = $this->conn->prepare("SELECT case_id,caseDtl_title,prodType_name,compType_name,curren_name,caseDtl_derivation,caseDtl_damage_val,caseDtl_complnt_need,case_close_resultProcess,compTypeSub1_name FROM `Case` a
                            LEFT JOIN Product_Type b ON a.prodType_id = b.prodType_id
                            LEFT JOIN Complaint_Type c ON a.compType_id = c.compType_id
                            LEFT JOIN Currency d ON a.curren_id = d.curren_id
                            LEFT JOIN Complaint_Type_Sub1 e ON a.compTypeSub1_id = e.compTypeSub1_id
                            WHERE case_knowledge_type = '1' AND case_id = '$knowledge_id' ");
                            $stmt->execute();
                            $result = $stmt->get_result();
                            if($result->num_rows > 0){
                              $stmt->close();
                              return $result;
                            }else{
                              $stmt->close();
                              return NULL;
                            }
                          }

                          /*** ประเภทเรื่องร้องเรียน ***/
                          public function getTypeComplaint() {
                            $stmt = $this->conn->prepare("SELECT * FROM Complaint_Type WHERE compType_status = '0' ");
                            $stmt->execute();
                            $result = $stmt->get_result();

                            if($result->num_rows > 0){

                              while($res = $result->fetch_assoc())
                              {
                                $response = array(
                                  "compType_id" => $res['compType_id'],
                                  "compType_name" => $res['compType_name'],
                                  "compType_name_en" => $res['compType_name_en'],
                                  "levelmenu" => 1
                                );
                                $output[]=$response;
                                $id[]= $res['compType_id'];
                              }
                              $response = array();
                              foreach ($output as $key => $product) {
                                $stmt = $this->conn->prepare("SELECT * FROM Complaint_Type_Sub1 WHERE compType_id ='$id[$key]' and compTypeSub1_status = '0' ");
                                $stmt->execute();
                                $result2 = $stmt->get_result();
                                while($res2 = $result2->fetch_assoc())
                                {
                                  $response = array(
                                    "compTypeSub1_id" => $res2['compTypeSub1_id'],
                                    "compTypeSub1_name" => $res2['compTypeSub1_name'],
                                    "compTypeSub1_name_en" => $res2['compTypeSub1_name_en'],
                                  );
                                  $output3[]=$response;
                                  $id2[]= $res2['compTypeSub1_id'];
                                  $output[$key]['compType_Sub1'] = $output3 ;
                                  $output[$key]['levelmenu']=2;
                                }
                                $output3 = array();
                                $response = array();
                                foreach ($output[$key]['compType_Sub1'] as $key2 => $product) {
                                  $stmt = $this->conn->prepare("SELECT * FROM Complaint_Type_Sub2 WHERE compTypeSub1_id ='$id[$key]' and compTypeSub2_status = '0' ");
                                  $stmt->execute();
                                  $result3 = $stmt->get_result();
                                  while($res3 = $result3->fetch_assoc())
                                  {
                                    $response = array(
                                      "compTypeSub2_id" => $res3['compTypeSub2_id'],
                                      "compTypeSub2_name" => $res3['compTypeSub2_name'],
                                      "compTypeSub2_name_en" => $res3['compTypeSub2_name_en'],
                                    );
                                    $output4[]=$response;
                                    $output[$key]['compType_Sub1'][$key2]['compType_Sub2'] = $output4 ;
                                    $output[$key]['levelmenu']=3;
                                  }
                                  $output4 = array();
                                }

                              }
                              $stmt->close();
                              return $output;
                            }else{
                              $stmt->close();
                              return NULL;
                            }
                          }


                          /*** เช็ค user จาก apikey ***/
                          public function isValidApiKey($api_key) {
                            $stmt = $this->conn->prepare("SELECT user_id from data_user_account WHERE user_api_key = '$api_key' ");
                            $stmt->execute();
                            $stmt->store_result();
                            $num_rows = $stmt->num_rows;
                            $stmt->close();
                            return $num_rows > 0;
                          }


                          /*** สร้าง Message ***/
                          public function createMessage($user_id,$case_id, $message_detail,$message_img) {
                            //Message_Box
                            $stmt = $this->conn->prepare("INSERT INTO Message_Box (msgBoxRef_id,msgBox_type,case_id,sender_id,sender_type,msgBox_message,msgBox_datetime,msgBox_status)
                            VALUES('0','1','".$case_id."','".$user_id."','1','".$message_detail."',now(),'0')");
                            $result = $stmt->execute();
                            $stmt->close();
                            if ($result) {
                              $new_message_id = $this->conn->insert_id;
                              // message_log
                              $sqlAssign = $this->conn->prepare("SELECT * FROM Case_Assign WHERE  caseAsign_status = '0' and case_id = '".$case_id."'");
                              $sqlAssign->execute();
                              $resultAssign = $sqlAssign->get_result();
                              if($resultAssign->num_rows > 0){
                                while($data= $resultAssign->fetch_assoc()){
                                  $sqlAss=$this->conn->prepare("INSERT INTO Message_Box_Log(msgBox_id,recipient_id,recipient_type,msgBoxLog_datetime) VALUES(".$new_message_id.",".$data['emp_id'].",'2',now())");
                                  $resAssign= $sqlAss->execute();
                                  $sqlAss->close();
                                }
                                if ($resAssign) {
                                  if (sizeof($message_img)>0) {
                                    # code...
                                    for ($i=0; $i < sizeof($message_img); $i++) {
                                      $textreturn = $this->func->check_baseimg_ext($message_img[$i]['base64']);
                                      $today = date("Y-m-d-H-i-s").rand(11111,99999);
                                      $msgBoxAttach_file_name = "caseAttach_file_".$new_message_id."_".$today.".".$textreturn['ext'];
                                      $path = "data/msg_attach/".$new_message_id."/".$msgBoxAttach_file_name;
                                      $success = $this->func->uploadfilemessage($message_img[$i]['base64'], "msg_attach" , $new_message_id,$msgBoxAttach_file_name);
                                      $stmt = $this->conn->prepare("INSERT INTO Message_Box_Attachfile (msgBox_id,msgBoxAttach_title,msgBoxAttach_file_path,msgBoxAttach_file_oldname,msgBoxAttach_file_name,msgBoxAttach_file_ext,msgBoxAttach_status,msgBoxAttach_create_datetime,msgBoxAttach_createBy_id) VALUES(".$new_message_id.",'".$message_img[$i]['name_file_change']."','".$path."','".$message_img[$i]['name_file_ori']."','".$msgBoxAttach_file_name."','".$textreturn['ext']."','0',now(),'".$user_id."')");
                                      $res = $stmt->execute();
                                      $stmt->close();
                                    }
                                    if ($res) {
                                      return $res;
                                    }else{return null;}

                                  }else{
                                    return truel;
                                  }

                                }else{
                                  return null;
                                }
                              }




                              //   while($data= $resultAssign->fetch_assoc()){
                              //          $sql=$this->conn->prepare("INSERT INTO Message_Box_Log (msgBox_id,recipient_id,recipient_type,msgBoxLog_datetime)
                              //          VALUES($new_message_id,$data['emp_id'],'2',now())");
                              //          $resAssign= $sql->execute();
                              //   }
                              //   if ($resAssign) {
                              //       // Message_Box_Attachfile
                              //     for ($i=0; $i < sizeof($message_img); $i++) {
                              //         $textreturn = $this->func->check_baseimg_ext($message_img[$i]['base64']);
                              //         $today = date("Y-m-d-H-i-s").rand(11111,99999);
                              //         $msgBoxAttach_file_name = "caseAttach_file_".$new_message_id."_".$today.".".$textreturn['ext'];
                              //         $path = "data/msg_attach/".$new_message_id."/".$msgBoxAttach_file_name;
                              //         $success = $this->func->uploadfilemessage($message_img[$i]['base64'], "msg_attach" , $new_message_id,$msgBoxAttach_file_name);
                              //         $stmt = $this->conn->prepare("INSERT INTO Message_Box_Attachfile (msgBox_id,msgBoxAttach_title,msgBoxAttach_file_path,msgBoxAttach_file_oldname,msgBoxAttach_file_name,msgBoxAttach_file_ext,msgBoxAttach_status,msgBoxAttach_create_datetime,msgBoxAttach_createBy_id) VALUES(".$new_message_id.",'".$message_img[$i]['name_file_change']."','".$path."','".$message_img[$i]['name_file_ori']."','".$msgBoxAttach_file_name."','".$textreturn."','0',now(),'".$user_id."')");
                              //         $res = $stmt->execute();
                              //         $stmt->close();
                              //     }
                              //
                              //     if ($res) {
                              //         return $success;
                              //     } else {
                              //         return NULL;
                              //     }
                              //   }else{
                              //     return NULL;
                              //   }
                              // }else{
                              //   return NULL;
                              // }
                              // //$res = $this->createUserTask($user_id, $new_task_id);
                              // return $result;
                            } else {
                              return NULL;
                            }
                          }


                          /***  MessageReply ***/
                          public function MessageReply($user_id,$case_id, $message_detail,$message_img,$message_id) {
                            //Message_Box
                            $stmt = $this->conn->prepare("INSERT INTO Message_Box (msgBoxRef_id,msgBox_type,case_id,sender_id,sender_type,msgBox_message,msgBox_datetime,msgBox_status)
                            VALUES(".$message_id.",'2','".$case_id."','".$user_id."','1','".$message_detail."',now(),'0')");
                            $result = $stmt->execute();
                            $stmt->close();
                            if ($result) {

                              $new_message_id = $this->conn->insert_id;
                              // message_log
                              $sqlAssign = $this->conn->prepare("SELECT * FROM Case_Assign WHERE  caseAsign_status = '0' and case_id = '".$case_id."'");
                              $sqlAssign->execute();
                              $resultAssign = $sqlAssign->get_result();
                              if($resultAssign->num_rows > 0){
                                while($data= $resultAssign->fetch_assoc()){
                                  $sqlAss=$this->conn->prepare("INSERT INTO Message_Box_Log(msgBox_id,recipient_id,recipient_type,msgBoxLog_datetime) VALUES(".$new_message_id.",".$data['emp_id'].",'2',now())");
                                  $resAssign= $sqlAss->execute();
                                  $sqlAss->close();
                                }
                                if ($resAssign) {
                                  if (sizeof($message_img)>0) {
                                    # code...
                                    for ($i=0; $i < sizeof($message_img); $i++) {
                                      $textreturn = $this->func->check_baseimg_ext($message_img[$i]['base64']);
                                      $today = date("Y-m-d-H-i-s").rand(11111,99999);
                                      $msgBoxAttach_file_name = "caseAttach_file_".$new_message_id."_".$today.".".$textreturn['ext'];
                                      $path = "data/msg_attach/".$new_message_id."/".$msgBoxAttach_file_name;
                                      $success = $this->func->uploadfilemessage($message_img[$i]['base64'], "msg_attach" , $new_message_id,$msgBoxAttach_file_name);
                                      $stmt = $this->conn->prepare("INSERT INTO Message_Box_Attachfile (msgBox_id,msgBoxAttach_title,msgBoxAttach_file_path,msgBoxAttach_file_oldname,msgBoxAttach_file_name,msgBoxAttach_file_ext,msgBoxAttach_status,msgBoxAttach_create_datetime,msgBoxAttach_createBy_id) VALUES(".$new_message_id.",'".$message_img[$i]['name_file_change']."','".$path."','".$message_img[$i]['name_file_ori']."','".$msgBoxAttach_file_name."','".$textreturn['ext']."','0',now(),'".$user_id."')");
                                      $res = $stmt->execute();
                                      $stmt->close();
                                    }
                                    if ($res) {
                                      return $res;
                                    }else{return null;}

                                  }else{
                                    return truel;
                                  }

                                }else{
                                  return null;
                                }
                              }

                            } else {
                              return NULL;
                            }
                          }


                          /*** สร้าง Complaint ***/
                          public function createComplaint($request_post,$compType_id,$compTypeSub1_id,$compTypeSub2_id,$case_status,$case_assign_status,$caseCh_id,$case_priority,$case_receivedoc_real_datetime,
                          $case_disKPI_status,$caseDtl_title,$prodType_id,$caseDtl_derivation,$caseDtl_damage_val,$curren_id,$caseDtl_complnt_need,
                          $applnt_ident,$applntOrg_trade_number,$applnt_firstname,$applnt_type,$applnt_ident_valid,$applnt_status,$complnt_trade_number,
                          $complnt_name,$complnt_backlist,$applnt_valid_dbd,$applnt_valid_ditp,$case_receivedoc_date,$case_createBy_id,$applnt_lastname,$applntOrg_name,
                          $applnt_country_id,$complnt_country_id,$case_create_datetime,$complnt_file,$user_id,$incType_id,$applntOrg_country_id,$complnt_import_export,$applntOrg_branch,$applntOrg_tel,$applntOrg_fax,
                          $applnt_gender,$applnt_career,$applnt_mobile,$applnt_email,$applnt_address,$applntOrg_prov_id,$applntOrg_zipcode,$complnt_branch,
                          $complnt_contact_tel,$complnt_contact_email,$complnt_contact_address,$complnt_contact_prov_id,$complnt_zipcode,$complnt_contact_name,$applntOrg_name0,$applntOrg_trade_number0) {

                            mysqli_begin_transaction($this->conn);

                            $stmt = $this->conn->prepare("INSERT INTO `Case`(compType_id,compTypeSub1_id,compTypeSub2_id,case_status,case_assign_status,caseCh_id,case_priority,case_receivedoc_real_datetime,
                              case_disKPI_status,caseDtl_title,prodType_id,caseDtl_derivation,caseDtl_damage_val,curren_id,caseDtl_complnt_need,
                              applnt_ident,applntOrg_trade_number,applnt_firstname,applnt_type,applnt_ident_valid,applnt_status,complnt_trade_number,
                              complnt_name,complnt_backlist,applnt_valid_dbd,applnt_valid_ditp,case_receivedoc_date,case_createBy_id,applnt_lastname,applntOrg_name,
                              applnt_country_id,complnt_country_id,case_create_datetime,incType_id,applntOrg_country_id, case_compType_duration) VALUES('$compType_id','$compTypeSub1_id','$compTypeSub2_id','$case_status','$case_assign_status','$caseCh_id','$case_priority','$case_receivedoc_real_datetime','
                                $case_disKPI_status','$caseDtl_title','$prodType_id','$caseDtl_derivation','$caseDtl_damage_val','$curren_id','$caseDtl_complnt_need','
                                $applnt_ident','$applntOrg_trade_number','$applnt_firstname','$applnt_type','$applnt_ident_valid','$applnt_status','$complnt_trade_number','
                                $complnt_name','$complnt_backlist','$applnt_valid_dbd','$applnt_valid_ditp','$case_receivedoc_date','$case_createBy_id','$applnt_lastname','$applntOrg_name',
                                '$applnt_country_id','$complnt_country_id','$case_create_datetime','$incType_id','$applntOrg_country_id', (select compType_duration from `Complaint_Type` where compType_id = '$compType_id'))");
                                $result = $stmt->execute();
                                //$stmt->close();
                                if ($result) {
                                  $caseid = $this->conn->insert_id;
                                  foreach ($request_post as $key => $value) {
                                    $res = $this->createComplaintField($key, $value, $caseid,$request_post['formSetId_P']);
                                  }

                                  $n = 0;
                                  foreach ($complnt_file as $key => $value) {
                                    $nameiamge = time();
                                    $nameiamge=$nameiamge.$n++;
                                    $textreturn = $this->func->check_baseimg_ext($value['base64']);
                                    $namefile = 'caseAttach_file_'.$caseid.'_'.$nameiamge.'.'.$textreturn['ext'];
                                    $uploadFileNew = $this->func->create_folder('case_attach',$caseid,'/',$namefile); //caseAttach_file_6_1492771842
                                    $success = file_put_contents($uploadFileNew, $textreturn['url']);
                                    if($success){
                                      $stmt = $this->conn->prepare("INSERT INTO Case_Attachfile(
                                        case_id,caseAttach_title,caseAttach_file_path,caseAttach_file_oldname,
                                        caseAttach_file_name,caseAttach_file_ext,caseAttach_status,
                                        caseAttach_create_datetime,caseAttach_createBy_id)
                                        VALUES('$caseid','$value[name_file_change]','data/case_attach/$caseid/$namefile','$value[name_file_ori]',
                                          '$namefile','$textreturn[ext]','0',NOW(),'$user_id')");
                                          $result3 = $stmt->execute();
                                          if($result3){
                                            mysqli_commit($this->conn);
                                          }
                                        }
                                      }

                                      //   หาคนที่สร้าง case เป็นนิติบุคคลหรือคนทั่วไป

                                      $stmtMemberType = $this->conn->prepare("SELECT a.member_type, a.member_business, b.member_comp_type from Member a left join Member_comp b on a.member_id=b.member_id WHERE a.member_id = '$case_createBy_id' ");
                                      $stmtMemberType->execute();
                                      $resMemberType = $stmtMemberType->get_result()->fetch_assoc();
                                      $ValueMemberType = $resMemberType['member_type'];

                                      /*if($applntOrg_country_id == "" && isset($complnt_country_id)){
                                      $cpr_type = 2;
                                    }else{
                                    $cpr_type = 1;
                                  }*/
                                  $cpr_type = 1;
                                  $cpr_comp_type = 1;

                                  $cpr_section = $this->conn->prepare("SELECT compType_section from Complaint_Type  WHERE compType_id = $compType_id");
                                  $cpr_section->execute();
                                  $resultcpr_section = $cpr_section->get_result()->fetch_assoc();
                                  $Valuecpr_section = $resultcpr_section['compType_section'];
                                  $cpr_contactfname = $applnt_firstname;
                                  $cpr_contactlname = $applnt_lastname;

                                  /******/

                                  $cpr_numbertrade = $applntOrg_trade_number;
                                  $cpr_companyname = $applntOrg_name;
                                  $cpr_type_import_export = $resMemberType['member_business'];

                                  $cpr_branch = $applntOrg_branch;
                                  $cpr_telephone = $applntOrg_tel;
                                  $cpr_fax = $request_post['applntOrg_fax'];
                                  $cpr_email = $request_post['applnt_email'];
                                  $cpr_address = $request_post['applntOrg_address'];
                                  $prov_id = $request_post['prov_id'];
                                  $cpr_zipcode = $request_post['applntOrg_zipcode'];
                                  $cpr_department = $resMemberType['member_type'];

                                  $Country_id = $applnt_country_id;
                                  $cpr_contact_person = $applnt_firstname." ".$applnt_lastname;
                                  $cpr_import = 0;
                                  $cpr_create_datetime = date("Y-m-d H:i:s");
                                  $cpr_createBy_id = $case_createBy_id;
                                  $cpr_update_datetime = date("Y-m-d H:i:s");
                                  $cpr_updateBy_id = $case_createBy_id;
                                  $cpr_ststus = "0";


                                  if($applntOrg_trade_number == "" && isset($applntOrg_trade_number)){
                                    $sqltem = "and cpr_companyname = '$cpr_companyname' ";
                                  }else{
                                    $sqltem = "and cpr_numbertrade = '$applntOrg_trade_number' ";
                                  }

                                  $stmtCorporateCheck = $this->conn->prepare("SELECT cpr_id from Corporate WHERE
                                    cpr_section = ".$Valuecpr_section." and
                                    cpr_type = '$cpr_type' and
                                    cpr_comp_type	= '$cpr_comp_type'  ".$sqltem);

                                    $stmtCorporateCheck->execute();
                                    $resultCorporateCheck = $stmtCorporateCheck->get_result();

                                    /*****/
                                    //$applnt_ident = $applntOrg_trade_number;

                                    //ถ้าเป็น ผู้ประกอบการในต่างประเทศร้องเรียนผู้ประกอบการในไทย
                                    if($compTypeSub1_id != 1){
                                      // END หาคนที่สร้าง case เป็นนิติบุคคลหรือคนทั่วไป
                                      // 0=คนทั่วไป,1=ตัวแทนบริษัท
                                      if($ValueMemberType == 1){
                                        // echo "ตัวแทนบริษัท";
                                        if($resultCorporateCheck->num_rows == 0){
                                          ////// insert //////
                                          $resultInsertCorlv1 = $this->insertCorporate($Valuecpr_section,$cpr_type,$cpr_comp_type,
                                          $cpr_numbertrade,$cpr_companyname,$cpr_type_import_export,
                                          $cpr_branch,$cpr_telephone,$cpr_fax,
                                          $cpr_email,$cpr_address,$prov_id,
                                          $cpr_zipcode,$cpr_department,$cpr_contactfname,
                                          $cpr_contactlname,$Country_id,$cpr_contact_person,
                                          $cpr_import,$cpr_create_datetime,$cpr_createBy_id,$cpr_ststus);

                                        }else{
                                          /////// UPDATE ///////
                                          $resultCorporateCheck = $resultCorporateCheck->fetch_assoc();
                                          $resultcpr_id = $resultCorporateCheck['cpr_id'];
                                          $resultInsertCorlv2 = $this->updateCorporate($Valuecpr_section,$cpr_type,
                                          $cpr_comp_type,$cpr_numbertrade,$cpr_companyname,
                                          $cpr_type_import_export,$cpr_branch,$cpr_telephone,
                                          $cpr_fax,$cpr_email,$cpr_address,
                                          $prov_id,$cpr_zipcode,$cpr_department,
                                          $cpr_contactfname,$cpr_contactlname,$Country_id,
                                          $cpr_contact_person,$cpr_import,$cpr_update_datetime,$cpr_updateBy_id,$cpr_ststus,$resultcpr_id);

                                        }

                                      }else if($ValueMemberType == 0){
                                        // echo "คนทั่วไป";

                                        if($applnt_ident == "" && isset($applnt_ident)){
                                          $sqltem = "and ct_firstname = '$cpr_contactfname' and ct_lastname = '$cpr_contactlname' ";
                                        }else{
                                          $sqltem = "and ct_card = '$applnt_ident' ";
                                        }

                                        $stmtCorporateCheck = $this->conn->prepare("SELECT ct_id from Contact_thai WHERE
                                          ct_section = ".$Valuecpr_section." and
                                          ct_type = '$cpr_type' and
                                          ct_department = '1' and
                                          ct_comp_type	= '$cpr_comp_type'  ".$sqltem);

                                          $stmtCorporateCheck->execute();
                                          $resultCorporateCheck = $stmtCorporateCheck->get_result();

                                          if($resultCorporateCheck->num_rows == 0){
                                            ////// insert //////
                                            $resultInsertCorlv1 = $this->insertContact_thai($Valuecpr_section,$cpr_type,'1',$cpr_comp_type,
                                            $applnt_ident,$cpr_contactfname,$cpr_contactlname,$applnt_gender,$applnt_career,$applnt_mobile,
                                            $applnt_email,$applnt_address,$applntOrg_prov_id,$applntOrg_zipcode,$applnt_country_id,$case_createBy_id);

                                          }else{
                                            /////// UPDATE ///////
                                            $resultCorporateCheck = $resultCorporateCheck->fetch_assoc();
                                            $resultcpr_id = $resultCorporateCheck['ct_id'];

                                            $sql = "UPDATE `Contact_thai` SET
                                            ct_section='$Valuecpr_section',
                                            ct_type='$cpr_type',
                                            ct_comp_type='$cpr_comp_type',
                                            ct_card='$applnt_ident',
                                            ct_firstname='$cpr_contactfname',
                                            ct_lastname='$cpr_contactlname',
                                            ct_sex='$applnt_gender',
                                            ct_career='$applnt_career',
                                            ct_cellphone='$applnt_mobile',
                                            ct_email='$applnt_email',
                                            ct_address='$applnt_address',
                                            prov_id='$applntOrg_prov_id',
                                            ct_postcode='$applntOrg_zipcode',
                                            Country_id='$applnt_country_id',
                                            ct_update_datetime=NOW(),
                                            ct_updateBy_id='$case_createBy_id'
                                            WHERE ct_id= '$resultcpr_id'";
                                            $stmt = $this->conn->prepare($sql);
                                            $stmt->execute();
                                          }
                                        }
                                      }else{
                                        $cpr_type = '2';
                                        $cpr_contactfname = '';
                                        $cpr_contactlname = '';
                                        $cpr_contact_person = '';
                                        $cpr_email = '';
                                        $cpr_numbertrade = $applntOrg_trade_number0;
                                        $cpr_companyname = $applntOrg_name0;
                                        $Country_id = $applntOrg_country_id;
                                        $cpr_department = 0;
                                        $cpr_type_import_export = 0;
                                        $my_array_data = json_decode($complnt_contact_prov_id, TRUE);
                                        $value_prov_id = $my_array_data['province_id'];

                                        if($cpr_numbertrade == "" && isset($cpr_numbertrade)){
                                          $sqltem = "and cpr_companyname = '$cpr_companyname' ";
                                        }else{
                                          $sqltem = "and cpr_numbertrade = '$cpr_numbertrade' ";
                                        }

                                        $stmtCorporateCheck = $this->conn->prepare("SELECT cpr_id from Corporate WHERE
                                          cpr_section = ".$Valuecpr_section." and
                                          cpr_type = '$cpr_type' and
                                          cpr_comp_type	= '$cpr_comp_type'  ".$sqltem);

                                          $stmtCorporateCheck->execute();
                                          $resultCorporateCheck = $stmtCorporateCheck->get_result();

                                          if($resultCorporateCheck->num_rows == 0){
                                            ////// insert //////
                                            $resultInsertCorlv1 = $this->insertCorporate($Valuecpr_section,$cpr_type,$cpr_comp_type,
                                            $cpr_numbertrade,$cpr_companyname,$cpr_type_import_export,
                                            $cpr_branch,$cpr_telephone,$cpr_fax,$cpr_email,$cpr_address,$value_prov_id,
                                            $cpr_zipcode,$cpr_department,$cpr_contactfname,
                                            $cpr_contactlname,$Country_id,$cpr_contact_person,
                                            $cpr_import,$cpr_create_datetime,$cpr_createBy_id,$cpr_ststus);

                                          }else{
                                            /////// UPDATE ///////
                                            $resultCorporateCheck = $resultCorporateCheck->fetch_assoc();
                                            $resultcpr_id = $resultCorporateCheck['cpr_id'];
                                            $resultInsertCorlv2 = $this->updateCorporate($Valuecpr_section,$cpr_type,
                                            $cpr_comp_type,$cpr_numbertrade,$cpr_companyname,
                                            $cpr_type_import_export,$cpr_branch,$cpr_telephone,
                                            $cpr_fax,$cpr_email,$cpr_address,$value_prov_id,$cpr_zipcode,$cpr_department,
                                            $cpr_contactfname,$cpr_contactlname,$Country_id,
                                            $cpr_contact_person,$cpr_import,$cpr_update_datetime,$cpr_updateBy_id,$cpr_ststus,$resultcpr_id);

                                          }

                                        }

                                        // /*-----------------------      คนที่ถูกร้องเรียน      -----------------------*/
                                        // *

                                        $Ccpr_numbertrade = $complnt_trade_number;
                                        $Ccpr_companyname = $complnt_name;
                                        $Ccpr_type_import_export = $complnt_import_export;///*

                                        $Ccpr_branch = $complnt_branch;
                                        $Ccpr_telephone = $complnt_contact_tel;
                                        $Ccpr_fax = "";///*
                                        $Ccpr_email = $complnt_contact_email;
                                        $Ccpr_address = $complnt_contact_address;
                                        $Cprov_id = $complnt_contact_prov_id;

                                        $Ccpr_zipcode = $complnt_zipcode;
                                        $Ccpr_department = "";///*
                                        $Ccpr_contactfname = $complnt_contact_name;
                                        $Ccpr_contactlname = "";///*
                                        $CCountry_id = $complnt_country_id;///*
                                        $Ccpr_contact_person = $complnt_contact_name;
                                        $Ccpr_import = 0;
                                        $Ccpr_create_datetime = date("Y-m-d H:i:s");
                                        $Ccpr_createBy_id = $case_createBy_id;
                                        $Ccpr_update_datetime = date("Y-m-d H:i:s");
                                        $Ccpr_updateBy_id = $case_createBy_id;
                                        $Ccpr_ststus = "0";

                                        if($applntOrg_country_id == "" && isset($complnt_country_id)){
                                          $Ccpr_type = 2;
                                        }else{
                                          $Ccpr_type = 1;
                                        }
                                        $Ccpr_comp_type = 2;

                                        if($Valuecpr_section == 2){
                                          $Ccpr_type = 1;
                                        }
                                        //$Capplnt_ident = $applntOrg_trade_number;
                                        //$Ccpr_section = "SELECT compType_section from Complaint_Type  WHERE compType_id = '$compType_id'";

                                        if($Ccpr_numbertrade == "" && isset($Ccpr_numbertrade)){
                                          $sqltem = "and cpr_companyname = '$Ccpr_companyname' ";
                                        }else{
                                          $sqltem = "and cpr_numbertrade = '$Ccpr_numbertrade' ";
                                        }

                                        $stmtCorporateCheck = $this->conn->prepare("SELECT cpr_id from Corporate WHERE
                                          cpr_section = ".$Valuecpr_section." and
                                          cpr_type = '$Ccpr_type' and
                                          cpr_comp_type	= '$Ccpr_comp_type'  ".$sqltem);

                                          $stmtCorporateCheck->execute();
                                          $resultCorporateCheck = $stmtCorporateCheck->get_result();

                                          if($resultCorporateCheck->num_rows == 0){
                                            ////// insert //////
                                            $resultInsertCorlv2 = $this->insertCorporate($Valuecpr_section,$Ccpr_type,$Ccpr_comp_type,
                                            $Ccpr_numbertrade,$Ccpr_companyname,$Ccpr_type_import_export,
                                            $Ccpr_branch,$Ccpr_telephone,$Ccpr_fax,
                                            $Ccpr_email,$Ccpr_address,$Cprov_id,
                                            $Ccpr_zipcode,$Ccpr_department,$Ccpr_contactfname,
                                            $Ccpr_contactlname,$CCountry_id,$Ccpr_contact_person,
                                            $Ccpr_import,$Ccpr_create_datetime,$Ccpr_createBy_id,$Ccpr_ststus);

                                          }else{
                                            /////// UPDATE ///////
                                            $resultCorporateCheck = $resultCorporateCheck->fetch_assoc();
                                            $resultcpr_id = $resultCorporateCheck['cpr_id'];
                                            $resultInsertCorlv2 = $this->updateCorporate($Valuecpr_section,$Ccpr_type,
                                            $Ccpr_comp_type,$Ccpr_numbertrade,$Ccpr_companyname,
                                            $Ccpr_type_import_export,$Ccpr_branch,$Ccpr_telephone,
                                            $Ccpr_fax,$Ccpr_email,$Ccpr_address,
                                            $Cprov_id,$Ccpr_zipcode,$Ccpr_department,
                                            $Ccpr_contactfname,$Ccpr_contactlname,$CCountry_id,
                                            $Ccpr_contact_person,$Ccpr_import,$Ccpr_update_datetime,$Ccpr_updateBy_id,$Ccpr_ststus,$resultcpr_id);

                                          }



                                          // *
                                          // /*-----------------------      End คนที่ถูกร้องเรียน      ------------------*/


                                          if(count($complnt_file) < 1){
                                            mysqli_commit($this->conn);
                                          }

                                          if ($res) {
                                            return $caseid;
                                          } else {
                                            return NULL;
                                          }
                                        } else {
                                          return NULL;
                                        }
                                      }

                                      /*** เพิ่ม field ให้กับ case ***/
                                      public function createComplaintField($key, $value, $caseid,$formSetId_P) {
                                        $stmt = $this->conn->prepare("SELECT fieldset_id FROM Field_Set WHERE fieldset_name = '$key' and  frmset_id IN ($formSetId_P)");
                                        $stmt->execute();
                                        $result = $stmt->get_result();
                                        if($result->num_rows > 0){
                                          $res2 = $result->fetch_assoc();
                                          if($key == "complnt_prov_id" && $value != ''){
                                            // $valuex = json_encode($value);
                                            // $b = json_decode( $valuex );
                                            // $value = $b->province_id;
                                            $my_array_data = json_decode($value, TRUE);
                                            $value = $my_array_data['province_id'];
                                          }
                                          $stmt = $this->conn->prepare("INSERT INTO Field_Values(case_id,fieldset_id,fieldset_value) VALUES('$caseid','$res2[fieldset_id]','$value')");
                                          $result = $stmt->execute();
                                          if (false === $result) {
                                            die('execute() failed: ' . htmlspecialchars($stmt->error));
                                          }
                                        }
                                        $stmt->close();
                                        return $result;
                                      }



                                      /*** แสดง complaint id ที่เลือก , complaint ของผู้ใช้เท่านั้น ***/
                                      public function getComplaint($user_id,$case_id) {

                                        // $stmt = $this->conn->prepare("SELECT * from `Case`  WHERE case_id = '$case_id' AND case_createBy_id = '$user_id' AND case_knowledge_type = '0' ");

                                        // $stmt = $this->conn->prepare("SELECT * from `Case` a INNER join `Incorrect_Type` b on a.incType_id=b.incType_id WHERE a.case_id = '$case_id' AND a.case_createBy_id = '$user_id' AND a.case_knowledge_type = '0'  ");

                                        $stmt = $this->conn->prepare("SELECT *,(select process_type_step FROM
                                          Process c INNER JOIN Process_Type d on c.process_type_id=d.process_type_id
                                          where c.case_id = $case_id
                                          order by c.process_id desc
                                          limit 1 ) as process_type_step from `Case` a left JOIN `Incorrect_Type` b
                                          on a.incType_id=b.incType_id WHERE a.case_id = '$case_id'
                                          AND a.case_createBy_id = '$user_id' AND a.case_knowledge_type = '0' ");

                                          // $stmt = $this->conn->prepare("SELECT  * FROM `Case` a INNER JOIN Message_Noti_App b ON a.case_id = b.case_id where a.case_createBy_id = '$user_id' and a.case_id ='$case_id'  ");

                                          $stmt->execute();
                                          $result = $stmt->get_result();

                                          if($result->num_rows > 0){
                                            $res = $result->fetch_assoc();
                                            $datespilt2 = explode (" ", $res["case_receivedoc_real_datetime"]);
                                            // if($res["case_status"] == "1"){
                                            //   $status = 1;$percen = 25;
                                            // }else if($res["case_status"] == "2"){
                                            //   $status = 2;$percen = 50;
                                            // }else if($res["case_status"] == "3"){
                                            //   $status = 4;$percen = 100;
                                            // }else{
                                            //   $status = 0;$percen = 0;
                                            // }

                                            if($res["case_status"] == "1"){
                                              $status = 1;$percen = 25;
                                            }else if($res["case_status"] == "2"){
                                              $res_status = $this->checkPercen($res["case_id"]);
                                              if($res_status == '1'){
                                                $status = 1;$percen = 25;
                                              }else if($res_status == '3'){
                                                $status = 3;$percen = 75;
                                              }else{
                                                $status = 2;$percen = 50;
                                              }
                                            }else if($res["case_status"] == "3"){
                                              $status = 4;$percen = 100;
                                            }else{
                                              $status = 0;$percen = 0;
                                            }

                                            // if($res["process_type_step"] == "1"){
                                            //   $status = 1;$percen = 25;
                                            // }else if($res["process_type_step"] == "2"){
                                            //   $status = 2;$percen = 50;
                                            // }else if($res["process_type_step"] == "3"){
                                            //   $status = 3;$percen = 75;
                                            // }else if($res["process_type_step"] == "4"){
                                            //   $status = 4;$percen = 100;
                                            // }else{
                                            //   $status = 0;$percen = 0;
                                            // }
                                            $response = array(
                                              "comp_id" => $res['case_id'],
                                              "comp_date" => $datespilt2[0],
                                              "comp_time" => $datespilt2[1],
                                              "comp_caseId" => $res["case_id"],
                                              "comp_resultProcess" => $res["case_close_resultProcess"],
                                              "comp_status" => $res["process_type_step"],
                                              "comp_process" => $status,
                                              "comp_perces" => $percen,
                                              "compType_id" => $res["compType_id"],
                                              "incType_name" => $res["incType_name"],

                                            );
                                            $output[]=$response;
                                            foreach ($output as $key => $product) {
                                              $stmt = $this->conn->prepare("SELECT * from Field_Values a LEFT JOIN Field_Set b ON a.fieldset_id = b.fieldset_id WHERE case_id = '$case_id' ");
                                              $stmt->execute();
                                              $result2 = $stmt->get_result();
                                              while($res2 = $result2->fetch_assoc())
                                              {
                                                if($res2['fieldset_name'] == 'complnt_country_id'){
                                                  $stmt = $this->conn->prepare("SELECT name from Country  WHERE id = '$res2[fieldset_value]' ");
                                                  $stmt->execute();
                                                  $res3 = $stmt->get_result()->fetch_assoc();
                                                  $fieldValue = $res3['name'];
                                                }else if($res2['fieldset_name'] == 'prodType_id'){
                                                  // prodType_id = 46
                                                  $stmt = $this->conn->prepare("SELECT prodType_name from Product_Type  WHERE prodType_id = '$res2[fieldset_value]' ");
                                                  $stmt->execute();
                                                  $res3 = $stmt->get_result()->fetch_assoc();
                                                  $fieldValue = $res3['prodType_name'];
                                                }else if($res2['fieldset_name'] == 'curren_id'){
                                                  $stmt = $this->conn->prepare("SELECT curren_name from Currency  WHERE curren_id = '$res2[fieldset_value]' ");
                                                  $stmt->execute();
                                                  $res3 = $stmt->get_result()->fetch_assoc();
                                                  $fieldValue = $res3['curren_name'];
                                                }else{
                                                  $fieldValue = $res2['fieldset_value'];
                                                }
                                                $response = array(
                                                  "fieldset_id" => $res2['fieldset_id'],
                                                  "fieldset_name" => $res2['fieldset_name'],
                                                  "fieldset_value" => $fieldValue,
                                                );
                                                $output3[]=$response;
                                                $output[$key]['comp_chos'] = $output3 ;
                                              }
                                              $output3 = array();
                                            }
                                            $stmt->close();
                                            return $output;
                                          }else{
                                            $stmt->close();
                                            return NULL;
                                          }
                                        }




                                        /*** แสดง complaint ทั้งหมด , complaint ของผู้ใช้เท่านั้น ***/
                                        public function getAllUserComplaint($user_id,$limit,$offset,$filter,$sort) {

                                          $filtersql = $this->func->filter_sql($filter);
                                          $limitsql  = $this->func->limit_sql($limit,$offset);
                                          $sortsql   = $this->func->sort_sql($sort);



                                          $stmt = $this->conn->prepare("SELECT a.case_id, a.case_status , a.case_receivedoc_real_datetime,a.caseDtl_title FROM `Case` a WHERE  a.case_createBy_id = '$user_id' AND a.case_knowledge_type = '0' ".$filtersql.$sortsql.$limitsql);

                                          $stmt->execute();
                                          $result = $stmt->get_result();
                                          // array_push($result,$sql);
                                          if($result->num_rows > 0){
                                            $stmt->close();
                                            return $result;
                                          }else{
                                            $stmt->close();
                                            return NULL;
                                          }
                                        }

                                        /*** แสดง complaint อย่างละ 2  , complaint ของผู้ใช้เท่านั้น ***/
                                        public function getComplaintType2($user_id) {

                                          //
                                          $stmt = $this->conn->prepare("
                                          (SELECT case_id,case_status,case_receivedoc_real_datetime,caseDtl_title FROM `Case`
                                          WHERE  case_createBy_id = '$user_id'  AND case_status = '0'
                                          ORDER BY case_id DESC LIMIT 2)
                                          UNION
                                          (SELECT case_id,case_status,case_receivedoc_real_datetime,caseDtl_title FROM `Case`
                                          WHERE  case_createBy_id = '$user_id' AND case_knowledge_type = '0' AND (case_status = '1' OR case_status = '2')
                                          ORDER BY `Case`.case_id DESC LIMIT 2)
                                          UNION
                                          (SELECT case_id,case_status,case_receivedoc_real_datetime,caseDtl_title FROM `Case`
                                          WHERE  case_createBy_id = '$user_id' AND case_knowledge_type = '0' AND case_status = '3'
                                          ORDER BY case_id DESC LIMIT 2)");
                                          //
                                          // $stmt = $this->conn->prepare("
                                          // (SELECT case_id,case_status,case_receivedoc_real_datetime,caseDtl_title FROM `Case`
                                          // WHERE  case_createBy_id = '$user_id' AND  case_status = '0'
                                          // ORDER BY case_id DESC LIMIT 2)
                                          // UNION
                                          // (SELECT case_id,case_status,case_receivedoc_real_datetime,caseDtl_title FROM `Case`
                                          // WHERE  case_createBy_id = '$user_id' AND  (case_status = '1' OR case_status = '2')
                                          // ORDER BY case_id DESC LIMIT 2)
                                          // UNION
                                          // (SELECT case_id,case_status,case_receivedoc_real_datetime,caseDtl_title FROM `Case`
                                          // WHERE  case_createBy_id = '$user_id' AND  AND case_status = '3'
                                          // ORDER BY case_id DESC LIMIT 2)");

                                          $stmt->execute();
                                          $result = $stmt->get_result();
                                          if($result->num_rows > 0){
                                            $stmt->close();
                                            return $result;

                                          }else{
                                            $stmt->close();
                                            return NULL;
                                          }
                                        }


                                        /*** แสดง badge ทั้งหมด , badge ของผู้ใช้เท่านั้น ***/
                                        public function getAllBadge($user_id) {

                                          // $stmt = $this->conn->prepare("SELECT noti_id FROM `Case` a INNER JOIN Log_Notification b ON a.case_id = b.case_id WHERE case_createBy_id = '$user_id' AND caseCh_id = '1' AND noti_status = '0' AND noti_read = '0' ");
                                          $stmt = $this->conn->prepare("SELECT case_id FROM `Message_Noti_App` where msgNotiApp_noti_status = '0' and msgNoti_status='0' and member_id='$user_id' ");
                                          $stmt->execute();
                                          $result = $stmt->get_result();
                                          if($result->num_rows > 0){
                                            $stmt->close();
                                            return $result->num_rows;
                                          }else{
                                            $stmt->close();
                                            return NULL;
                                          }
                                        }

                                        /*** แสดง notification ทั้งหมด , notification ของผู้ใช้เท่านั้น ***/
                                        public function getAllUserNoti($user_id,$limit,$offset,$filter,$sort) {

                                          $filtersql = $this->func->filter_sql($filter);
                                          $limitsql  = $this->func->limit_sql($limit,$offset);
                                          $sortsql   = $this->func->sort_sql($sort);


                                          // $stmt = $this->conn->prepare("SELECT noti_id,a.case_id,caseDtl_title,noti_datetime,noti_type,noti_read FROM `Case` a INNER JOIN Log_Notification b ON a.case_id = b.case_id WHERE case_createBy_id = '$user_id' AND caseCh_id = '1' AND noti_status = '0' ".$filtersql.$sortsql.$limitsql);
                                          // $stmt = $this->conn->prepare("SELECT noti_id,a.case_id,caseDtl_title,noti_datetime,noti_type,noti_read FROM `Case` a  WHERE case_createBy_id = '$user_id' AND caseCh_id = '1' AND noti_status = '0' ".$filtersql.$sortsql.$limitsql);


                                          // $stmt = $this->conn->prepare("SELECT * FROM `Case` a INNER JOIN Message_Noti_App b ON a.case_id = b.case_id WHERE a.case_createBy_id = '$user_id' AND a.caseCh_id = '1' ".$filtersql.$sortsql.$limitsql);

                                          $stmt = $this->conn->prepare("SELECT  *,(select process_type_step FROM
                                            Process c INNER JOIN Process_Type d on c.process_type_id=d.process_type_id
                                            where c.case_id = a.case_id
                                            order by c.process_id desc
                                            limit 1) as process_type_step FROM `Case` a
                                            INNER JOIN Message_Noti_App b ON a.case_id = b.case_id
                                            where a.case_createBy_id = '$user_id' ".$filtersql."
                                            order by msgNotiApp_datetime desc ".$limitsql);



                                            $stmt->execute();
                                            $result = $stmt->get_result();

                                            //
                                            // $stmt = $this->conn->prepare("SELECT process_type_step as countStatus FROM Process a LEFT JOIN Process_Type b ON a.process_type_id=b.process_type_id WHERE case_id = '$case_id' order by a.process_id desc limit 1 ");

                                            //
                                            // $stmt->execute();
                                            // $result = $stmt->get_result();
                                            // $tmp = array();
                                            // $tmp2 = array();
                                            // if($result->num_rows > 0){
                                            // while($res = $result->fetch_assoc()){
                                            //     $stmt1 = $this->conn->prepare("
                                            //       select process_type_step FROM
                                            //       Process c INNER JOIN Process_Type d on c.process_type_id=d.process_type_id
                                            //       where c.case_id = '$res[case_id]'
                                            //       order by c.process_id desc
                                            //       limit 1
                                            //     ");
                                            //     $stmt1->execute();
                                            //     // $tmp2 = $stmt1->get_result();
                                            //     $tmp2 = $stmt1->get_result()->fetch_assoc();
                                            //     //
                                            //     // $tmp["msgNotiApp_id"] = $res["msgNotiApp_id"];
                                            //     // $tmp["msgNotiApp_datetime"] = $res['msgNotiApp_datetime'];
                                            //     // $tmp["msgNotiApp_step"] = $res["msgNotiApp_step"];
                                            //     // $tmp["msgNotiApp_read_status"] = $res["msgNotiApp_read_status"];
                                            //     // $tmp["case_id"] = $res["case_id"];
                                            //     // $tmp["process_type_step"]=$tmp2;
                                            //
                                            //     $tmp[] = array(
                                            //       "msgNotiApp_id" => $res["msgNotiApp_id"],
                                            //       "msgNotiApp_datetime" => $res['msgNotiApp_datetime'],
                                            //       "msgNotiApp_step" => $res["msgNotiApp_step"],
                                            //       "msgNotiApp_read_status" => $res["msgNotiApp_read_status"],
                                            //       "case_id" => $res["case_id"],
                                            //       "process_type_step" => $tmp2["process_type_step"],
                                            //       "sql" => "SELECT * FROM `Case` a INNER JOIN Message_Noti_App b ON a.case_id = b.case_id WHERE a.case_createBy_id = '$user_id' AND a.caseCh_id = '1' ".$filtersql.$sortsql.$limitsql
                                            //
                                            //     );
                                            //
                                            //
                                            //     array_push($result, $tmp);
                                            //   }
                                            // }


                                            if($result->num_rows > 0){
                                              $stmt->close();
                                              return $result;
                                            }else{
                                              $stmt->close();
                                              return NULL;
                                            }
                                          }



                                          /*** แสดง message ทั้งหมด , message ของผู้ใช้เท่านั้น ***/
                                          public function getAllUserMessage($user_id,$limit,$offset,$filter,$sort){
                                            /*********** start real ************/
                                            //$stmt = $this->conn->prepare("SELECT t.* FROM tasks t, user_tasks ut WHERE t.id = ut.task_id AND ut.user_id = ?".$filtersql.$sortsql.$limitsql);
                                            //$stmt->bind_param("i", $user_id);
                                            //$stmt->execute();
                                            //$tasks = $stmt->get_result();
                                            //
                                            $filtersql = $this->func->filter_sql($filter);
                                            $limitsql  = $this->func->limit_sql($limit,$offset);
                                            $sortsql   = $this->func->sort_sql($sort);
                                            //
                                            // $stmt = $this->conn->prepare("SELECT * FROM `Message_Box_Log` a INNER JOIN Message_Box b on  a.msgBox_id = b.msgBox_id where b.msgBox_type = '1' and msgBox_status = '0' and recipient_id = '".$user_id."' order by msgBoxLog_id desc".$limitsql);
                                            //
                                            //
                                            // $stmt->execute();
                                            // $result = $stmt->get_result();

                                            $case_id_arr = array();
                                            $sql_box = "SELECT * FROM `Case` WHERE caseCh_id in (1,2) AND case_createBy_id = '".$user_id."'";
                                            $stmt1 = $this->conn->prepare($sql_box);
                                            $stmt1->execute();
                                            $query = $stmt1->get_result();
                                            if($query->num_rows > 0){
                                              while ($re = $query->fetch_assoc()) {
                                                $case_id_arr['case_id'] = $re['case_id'];
                                                array_push($case_id_arr,$case_id_arr['case_id']);
                                              }
                                              $case = "";
                                              $i =0;
                                              foreach ($case_id_arr as $value) {
                                                if($i == 0){
                                                  $case =  $value;
                                                }else {
                                                  $case .=  ",".$value;
                                                }
                                                $i++;
                                              }
                                              if($case == ""){
                                                $case = "''";
                                              }
                                              // $sql_box = "SELECT * FROM `Message_Box`
                                              // WHERE ((case_id IN ($case) AND sender_type = 2)
                                              // OR (sender_type = 1 AND sender_id = '".$user_id."')
                                              // OR (sender_type = 0 AND sender_id = '".$user_id."')) AND msgBox_status = 0 AND msgBoxRef_id = 0 ORDER BY msgBox_id DESC ".$limitsql;

                                              $sql_box = "SELECT c.msgBox_id,c.msgBox_message,c.msgBox_datetime,
                                              (SELECT b.msgBox_read_status FROM `Message_Box` a INNER JOIN Message_Box_Log b on a.msgBox_id = b.msgBox_id
                                                where `b`.`recipient_id` = '".$user_id."' and msgBoxRef_id = c.msgBox_id and b.msgBox_read_status = 0  LIMIT 1) as readmsg
                                                FROM `Message_Box` c
                                                WHERE ((case_id IN ($case) AND sender_type = 2)
                                                OR (sender_type = 1 AND sender_id = '".$user_id."')
                                                OR (sender_type = 0 AND sender_id = '".$user_id."')) AND msgBox_status = 0 AND msgBoxRef_id = 0 ".$filtersql." ORDER BY msgBox_id DESC".$limitsql;

                                                $stmt = $this->conn->prepare($sql_box);
                                                // $stmt->bind_param("i", $user_id);
                                                $stmt->execute();
                                                $result = $stmt->get_result();
                                              }

                                              if($result->num_rows == 0){
                                                $result=null;
                                              }


                                              /*********** end real ************/

                                              /*********** start mock ************/
                                              // $result = '{
                                              //     "current_field":0,
                                              //     "field_count":2,
                                              //     "lengths":[
                                              //         { "message_id":1,"message_name":"ข้อพิพาทของคุณ เรื่องลูกค้าไม่ยอมชำระเงินเป็นเวลา 1 ปี ส่งต่อไปยัง....50%","message_date":"13/03/2560","message_time":"09.30"},
                                              //         { "message_id":2,"message_name":"ข้อพิพาทของคุณ เรื่องลูกค้าไม่ยอมชำระเงินเป็นเวลา 2 ปี ส่งต่อไปยัง....75%","message_date":"13/03/2560","message_time":"09.30"},
                                              //         { "message_id":3,"message_name":"ข้อพิพาทของคุณ เรื่องลูกค้าไม่ยอมชำระเงินเป็นเวลา 3 ปี ส่งต่อไปยัง....100%","message_date":"13/03/2560","message_time":"09.30"},
                                              //         { "message_id":4,"message_name":"ข้อพิพาทของคุณ เรื่องลูกค้าไม่ยอมชำระเงินเป็นเวลา 4 ปี ส่งต่อไปยัง....100%","message_date":"13/03/2560","message_time":"09.30"},
                                              //         { "message_id":5,"message_name":"ข้อพิพาทของคุณ เรื่องลูกค้าไม่ยอมชำระเงินเป็นเวลา 5 ปี ส่งต่อไปยัง....100%","message_date":"13/03/2560","message_time":"09.30"},
                                              //         { "message_id":6,"message_name":"ข้อพิพาทของคุณ เรื่องลูกค้าไม่ยอมชำระเงินเป็นเวลา 6 ปี ส่งต่อไปยัง....100%","message_date":"13/03/2560","message_time":"09.30"}
                                              //       ]
                                              //     ,
                                              //     "num_rows":3,
                                              //     "type":0
                                              //  }';
                                              //  $result = json_decode($result);
                                              /*********** end mock ************/
                                              if($result->num_rows > 0){
                                                //  $stmt->close();
                                                return $result;
                                              }else{
                                                //  $stmt->close();s
                                                return NULL;
                                              }
                                            }

                                            /*** แสดง message ที่เลือก , message ของผู้ใช้เท่านั้น ***/
                                            public function getMessages($id) {
                                              /*********** start real ************/
                                              // $stmt = $this->conn->prepare("SELECT * ,
                                              // (select concat(member_fname,' ',member_lname ) FROM Member where member_id = sender_id) as sendfrom,
                                              // (select concat(member_fname,' ',member_lname ) FROM Member where member_id = recipient_id) as sendto ,
                                              // (select caseDtl_title from `Case` where case_id = a.case_id ) as message_name
                                              // FROM Message_Box a INNER join Message_Box_Log b on a.msgBox_id = b.msgBox_id where a.msgBox_id = '".$id."'");
                                              // // $stmt->bind_param("i", $user_id);
                                              // $stmt->execute();
                                              // $result = $stmt->get_result();
                                              $data =array();
                                              $sql = "SELECT a.case_id as caseid ,caseDtl_title,case_create_datetime FROM `Case`a
                                              inner join Message_Box b on a.case_id = b.case_id
                                              where msgBox_id = '".$id."'";
                                              $stmt1 = $this->conn->prepare($sql);
                                              $stmt1->execute();
                                              $result2 = $stmt1->get_result()->fetch_assoc();

                                              $sql_bm = "SELECT
                                              c.case_id,
                                              c.caseDtl_title,
                                              em.emp_firstname,
                                              em.emp_lastname,
                                              em.emp_img_path,
                                              mb.msgBox_message,
                                              mb.msgBox_id,
                                              mb.sender_type,
                                              mb.sender_id,
                                              m.member_fname,
                                              m.member_lname,
                                              m.member_img,
                                              m.member_type,
                                              mb.msgBoxRef_id,
                                              mb.msgBox_datetime,
                                              mc.member_comp_id,
                                              mc.member_comp_img,
                                              mc.member_comp_name
                                              FROM `Case` AS c
                                              LEFT JOIN `Message_Box` AS mb ON c.case_id = mb.case_id
                                              LEFT JOIN `Employee` AS em ON mb.sender_id = em.emp_id
                                              LEFT JOIN `Member` AS m ON mb.sender_id = m.member_id
                                              LEFT JOIN `Member_comp` AS mc ON m.member_id = mc.member_id
                                              WHERE mb.msgBox_id = '".$id."' OR mb.msgBoxRef_id = '".$id."' ORDER BY mb.msgBox_id Desc";

                                              $stmt = $this->conn->prepare($sql_bm);
                                              $stmt->execute();
                                              $datadatail = array();
                                              $dataAttachfile = array();

                                              $result = $stmt->get_result();
                                              // $test = $result->fetch_assoc();

                                              if($result->num_rows > 0){
                                                while($res = $result->fetch_assoc()){
                                                  $dataAttachfile = array();

                                                  $datespilt = explode (" ", $res["msgBox_datetime"]);
                                                  $message_to = $res['member_comp_name'];
                                                  if ($res['member_comp_name']==Null) {
                                                    $message_to = $res['emp_firstname']." ".$res['emp_lastname'];
                                                  }
                                                  $Attachfile="SELECT * FROM `Message_Box_Attachfile` where msgBox_id = '".$res['msgBox_id']."'";
                                                  $stmt3 = $this->conn->prepare($Attachfile);
                                                  $stmt3->execute();
                                                  $result3= $stmt3->get_result();
                                                  if($result3->num_rows > 0){
                                                    while ($dataattac = $result3->fetch_assoc()) {
                                                      $msgBoxAttach_title=$dataattac['msgBoxAttach_title'];
                                                      if ($msgBoxAttach_title=="") {
                                                        $msgBoxAttach_title=$dataattac['msgBoxAttach_file_name'];
                                                      }
                                                      array_push($dataAttachfile,array(
                                                        'msgBoxAttach_title'=>$msgBoxAttach_title,
                                                        'msgBoxAttach_file_path'=>BASE_URL.$dataattac['msgBoxAttach_file_path']
                                                      ));
                                                    }
                                                  }
                                                  array_push($datadatail,array(
                                                    'msgBox_message'=>$res['msgBox_message'],
                                                    'message_date' => $datespilt[0],
                                                    'message_time' =>$datespilt[1],
                                                    'case_create_datetime'=>$res['case_create_datetime'],
                                                    'message_from' => "ผู้ส่ง",
                                                    'message_fulltime' => $res["msgBox_datetime"],
                                                    'message_to'=>$message_to,
                                                    'Attachfile'=>$dataAttachfile
                                                  ));
                                                }
                                              }
                                              array_push($data,array(
                                                'message_id' => $id ,
                                                'message_name'=>$datadatail,
                                                'caseDtl_title'=>$result2['caseDtl_title'],
                                                'msgBox_datetime'=>$result2['case_create_datetime'],
                                                'message_caseid' => $result2['caseid']
                                              ));
                                              // array_push($result["message_name"], $test);


                                              /*********** end real ************/

                                              /*********** start mock ************/
                                              // $result = '{
                                              //     "current_field":0,
                                              //     "field_count":2,
                                              //     "lengths":[
                                              //         { "message_id":1,"message_name":"ลูกค้าไม่ยอมชำระเงินเป็นเวลา 1 ปี","message_date":"13/03/2560","message_time":"09.30","message_caseid":"23456","message_from":"วิภา เหล่าประภัสสร","message_text":"ทางเราขะขอข้อมูลเพิ่มเติมเกี่ยวกับเรื่องร้องเรียน กรณีลูกค้าไม่ยอมชำระเงินเป็นเวลา 1 ปี ในส่วนของข้อมูล รายละเอียด สินค้าที่ได้มีการสั่งซื้อจาก บริษัทคู่กรณีเพิ่มเติม","message_to":"อรพิน โชติภา"}
                                              //       ]
                                              //     ,
                                              //     "num_rows":3,
                                              //     "type":0
                                              //  }';
                                              //  $result = json_decode($result);
                                              //  /*********** end mock ************/
                                              if($result2->num_rows > 0){
                                                //  $stmt->close(); // code real
                                                //  $result = (array)$result->lengths; // code mock
                                                // return $result;
                                                return $data;
                                              }else{
                                                $stmt->close(); // code real
                                                return $data;
                                              }
                                            }

                                            /*** อัพเดทเงื่อนไขการแจ้งข้อร้องเรียน , ผู้ใช้สามารถอัพเดทของตัวเองได้เท่านั้น ***/
                                            public function updateUserCondition($member_id) {
                                              //$stmt = $this->conn->prepare("UPDATE Member set member_condition = '1' WHERE member_id = ?");
                                              $stmt = $this->conn->prepare("UPDATE Member set member_condition = '2' WHERE member_id = ?");

                                              $stmt->bind_param("s",$member_id);
                                              $stmt->execute();

                                              $stmt = $this->conn->prepare("UPDATE Member set member_condition = '1' WHERE member_id = ?");

                                              $stmt->bind_param("s",$member_id);
                                              $stmt->execute();
                                              $num_affected_rows = $stmt->affected_rows;
                                              $stmt->close();
                                              return $num_affected_rows > 0;
                                            }

                                            /*เดียวลบ*/
                                            public function updateUserCondition2($member_id) {
                                              //$stmt = $this->conn->prepare("UPDATE Member set member_condition = '1' WHERE member_id = ?");
                                              $stmt = $this->conn->prepare("UPDATE Member set member_condition = '2' WHERE member_id = ?");

                                              $stmt->bind_param("s",$member_id);
                                              $stmt->execute();

                                              // $stmt = $this->conn->prepare("UPDATE Member set member_condition = '1' WHERE member_id = ?");
                                              //
                                              // $stmt->bind_param("s",$member_id);
                                              // $stmt->execute();
                                              $num_affected_rows = $stmt->affected_rows;
                                              $stmt->close();
                                              return $num_affected_rows > 0;
                                            }
                                            /*เดียวลบ*/


                                            /*** อัพเดท User , ผู้ใช้สามารถอัพเดท User ได้เท่านั้น ***/


                                            /*** แก้ไขบริษัท ให้กับ user ***/
                                            public function upDataUserComp($user_id, $company_name, $company_branch, $company_taxid, $company_address, $company_prov_id, $company_postcode,$company_country_id, $company_phone, $company_fax, $comp_img) {
                                              $stmt = $this->conn->prepare("UPDATE Member_comp set
                                                member_comp_name = '$company_name',
                                                member_comp_branch = '$company_branch',
                                                member_comp_taxid = '$company_taxid',
                                                member_comp_address = '$company_address',
                                                prov_id = '$company_prov_id',
                                                member_comp_postcode = '$company_postcode',
                                                country_id = '$company_country_id',
                                                member_comp_phone = '$company_phone',
                                                member_comp_fax = '$company_fax'
                                                WHERE member_id = '$user_id' ");
                                                $result = $stmt->execute();
                                                $stmt->close();
                                                if ($result) {
                                                  if($comp_img != ""){
                                                    $stmt = $this->conn->prepare("SELECT * from Member_comp WHERE member_id = '$user_id' ");
                                                    $stmt->execute();$result2 = $stmt->get_result();
                                                    $res2 = $result2->fetch_assoc();
                                                    $success2 = $this->func->uploadImageBase64($comp_img, "img_membercomp" , $res2['member_comp_id']);
                                                    if($success2!=''){
                                                      $stmt = $this->conn->prepare("UPDATE Member_comp set member_comp_img = '$success2' WHERE member_comp_id = '$res2[member_comp_id]' ");
                                                      $stmt->execute();
                                                    }
                                                  }
                                                }
                                                return $result;
                                              }

                                              /*** แก้ไข Read ให้กับ noti ***/
                                              public function updateReadNoti($noti_id) {
                                                // $stmt = $this->conn->prepare("UPDATE Log_Notification set
                                                //   noti_read = '1'
                                                //   WHERE noti_id = '$noti_id' ");

                                                $stmt = $this->conn->prepare("UPDATE Message_Noti_App set
                                                  msgNotiApp_read_status = '1',msgNotiApp_read_datetime = now()
                                                  WHERE msgNotiApp_id = '$noti_id' ");
                                                  $result = $stmt->execute();
                                                  $stmt->close();
                                                  return $result;
                                                }

                                                /*** update noti all of noti page ***/
                                                public function updateReadNotiAll($memid) {
                                                  $stmt = $this->conn->prepare("UPDATE Message_Noti_App set
                                                    msgNotiApp_noti_status = '1',msgNotiApp_noti_datetime = now()
                                                    WHERE member_id = '$memid' and msgNotiApp_noti_status = '0' ");
                                                    $result = $stmt->execute();
                                                    // $txt[] = "UPDATE Message_Noti_App set
                                                    //     msgNotiApp_noti_status = '1',msgNotiApp_noti_datetime = now()
                                                    //     WHERE member_id = '$memid' ";
                                                    $stmt->close();
                                                    return $result;
                                                  }

                                                  public function updateReadMessage($userid,$memid) {
                                                    $sql = "SELECT a.msgBox_id FROM `Message_Box` a INNER JOIN Message_Box_Log b on a.msgBox_id = b.msgBox_id
                                                    where `b`.`recipient_id` = '".$userid."' and a.msgBoxRef_id = '".$memid."' and b.msgBox_read_status = 0";
                                                    $stmt1 = $this->conn->prepare($sql);
                                                    $stmt1->execute();
                                                    $result2 = $stmt1->get_result();
                                                    // $result2 = $stmt1->get_result()->fetch_assoc();
                                                    while ($data = $result2->fetch_assoc()) {
                                                      $stmt = $this->conn->prepare("UPDATE Message_Box_Log set
                                                        msgBox_read_status = '1',msgBox_read_datetime = now()
                                                        WHERE msgBox_id = ".$data['msgBox_id']);

                                                        $result = $stmt->execute();
                                                      }


                                                      // $stmt = $this->conn->prepare("UPDATE Message_Noti_App set
                                                      //     msgNotiApp_noti_status = '1',msgNotiApp_noti_datetime = now()
                                                      //     WHERE member_id = '$memid' and msgNotiApp_noti_status = '0' ");
                                                      // $result = $stmt->execute();
                                                      // $txt[] = "UPDATE Message_Noti_App set
                                                      //     msgNotiApp_noti_status = '1',msgNotiApp_noti_datetime = now()
                                                      //     WHERE member_id = '$memid' ";
                                                      // $stmt->close();
                                                      return $result;
                                                    }


                                                    /*** ลบ Noti ***/
                                                    public function DeleteNoti($noti_id) {
                                                      // $stmt = $this->conn->prepare("UPDATE Log_Notification set
                                                      //   noti_status = '1'
                                                      //   WHERE noti_id = '$noti_id' ");
                                                      // $result = $stmt->execute();
                                                      // $stmt->close();
                                                      // return $result;

                                                      $stmt = $this->conn->prepare("UPDATE Message_Box set
                                                        msgBox_status = '1'
                                                        WHERE msgBox_id = '$noti_id' ");
                                                        $result = $stmt->execute();
                                                        $stmt->close();
                                                        return $result;
                                                      }


                                                      /*** เปลี่ยนภาษา ***/
                                                      public function updateLang($OnOff,$user_id) {
                                                        $stmt = $this->conn->prepare("UPDATE Member set
                                                          member_lang = '$OnOff'
                                                          WHERE member_id = '$user_id' ");
                                                          $result = $stmt->execute();
                                                          $stmt->close();
                                                          return $result;
                                                        }

                                                        /*** เปิดปิด noti ***/
                                                        public function updateNoti($OnOff,$user_id) {
                                                          $stmt = $this->conn->prepare("UPDATE Member set
                                                            member_noti = '$OnOff'
                                                            WHERE member_id = '$user_id' ");
                                                            $result = $stmt->execute();
                                                            if (false === $result) {
                                                              die('execute() failed: ' . htmlspecialchars($stmt->error));
                                                            }
                                                            $stmt->close();
                                                            return $result;
                                                          }

                                                          // /************ หาสถานที่เดียวกัน *********/
                                                          public function feedNew($user_id,$location,$widthphone,$notID) {
                                                            $sql = "SELECT *,(select count(*) from data_photos WHERE photo_location = '".$location."' ) as maxvalues , a.user_id as userID FROM `data_photos` a
                                                            left JOIN data_feeling_tx c on a.feeling_tx_id = c.feeling_tx_id
                                                            left JOIN data_user_account b on a.user_id = b.user_id
                                                            LEFT join data_country d on d.country_id = b.country_id
                                                            LEFT join data_TypeLocation e on a.TypeLocation_id = e.TypeLocation_id
                                                            LEFT JOIN data_get_tag f on a.user_id = f.user_id
                                                            WHERE photo_location LIKE '%".$location."%' AND photo_id NOT IN ($notID)
                                                            ORDER BY photo_id Asc LIMIT 1 ";
                                                            // echo $sql;
                                                            $stmt = $this->conn->prepare($sql);
                                                            $stmt->execute();

                                                            $result = $stmt->get_result();


                                                            if($result->num_rows > 0){

                                                              $stmt->close();
                                                              $i=1;
                                                              $output = array();
                                                              $height = 0;
                                                              while($res = $result->fetch_assoc())
                                                              {
                                                                // print_r($res);
                                                                // photo_like

                                                                $maxvalue = $res['maxvalues'];
                                                                $sql2="SELECT * FROM data_photo_like where photo_id = '".$res['photo_id']."' and user_id=".$user_id;
                                                                $stmt2 = $this->conn->prepare($sql2);
                                                                $stmt2->execute();
                                                                $result2 = $stmt2->get_result();
                                                                $status_like = false;
                                                                if ($result2->num_rows>0) {
                                                                  $status_like = true;
                                                                }
                                                                // bookmark
                                                                $sql2="SELECT * FROM data_photo_bookmark where photo_id = '".$res['photo_id']."' and user_id=".$user_id;
                                                                $stmt2 = $this->conn->prepare($sql2);
                                                                $stmt2->execute();
                                                                $result2 = $stmt2->get_result();
                                                                $status_bookmark = false;
                                                                if ($result2->num_rows>0) {
                                                                  $status_bookmark = true;
                                                                }


                                                                $sql2="SELECT * FROM data_follow where user_id = '".$user_id."' and follow_user=". $res["userID"];
                                                                $stmt2 = $this->conn->prepare($sql2);
                                                                $stmt2->execute();
                                                                $result2 = $stmt2->get_result();
                                                                $status_Follow = false;
                                                                if ($result2->num_rows>0) {
                                                                  $follow = 1;
                                                                }else{
                                                                  $follow = 0;
                                                                }
                                                                $textLocation ="";
                                                                $nameLocation = "";
                                                                if (sizeof(explode(", ",$res['photo_location']))>1) {
                                                                  for ($i=0; $i < sizeof(explode(", ",$res['photo_location'])); $i++) {
                                                                    if ($i==0) {
                                                                      $nameLocation = explode(", ",$res['photo_location'])[$i];
                                                                      $textLocation.="<b>".explode(", ",$res['photo_location'])[$i]."</b>, ";
                                                                    }else if($i==sizeof(explode(", ",$res['photo_location']))-1){
                                                                      $textLocation.="<b>".explode(", ",$res['photo_location'])[$i]."</b>";
                                                                    }else{
                                                                      $textLocation.=explode(", ",$res['photo_location'])[$i].", ";
                                                                    }
                                                                  }
                                                                }else{
                                                                  $nameLocation = $res['photo_location'];
                                                                  $textLocation = $res['photo_location'];
                                                                }

                                                                // หาระยะทาง
                                                                $distance = "";
                                                                // if ($res['photo_la']!=""&&$res['photo_long']!="") {
                                                                //   $to=$res['photo_la'].",".$res['photo_long'];
                                                                //   $data = $this->curl('https://maps.googleapis.com/maps/api/directions/json?origin='.$from.'&destination='.$to.'&sensor=false&key='.key_map,"");
                                                                //   if ($data['status']=="OK") {
                                                                //     $distance = $data['routes'][0]['legs'][0]['distance']['text'];
                                                                //   }
                                                                // }


                                                                // เวลาห่างที่โพส
                                                                $start  = date_create($res['photo_createdate']);
                                                                $end 	= date_create(); // Current time and date
                                                                $diff  	= date_diff( $start, $end );
                                                                $Arraytime =[
                                                                  [$diff->y,'years'],
                                                                  [$diff->m,'months'],
                                                                  [$diff->d,'d'],
                                                                  [$diff->h,'hr'],
                                                                  [$diff->i,'min'],
                                                                  [$diff->s,'sec'],
                                                                ];
                                                                $time = "";
                                                                for ($i=0; $i < sizeof($Arraytime) ; $i++) {
                                                                  if ($Arraytime[$i][0]!=0) {
                                                                    $time = $Arraytime[$i][0]." ".$Arraytime[$i][1];
                                                                    break;
                                                                  }
                                                                }

                                                                $sum_like = $this->count_number('data_photo_like','photo_id',$res['photo_id']);
                                                                $tmp=$this->getFollow($res['user_id']);
                                                                $response = array(
                                                                  "photo_id" => $res['photo_id'],
                                                                  "photo_caption" => html_entity_decode($res['photo_caption']),
                                                                  "photo_location" => $res['photo_location'],
                                                                  // "photo_locationText" => $textLocation,
                                                                  "photo_locationText" => $res['photo_location'],
                                                                  "photo_la" => $res['photo_la'],
                                                                  "follow" => $follow ,
                                                                  "photo_long" => $res['photo_long'],
                                                                  "photo_share" => $res['photo_share'],
                                                                  "TypeLocation_id" => $res['TypeLocation_id'],
                                                                  "TypeLocation_name" => $res['TypeLocation_name'],
                                                                  "photo_province" => $res['photo_province'],
                                                                  'time'=>$time,
                                                                  "user_id" => $res['userID'],
                                                                  "user_firstname" => $res['user_firstname'],
                                                                  "user_lastname" => $res['user_lastname'],
                                                                  "user_path_img" => BASE_URL.$res['user_path_img'],
                                                                  "country_name_th" => $res['country_name_th'],
                                                                  "country_name_en" => $res['country_name_en'],
                                                                  "feeling_id" => $res['feeling_tx_id'],
                                                                  "feeling_name" => $res['feeling_tx_name'],
                                                                  "photo_img" => BASE_URL.$res['photo_path_img'],
                                                                  "photo_img_Full" => BASE_URL.$res['photo_path_img_normal'],
                                                                  "user_img" => BASE_URL.$res['user_path_img'],
                                                                  "sum_like" => $sum_like,
                                                                  "followers" => $tmp['followers'],
                                                                  "following" => $tmp['following'],
                                                                  "status_like" =>$status_like,
                                                                  "status_bookmark"=>$status_bookmark,
                                                                  'linkshared'=>BASE_URL_WEB.'OpenGraph.php?method=share&user=user&id='.$res['photo_id'],
                                                                  'sizeheight'=>$this->func->getsize('../../'.$res['photo_path_img'],$widthphone),
                                                                  // 'numtype'=>$numLoad,
                                                                  // 'positionY'=>$height,
                                                                  // 'nameLocation'=>$nameLocation,
                                                                  'distance'=>$distance,
                                                                  'room_name'=>$this->get_room_name($user_id,$res['userID'])."",
                                                                  // 'maxvalues'=>
                                                                  'status_show'=>true
                                                                );


                                                                // if($from&&$explore=="My Current Location "){
                                                                //   $distance =getDistancegetDistance(explode(',',$from)[0],explode(',',$from)[1],$res['photo_la'],$res['photo_long']);
                                                                //   if ($distance>=0&&$distance<20) {
                                                                //     array_push($output,$response);
                                                                //   }
                                                                // }else if($from&&$explore=="Distance"){
                                                                //    $dis= explode('/',$from)[1];
                                                                //    $froms = explode('/',$from)[0];
                                                                //    $distance = $this->func->getDistance(explode(',',$froms)[0],explode(',',$froms)[1],$res['photo_la'],$res['photo_long']);
                                                                //   if ($distance>=0&&$distance<$dis) {
                                                                //     array_push($output,$response);
                                                                //   }
                                                                // }else{
                                                                //   array_push($output,$response);
                                                                // }
                                                                $output[] =  $response;
                                                                $height=$height+$this->func->getsize('../../'.$res['photo_path_img'],$widthphone);

                                                              }

                                                              return   array($output,$maxvalue);
                                                            }else{
                                                              $stmt->close();
                                                              return NULL;
                                                            }
                                                          }













                                                        }

                                                        ?>
