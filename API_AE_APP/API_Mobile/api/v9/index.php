<?php
// ini_set('memory_limit','256M');
// ini_set('gd.jpeg_ignore_warning', true);
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
//exec("chmod -R 777 ../../data/MemberImage");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , X-Requested-With, Authorization');
header('Content-Type: text/html; charset=utf-8');


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Content-Type: application/json');
}




require '../include/vendor/autoload.php';
require_once 'DbHandler.php';
require_once '../include/PassHash.php';
require '.././libs/Slim/Slim.php';
require_once "../libs/PHPMailer-5.2.5/class.phpmailer.php";
require_once "../omise/config.php";




use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\RedirectUrls;
use PayPal\Api\Transaction;




\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$user_id = NULL;

date_default_timezone_set("Asia/Bangkok");
set_time_limit(0);

/*** test ***/
$app->post('/savephotoold', function() use ($app) {
  $db = new DbHandler();
  $result = $db->savephotoold();
  $response = array();
  if ($result != NULL) {
    $response["res_code"] = "00";
    $response["res_text"] = "แสดงข้อมูลสำเร็จ";
    echoRespnse(200, $response);
  } else {
    $response["res_code"] = "01";
    $response["res_text"] = "ไม่พบข้อมูล";
    echoRespnse(200, $response);
  }
});

$app->post('/upload_img_review', function() use ($app) {
  $db = new DbHandler();
  $response = array();
  $result = array();
  $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
  $image = htmlspecialchars($app->request->post('img'), ENT_QUOTES);
  $booking_id = htmlspecialchars($app->request->post('booking_id'), ENT_QUOTES);
  $result = $db->upload_img_review($user_id,$image,$booking_id);
  if ($result != NULL) {
    $response["res_code"] = "00";
    $response["res_text"] = "แสดงข้อมูลสำเร็จ";
    $response["res_result"] = $result;
    echoRespnse(200, $response);
  } else {
    $response["res_code"] = "01";
    $response["res_text"] = "ไม่พบข้อมูล";
    echoRespnse(200, $response);
  }
});

$app->post('/package_rate', function() use ($app) {
  $db = new DbHandler();
  $response = array();
  $result = array();
  $Package_ID = htmlspecialchars($app->request->post('Package_ID'), ENT_QUOTES);
  $Booking_Code = htmlspecialchars($app->request->post('Booking_Code'), ENT_QUOTES);
  $User_ID = htmlspecialchars($app->request->post('User_ID'), ENT_QUOTES);
  $Score = htmlspecialchars($app->request->post('Score'), ENT_QUOTES);
  $comment = htmlspecialchars($app->request->post('comment'), ENT_QUOTES);

  $result = $db->package_rate_save($Package_ID,$Booking_Code,$User_ID,$Score,$comment);
  if ($result != true) {
    $response["res_code"] = "00";
    $response["res_text"] = "แสดงข้อมูลสำเร็จ";
    echoRespnse(200, $response);
  } else {
    $response["res_code"] = "01";
    $response["res_text"] = "ไม่พบข้อมูล";
    echoRespnse(200, $response);
  }
});


/******* SAVE PHOTO PROFILE *******/
$app->post('/saveCoverImage', 'authenticate', function() use ($app) {
  global $user_id;
  $image = htmlspecialchars($app->request->post('image'), ENT_QUOTES);
  $db = new DbHandler();
  $result = $db->saveCoverImage($user_id,$image);
  $response = array();
  if ($result != NULL) {
    $response["res_code"] = "00";
    $response["res_text"] = "แสดงข้อมูลสำเร็จ";
    echoRespnse(200, $response);
  } else {
    $response["res_code"] = "01";
    $response["res_text"] = "ไม่พบข้อมูล";
    echoRespnse(200, $response);
  }
});
/******* SAVE PHOTO PROFILE *******/

/******* Create Token omise *******/
$app->post('/Create_Token', function() use ($app) {
  $name = htmlspecialchars($app->request->post('name'), ENT_QUOTES);
  $number = htmlspecialchars($app->request->post('number'), ENT_QUOTES);
  $expiration_month = htmlspecialchars($app->request->post('expiration_month'), ENT_QUOTES);
  $expiration_year = htmlspecialchars($app->request->post('expiration_year'), ENT_QUOTES);
  $security_code = htmlspecialchars($app->request->post('security_code'), ENT_QUOTES);
  $response = array();
  // try {
  $token = OmiseToken::create(array(
    'card' => array(
      'name' => 'Somchai Prasert',
      'number' => '4111111111111111',
      'expiration_month' => 12,
      'expiration_year' => 2019,
      'security_code' => 123
    )
  ));
  $charge_arr = (array)$token;
  $charge_log = json_encode($charge_arr,true);
  $arr_ob = json_decode($charge_log, true);

  $resid = '';
  foreach ($arr_ob as $key => $value) {
    if($value['id'] != ""){
      $resid = $value['id'];
      break;
    }
  }
  // $arr_ob = json_decode($arr, true);

  $response["res_code"] = "00";
  $response["res_text"] = $resid;

  echoRespnse(200, $response);

  // } catch (Exception $e) {
  //     header("Status: 500 Server Error");
  //     $response["res_code"] = "01";
  //     $response["res_text"] = $e->getMessage();
  //     echoRespnse(200, $response);
  // }
  //
  // $response = array();
  // if ($result != NULL) {
  //   $response["res_code"] = "00";
  //   $response["res_text"] = "แสดงข้อมูลสำเร็จ";
  //   echoRespnse(200, $response);
  // } else {
  //   $response["res_code"] = "01";
  //   $response["res_text"] = "ไม่พบข้อมูล";
  //   echoRespnse(200, $response);
  // }
});
/******* SAVE PHOTO PROFILE *******/

/******* GET PHOTO COVER *******/
$app->post('/getCoverImage', 'authenticate', function() use ($app) {
  // global $user_id;
  $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
  $db = new DbHandler();
  $result = $db->getCoverImage($user_id);
  $response = array();
  if ($result != NULL) {
    $response["res_code"] = "00";
    $response["res_text"] = "แสดงข้อมูลสำเร็จ";
    $response["res_result"] = $result;
    echoRespnse(200, $response);
  } else {
    $response["res_code"] = "01";
    $response["res_text"] = "ไม่พบข้อมูล";
    echoRespnse(200, $response);
  }
});
/******* GET PHOTO COVER *******/


/******* Check payment *******/
$app->post('/check_payment_st', function() use ($app) {
  // global $user_id;
  $order_id = htmlspecialchars($app->request->post('order_id'), ENT_QUOTES);
  $db = new DbHandler();
  $result = $db->check_payment_st($order_id);
  $response = array();
  if ($result != NULL) {
    $response["res_code"] = "00";
    $response["res_text"] = "แสดงข้อมูลสำเร็จ";
    $response["res_result"] = $result["Booking_Payment_Status"];
    echoRespnse(200, $response);
  } else {
    $response["res_code"] = "01";
    $response["res_text"] = "ไม่พบข้อมูล";
    echoRespnse(200, $response);
  }
});
/******* Check payment *******/


/******* GET PHOTO COVER *******/
$app->post('/updateNoti', function() use ($app) {
  // global $user_id;
  $noti_id = htmlspecialchars($app->request->post('noti_id'), ENT_QUOTES);
  $db = new DbHandler();
  $result = $db->updateNotiRead($noti_id);
  $response = array();
  if ($result != NULL) {
    $response["res_code"] = "00";
    $response["res_text"] = "แสดงข้อมูลสำเร็จ";
    $response["res_result"] = $result;
    echoRespnse(200, $response);
  } else {
    $response["res_code"] = "01";
    $response["res_text"] = "ไม่พบข้อมูล";
    echoRespnse(200, $response);
  }
});
/******* GET PHOTO COVER *******/



/*** --------------- ***/

$app->get('/getSizePic', function() use ($app) {
  $db = new DbHandler();
  $result = $db->getSizePic();
  $response = array();
  if ($result != NULL) {
    $response["res_code"] = "00";
    $response["res_text"] = "แสดงข้อมูลสำเร็จ";
    $response["res_result"] = $result;
    echoRespnse(200, $response);
  } else {
    $response["res_code"] = "01";
    $response["res_text"] = "ไม่พบข้อมูล";
    echoRespnse(200, $response);
  }
});

/*--------------------------*/
$app->get('/deleteChatRoomEmty', function() use ($app) {
  $db = new DbHandler();
  $result = $db->deleteChatRoomEmty();
  $response = array();
  if ($result != NULL) {
    $response["res_code"] = "00";
    $response["res_text"] = "แสดงข้อมูลสำเร็จ";
    $response["res_result"] = $result;
    echoRespnse(200, $response);
  } else {
    $response["res_code"] = "01";
    $response["res_text"] = "ไม่พบข้อมูล";
    echoRespnse(200, $response);
  }
});

$app->post('/get_paypal', function() use ($app) {
  $db = new DbHandler();
  $paypal_ClientID = "AX5ZMaKfNLgBdPPY9F0-Vk9qUO4CT98ysB-vmDJC35w5FmR96Hxw771pynfGLut_BPDTqT9KW6oW8cuV";
  $paypal_ClientSecret = "EMMqX-_vHUTXWZpN7a8cAzpqh4obzgrdvhztUoNhtONx_-BOwanhjDQL5aeIc3mG9LYT_QQ3lGh0lnSx";

  // $paypal_ClientID = "AaX8qkPGWNMJCCLHkvtPjOlSkZTci8ruHHevH6uAnlt39wMc2M-n0aTeLVOkWSCKib8gM5lqsUDd57xT";
  // $paypal_ClientSecret = "EE94K19Ym7zmjhKxZuOrpslVBJ-i01fH1K3m2kdjxPOnBwcS8guDQCKCTja7wpcHQToyBBCKDX9cjufj";

  // $paypal_ClientID = "AS01dFPp45vJrcbIdAIMnbYi35lbWMAe9C4UQXPfj0qEcGa1GKDAKOE5yNcJfD0TmFftu1ccyCWwFZEq";
  // $paypal_ClientSecret = "EMw6ELrrSuK2fnwvIFfaqP1kXzb4mmqS716zIYYoPKIr0ctnwc-mbx6ttIda65qavYNJ8hxSSmdaRge2";

  $apiContext = new \PayPal\Rest\ApiContext(
    new \PayPal\Auth\OAuthTokenCredential(
      $paypal_ClientID,
      $paypal_ClientSecret
      )
    );

    $payer = new Payer();
    $payer->setPaymentMethod("paypal");
    $item1 = new Item();
    $item1->setName($app->request->post("detail"))
    ->setCurrency('THB')
    ->setQuantity((int)$app->request->post("qty"))
    ->setSku($app->request->post("order_no"))
    ->setPrice(number_format($app->request->post("price"),2,'.',''));
    //
    $itemList = new ItemList();
    $itemList->setItems(array($item1));
    $details = new Details();
    $details->setShipping(0)
    ->setTax(0)
    ->setSubtotal(number_format($app->request->post("price"),2,'.','')*(int)$app->request->post("qty"));
    $amount = new Amount();
    $amount->setCurrency("THB")
    ->setTotal(number_format($app->request->post("price"),2,'.','')*(int)$app->request->post("qty"))
    ->setDetails($details);
    $transaction = new Transaction();
    $transaction->setAmount($amount)
    ->setItemList($itemList)
    ->setDescription("Payment description")
    ->setInvoiceNumber(uniqid());
    $redirectUrls = new RedirectUrls();

    $redirectUrls->setReturnUrl("http://adventureearth.co/api/v2/update_payment?type=1&orderCode=".$app->request->post("order_no")."&price=".$app->request->post("price")."&type_pament=paypal&typeST=".$app->request->post("typeST"))
    ->setCancelUrl("http://adventureearth.co/api/v2/update_payment?type=2&orderCode=".$app->request->post("order_no")."&price=".$app->request->post("price")."&type_pament=paypal&typeST=".$app->request->post("typeST"));

    $payment = new Payment();
    $payment->setIntent("sale")
    ->setPayer($payer)
    ->setRedirectUrls($redirectUrls)
    ->setTransactions(array($transaction));
    $request = clone $payment;
    try {
      $payment->create($apiContext);
    } catch (Exception $ex) {
      echo $ex->getData();
    }
    $order = $app->request->post("order_no");
    $result = $db->check_order_booking($order);
    $array = array(
      "url" => $payment->getApprovalLink(),
      'status' => $result
    );
    $response["res_result"] = $array;
    echoRespnse(200, $response);
  });

  /*** --------------- ***/

  $app->post('/payment', function() use ($app) {
    // $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    // $packet_id = htmlspecialchars($app->request->post('packet_id'), ENT_QUOTES);
    // $packet_qly = htmlspecialchars($app->request->post('packet_qly'), ENT_QUOTES);
    // $packet_peple = htmlspecialchars($app->request->post('packet_peple'), ENT_QUOTES);
    // $packet_total_price = htmlspecialchars($app->request->post('packet_total_price'), ENT_QUOTES);
    // $packet_cos_priec = htmlspecialchars($app->request->post('packet_cos_priec'), ENT_QUOTES);
    // $packet_text_priec = htmlspecialchars($app->request->post('packet_text_priec'), ENT_QUOTES);
    // $packet_date_select = htmlspecialchars($app->request->post('packet_date_select'), ENT_QUOTES);
    // $packet_meeting = htmlspecialchars($app->request->post('meeting_select'), ENT_QUOTES);
    // $fullname = htmlspecialchars($app->request->post('fullname'), ENT_QUOTES);
    // $email = htmlspecialchars($app->request->post('email'), ENT_QUOTES);
    // $type_tel = htmlspecialchars($app->request->post('type_tel'), ENT_QUOTES);
    // $tel = htmlspecialchars($app->request->post('tel'), ENT_QUOTES);
    // $country = htmlspecialchars($app->request->post('country'), ENT_QUOTES);
    // $type_pament = htmlspecialchars($app->request->post('type_pament'), ENT_QUOTES);
    // $accident = htmlspecialchars($app->request->post('accident'), ENT_QUOTES);
    // $meet_lat = htmlspecialchars($app->request->post('meet_lat'), ENT_QUOTES);
    // $meet_lng = htmlspecialchars($app->request->post('meet_lng'), ENT_QUOTES);
    // $meet_address = htmlspecialchars($app->request->post('meet_address'), ENT_QUOTES);
    // $condition = htmlspecialchars($app->request->post('condition'), ENT_QUOTES);
    // $condition = htmlspecialchars($app->request->post('condition'), ENT_QUOTES);
    // $condition = htmlspecialchars($app->request->post('condition'), ENT_QUOTES);
    // $condition = htmlspecialchars($app->request->post('condition'), ENT_QUOTES);
    // $condition = htmlspecialchars($app->request->post('condition'), ENT_QUOTES);
    // $condition = htmlspecialchars($app->request->post('condition'), ENT_QUOTES);

    $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $packet_id = htmlspecialchars($app->request->post('packet_id'), ENT_QUOTES);
    $packet_qly = htmlspecialchars($app->request->post('packet_qly'), ENT_QUOTES);
    $packet_total_price = htmlspecialchars($app->request->post('packet_total_price'), ENT_QUOTES);
    $packet_cos_priec = htmlspecialchars($app->request->post('packet_cos_priec'), ENT_QUOTES);
    $packet_tax_priec = htmlspecialchars($app->request->post('packet_tax_priec'), ENT_QUOTES);
    $packet_date_select = htmlspecialchars($app->request->post('packet_date_select'), ENT_QUOTES);
    $fullname = htmlspecialchars($app->request->post('fullname'), ENT_QUOTES);
    $email = htmlspecialchars($app->request->post('email'), ENT_QUOTES);
    $tel = htmlspecialchars($app->request->post('tel'), ENT_QUOTES);
    $country = htmlspecialchars($app->request->post('country'), ENT_QUOTES);
    $type_pament = htmlspecialchars($app->request->post('type_pament'), ENT_QUOTES);
    $id_meet = htmlspecialchars($app->request->post('id_meet'), ENT_QUOTES);
    $accident_chooser = htmlspecialchars($app->request->post('accident_chooser'), ENT_QUOTES);
    $packet_peple = htmlspecialchars($app->request->post('packet_peple'), ENT_QUOTES);
    $meeting_hotel = htmlspecialchars($app->request->post('hotelName'), ENT_QUOTES);





    $db = new DbHandler();
    // $result = $db->payment($user_id,$packet_id,$packet_qly,$packet_peple,$packet_total_price,$packet_cos_priec,
    // $packet_text_priec,$packet_date_select,$packet_meeting,$fullname,$email,$type_tel,$tel,$country,$type_pament,$accident,$meet_lat,$meet_lng,$meet_address,$condition);
    $result = $db->payment($meeting_hotel,$packet_peple,$email,$user_id,$packet_id,$packet_qly,$packet_total_price,$packet_cos_priec,$packet_tax_priec,$packet_date_select,$fullname,$tel,
    $country,$type_pament,$id_meet,$accident_chooser);
    $response = array();
    if ($result != NULL && $result != 1) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    }else if($result == 1){
      $response["res_code"] = "01";
      $response["res_text"] = "limit";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "02";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  $app->get('/update_payment', function() use ($app) {
    $type = htmlspecialchars($app->request->get('type'), ENT_QUOTES);
    $ordercode = htmlspecialchars($app->request->get('orderCode'), ENT_QUOTES);
    $price = htmlspecialchars($app->request->get('price'), ENT_QUOTES);
    $type_pament = htmlspecialchars($app->request->get('type_pament'), ENT_QUOTES);
    $typeST = htmlspecialchars($app->request->get('typeST'), ENT_QUOTES);
    $db = new DbHandler();
    $result = $db->update_payment($type,$ordercode,$price,$type_pament);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      // echoRespnse(200, $response);
      echo "<h2 style='color: #000;margin: auto;position: absolute;height: 40px;top: 0;bottom: 0;left: 0;right: 0;width: 200px;text-align: center;font-size: 35px;'>pless wait..</h2>";
      if($typeST == 'web'){
        echo "<script type='text/javascript'>window.top.location='https://www.adventureearth.co/newweb/index.php?page=Ticket&page_id=$ordercode';</script>";
      }
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      // echoRespnse(200, $response);
      echo "<h2 style='color: #000;margin: auto;position: absolute;height: 40px;top: 0;bottom: 0;left: 0;right: 0;width: 200px;text-align: center;font-size: 35px;'>pless wait..</h2>";
      if($typeST == 'web'){
        echo "<script type='text/javascript'>window.top.location='https://www.adventureearth.co/newweb/index.php?page=Ticket&page_id=$ordercode';</script>";
      }
    }
  });


  $app->post('/getPacket', function() use ($app) {
    $type_query = htmlspecialchars($app->request->post('type_query'), ENT_QUOTES);
    $widthphone = htmlspecialchars($app->request->post('widthphone'), ENT_QUOTES);
    $province = htmlspecialchars($app->request->post('province'), ENT_QUOTES);
    $activity = htmlspecialchars($app->request->post('activity'), ENT_QUOTES);
    $db = new DbHandler();
    $result = $db->get_packet_data($type_query,$widthphone,$province,$activity);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  $app->post('/get_rate_package', function() use ($app) {
    $package_id = htmlspecialchars($app->request->post('package_id'), ENT_QUOTES);
    $db = new DbHandler();
    $result = $db->get_rate_package($package_id,'','','package');
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  $app->post('/noti_read_all', 'authenticate', function() use ($app) {
    global $user_id;
    $db = new DbHandler();

    $result = $db->noti_read_all($user_id);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  $app->post('/get_booking_category', function() use ($app) {
    $db = new DbHandler();
    $result = $db->get_booking_category();
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  $app->post('/get_package', function() use ($app) {
    $user_lat = htmlspecialchars($app->request->post('user_lat'), ENT_QUOTES);
    $user_lng = htmlspecialchars($app->request->post('user_lng'), ENT_QUOTES);
    $widthphone = htmlspecialchars($app->request->post('widthphone'), ENT_QUOTES);
    $type = htmlspecialchars($app->request->post('type_search'), ENT_QUOTES);
    $province_id = htmlspecialchars($app->request->post('province'), ENT_QUOTES);
    $activity_id = htmlspecialchars($app->request->post('activity'), ENT_QUOTES);

    $db = new DbHandler();
    $result = $db->get_package($user_lat,$user_lng,$widthphone,$type,$province_id,$activity_id);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });



  $app->post('/get_booking', function() use ($app) {
    $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $widthphone = htmlspecialchars($app->request->post('widthphone'), ENT_QUOTES);
    $db = new DbHandler();
    $result = $db->get_booking($user_id,$widthphone);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });
  $app->post('/update_text_search', function() use ($app) {
    $db = new DbHandler();
    $result = $db->update_text_search();
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });
  $app->post('/check_stock', function() use ($app) {
    $packId = htmlspecialchars($app->request->post('packet_id'), ENT_QUOTES);
    $packDate = htmlspecialchars($app->request->post('packet_date'), ENT_QUOTES);
    $db = new DbHandler();
    $result = $db->check_stock($packId,$packDate);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });
  $app->post('/get_tags', function() use ($app) {
    $cat_id = htmlspecialchars($app->request->post('category_id'), ENT_QUOTES);
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    $db = new DbHandler();
    $result = $db->get_tags($cat_id,$type);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  $app->post('/get_infomation', function() use ($app) {
    $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $db = new DbHandler();
    $result = $db->get_infomation($user_id);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  $app->post('/get_package_province', function() use ($app) {
    $db = new DbHandler();
    $result = $db->get_package_province();
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  $app->post('/get_booking_detail', function() use ($app) {
    $booking_code = htmlspecialchars($app->request->post('booking_code'), ENT_QUOTES);
    $lat = htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $lng = htmlspecialchars($app->request->post('lng'), ENT_QUOTES);
    $widthphone = htmlspecialchars($app->request->post('widthPhone'), ENT_QUOTES);
    $db = new DbHandler();
    $result = $db->get_booking_detail($booking_code,$lat,$lng,$widthphone);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  /*** --------------- ***/

  $app->post('/get_packet', function() use ($app) {
    $category = htmlspecialchars($app->request->post('cat_id'), ENT_QUOTES);
    $widthphone = htmlspecialchars($app->request->post('width_phone'), ENT_QUOTES);
    $lat = htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $lng = htmlspecialchars($app->request->post('lng'), ENT_QUOTES);
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    $user = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $tag_id = htmlspecialchars($app->request->post('tag_id'), ENT_QUOTES);
    $db = new DbHandler();
    $result = $db->get_packet($category,$widthphone,$lat,$lng,$type,$user,$tag_id);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  $app->post('/get_noti', function() use ($app) {
    $lat = '';
    $long = '';
    $user = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $widthphone = htmlspecialchars($app->request->post('widthphone'), ENT_QUOTES);
    $lat = htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $long = htmlspecialchars($app->request->post('lng'), ENT_QUOTES);
    $numLoad = htmlspecialchars($app->request->post('numLoad'), ENT_QUOTES);
    $db = new DbHandler();
    if($lat == '' || $long == ''){
      $lat = '13.9132602';
      $long = '100.6041987';
    }
    $result = $db->get_noti($user,$widthphone,$lat,$long,$numLoad);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** ลบข้อมูลใน db ***/

  $app->get('/DeleteData', function() use ($app) {
    $db = new DbHandler();
    echo $id = htmlspecialchars($app->request->get('idUser'), ENT_QUOTES);
    $result = $db->DeleteData($id);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });
  /*** --------------- ***/
  /*** บันทึก Error ***/
  $app->post('/saveError', function() use ($app) {
    $db = new DbHandler();
    $url = htmlspecialchars($app->request->post('url'), ENT_QUOTES);
    $parameter = $app->request->post('data');
    $result = $db->saveLogError($url,$parameter);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });
  /*** --------------- ***/

  /*** save comment ***/
  $app->post('/saveComment', function() use ($app) {
    $db = new DbHandler();
    $comment = htmlspecialchars($app->request->post('comment'), ENT_QUOTES);
    $postId = htmlspecialchars($app->request->post('postId'), ENT_QUOTES);
    $userId = htmlspecialchars($app->request->post('userId'), ENT_QUOTES);
    $key = htmlspecialchars($app->request->post('keycomment'), ENT_QUOTES);
    $data = $app->request->post('dataPost');
    // $parameter = ($app->request->post('data') != null)?$app->request->post('data'):null;
    $userTyep = json_decode($data ,true)["datacomment"]["user_id"];
    $result = $db->save_comment($comment,$postId,$userId,$key,$data,$userTyep);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });
  /*** --------------- ***/

  /*** newImageSize ***/
  $app->post('/getnewImageSize', function() use ($app) {
    $db = new DbHandler();
    $id = htmlspecialchars($app->request->post('id'), ENT_QUOTES);
    $widthphone = $app->request->post('widthphone');
    $result = $db->getSizeImage($id,$widthphone);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_result"] = $result;
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });
  /*** --------------- ***/

  /*** delete comment ***/
  $app->post('/deleteComment', function() use ($app) {
    $db = new DbHandler();
    $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $key = htmlspecialchars($app->request->post('keycomment'), ENT_QUOTES);
    $result = $db->deleteComment($key, $user_id);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });
  /*** --------------- ***/

  /*** Edit comment ***/
  $app->post('/editComment', function() use ($app) {
    $db = new DbHandler();
    $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $key = htmlspecialchars($app->request->post('keycomment'), ENT_QUOTES);
    $comment = htmlspecialchars($app->request->post('comment'), ENT_QUOTES);
    $result = $db->editComment($key, $comment, $user_id);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่สามารถแก้ไขคอมเมนต์";
      echoRespnse(200, $response);
    }
  });
  /*** --------------- ***/


  /*** newImageSize ***/
  $app->post('/imgComment', function() use ($app) {
    $db = new DbHandler();
    $idUser = htmlspecialchars($app->request->post('idUser'), ENT_QUOTES);

    $result = $db->getImgComment($idUser);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_result"] = $result;
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });
  /*** --------------- ***/

  /*** add key comment ***/
  $app->post('/check_key_comment', function() use ($app) {
    $db = new DbHandler();
    $id = htmlspecialchars($app->request->post('id'), ENT_QUOTES);
    $key = htmlspecialchars($app->request->post('key'), ENT_QUOTES);
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    $user = htmlspecialchars($app->request->post('user'), ENT_QUOTES);
    $result = $db->chk_key_comment($id,$key,$type,$user);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_result"] = $result;
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** add key comment ***/
  $app->post('/check_key_comment_package', function() use ($app) {
    $db = new DbHandler();
    $id = htmlspecialchars($app->request->post('id'), ENT_QUOTES);
    $key = htmlspecialchars($app->request->post('key'), ENT_QUOTES);
    $result = $db->check_key_comment_package($id,$key);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_result"] = $result;
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });
  /*** --------------- ***/


  /*** ประเทศ ***
  * url - /country
  * method - GET

  */
  $app->get('/country', function() use ($app) {
    $db = new DbHandler();
    $response = array();

    $result = $db->getCountry();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      foreach ($result as $key=>$value) {
        $res = (array)$value; // code mock
        $tmp = array();
        $tmp["country_id"] = $res["country_id"];
        $tmp["country_name_en"] = $res["country_name_en"];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });



  /*** เช็คเวอร์ชั่น app ***/
  $app->post('/check_version', function() use ($app) {
    $db = new DbHandler();
    $version = htmlspecialchars($app->request->post('version'), ENT_QUOTES);
    $paltform = htmlspecialchars($app->request->post('paltform'), ENT_QUOTES);
    // $update = htmlspecialchars($app->request->post('update'), ENT_QUOTES);
    $update = $app->request->post('update');
    $response = array();
    $result = $db->get_version($version,$paltform,$update);
    if ($result[0]['status_update'] == '00') {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    }
  });
  /*** เช็คเวอร์ชั่น app ***/


  /*** เช็คเวอร์ชั่น app ***/
  $app->post('/mainbooking', function() use ($app) {
    $db = new DbHandler();
    $lat = htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $long = htmlspecialchars($app->request->post('long'), ENT_QUOTES);
    $response = array();
    $result = $db->get_mainbooking($lat,$long);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    }
  });
  /*** เช็คเวอร์ชั่น app ***/


  /*** ประเภทค้นหา ***
  * url - /categories
  * method - GET
  */
  $app->post('/Explorecate', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $result = $db->explorecate();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });
  /*** ประเภทค้นหา ***
  * url - /categories
  * method - GET
  */
  $app->get('/categories', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $result = $db->categories();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });



  $app->POST('/randomT', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $result = $db->randomTraval();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      echoRespnse(200, $response);
    }
  });

  $app->get('/touristTag', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $result = $db->get_touristTag();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      echoRespnse(200, $response);
    }
  });

  $app->get('/tourismthailand', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $result = $db->Tourismthailand();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      echoRespnse(200, $response);
    }
  });


  $app->get('/tourismimg', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $result = $db->tourismthailandimg();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      echoRespnse(200, $response);
    }
  });


  $app->get('/haha', function() use ($app) {
    $api_key = 'AIzaSyDKniUvCeY53slaAsfxUDDURG9ydx5txmo';
    $cvurl = "https://vision.googleapis.com/v1/images:annotate?key=" . $api_key;
    $type = "LABEL_DETECTION";
    $valid_file = true;
    if($valid_file) {
      // $fname = 'http://adventureearth.co/data/data_photos/1/img_resize/2018-04-10-08-40-57bciuvwx12678.jpg';
      // $data = file_get_contents($fname);
      //  $base64 = base64_encode($data);
      $url = "../../data/data_photos/307/img_base64/1533612116.2018-08-07-10-21-5664127.jpg";
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
      print_r($json_response);
      exit();
      curl_close($curl);
      $data = $json_response['responses'][0]['labelAnnotations'];
      print_r($data);
    }
    else {
      echo "Error";
      die('Drror:  '.$_FILES['photo']['error']);
    }
  });

  $app->POST('/loopCat', function() use ($app) {
    $response = array();
    $db = new DbHandler();
    $result = $db->loop_cat();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "เรียบร้อย";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  $app->POST('/amazingThai', function() use ($app) {
    $response = array();
    $db = new DbHandler();
    $result = $db->loop_cat();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "เรียบร้อย";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });



  $app->get('/haha2', function() use ($app) {
    // $data_input = "You know, four years ago we went through the worst financial crisis since the Great Depression.
    // Millions of jobs were lost, the auto industry was on the brink of collapse. The financial system
    // had frozen up.
    //
    // And because of the resilience and the determination of the American people, we've begun to
    // fight our way back. Over the last 30 months, we've seen 5 million jobs in the private sector
    // created. The auto industry has come roaring back. And housing has begun to rise.You know, four years ago we went through the worst financial crisis since the Great Depression.
    // Millions of jobs were lost, the auto industry was on the brink of collapse. The financial system
    // had frozen up.
    //
    // And because of the resilience and the determination of the American people, we've begun to
    // fight our way back. Over the last 30 months, we've seen 5 million jobs in the private sector
    // created. The auto industry has come roaring back. And housing has begun to rise.
    // You know, four years ago we went through the worst financial crisis since the Great Depression.
    // Millions of jobs were lost, the auto industry was on the brink of collapse. The financial system
    // had frozen up.
    //
    // And because of the resilience and the determination of the American people, we've begun to
    // fight our way back. Over the last 30 months, we've seen 5 million jobs in the private sector
    // created. The auto industry has come roaring back. And housing has begun to rise.
    // You know, four years ago we went through the worst financial crisis since the Great Depression.
    // Millions of jobs were lost, the auto industry was on the brink of collapse. The financial system
    // had frozen up.
    //
    // And because of the resilience and the determination of the American people, we've begun to
    // fight our way back. Over the last 30 months, we've seen 5 million jobs in the private sector
    // created. The auto industry has come roaring back. And housing has begun to rise.
    //
    // ";
    // $ch = curl_init();
    // $headers[] = "Content-Type: text/plain;charset=utf-8";
    // $headers[] = "Accept: application/json";
    // $URL = "https://gateway.watsonplatform.net/personality-insights/api/v3/profile?version=2017-10-13&consumption_preferences=true&raw_scores=true";
    // curl_setopt($ch, CURLOPT_URL,$URL );
    // $ch = curl_init($URL);
    // curl_setopt($ch, CURLOPT_POST, 1);
    // curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    // curl_setopt($ch, CURLOPT_USERPWD, "df00d09a-d255-4849-921a-6174cd34ded6" . ":" . "UoKeM0YPUZbV");
    // // curl_setopt($ch, CURLOPT_USERPWD, "296c9746-02ac-4c91-a632-d2bc58975d61".":"."eMFs4sZ0Wvmf");
    // curl_setopt($ch, CURLOPT_POSTFIELDS, $data_input);
    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // $result = curl_exec($ch);
    // if (curl_errno($ch)) {
    //   echo 'Error:' . curl_error($ch);
    // }
    // curl_close ($ch);
    // $arr_result=json_decode($result, true);
    // $arr = array();
    // $tilt = ['personality','needs','values'];
    // for ($i=0; $i < 3 ; $i++) {
    //     $data = $arr_result[$tilt[$i]];
    //     for ($j=0; $j <sizeof($data)  ; $j++) {
    //       $arr[]=array("name"=>$data[$j]['name'],
    //                     "percentile"=>$data[$j]['percentile']
    //                   );
    //       if (isset($data[$j]['children'])) {
    //         $children =  $data[$j]['children'];
    //         for ($n=0; $n < sizeof($children) ; $n++) {
    //           $arr[]=array("name"=>$children[$n]['name'],
    //                         "percentile"=>$children[$n]['percentile']
    //                       );
    //         }
    //       }
    //     }
    // }
    // $val ="";
    // for ($i=0; $i < sizeof($arr); $i++) {
    //   if ($i==0) {
    //     $val .= "(NULL, '1', '2', (SELECT personality_insights_id  FROM `data_personality_insights` WHERE `personality_insights_name` = '".$arr[$i]['name']."'), '".$arr[$i]['percentile']."')";
    //   }else{
    //     $val.=", (NULL, '1', '2', (SELECT personality_insights_id  FROM `data_personality_insights` WHERE `personality_insights_name` = '".$arr[$i]['name']."'), '".$arr[$i]['percentile']."')";
    //   }
    // }
    //
    // $sql = "INSERT INTO `data_personality_insights_get_bluemix` (`personality_insights_get_id`, `user_id`, `personality_insights_get_type`, `personality_insights_id`, `personality_insights_get_value`)
    //         VALUES ".$val;
  });


  /*** photos_google ***
  * url - /photos_google
  * method - POST
  */
  $app->POST('/photos_google', 'authenticate',function() use ($app) {
    global $user_id;
    $email = htmlspecialchars($app->request->post('email'), ENT_QUOTES);
    $response = array();
    $db = new DbHandler();
    $result = $db->getphotos_google($user_id);
    if ($result != null) {
      $response["res_code"] = "00";
      $response['res_text'] = "บันทึก TEXT Google สำเร็จ";
    }else {
      $response["res_code"] = "01";
      $response['res_text'] = "บันทึก TEXT Google ไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });

  /*** update_photo ***
  */
  // $app->POST('/updatePhotoResize', 'authenticate',function() use ($app) {
  $app->POST('/updatePhotoResize',function() use ($app) {
    global $user_id;
    $lastId = htmlspecialchars($app->request->post('lastId'), ENT_QUOTES);
    $original = htmlspecialchars($app->request->post('original'), ENT_QUOTES);
    $folder_name = htmlspecialchars($app->request->post('folder_name'), ENT_QUOTES);
    $nameiamge = htmlspecialchars($app->request->post('nameiamge'), ENT_QUOTES);
    $namefile = htmlspecialchars($app->request->post('namefile'), ENT_QUOTES);
    $response = array();
    $db = new DbHandler();
    $result = $db->updatePhotoResize($lastId,$original,$folder_name,$nameiamge,$namefile);
    if ($result != null) {
      $response["res_code"] = "00";
      $response['res_text'] = "บันทึก TEXT Google สำเร็จ";
    }else {
      $response["res_code"] = "01";
      $response['res_text'] = "บันทึก TEXT Google ไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });

  /*** Tourist ***
  * url - /Tourist
  * method - POST
  */
  $app->POST('/Tourist', function() use ($app) {
    $LoadMoreLimit = htmlspecialchars($app->request->post('limit'), ENT_QUOTES);
    $numLoad = htmlspecialchars($app->request->post('count'), ENT_QUOTES);
    $lat = htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $long = htmlspecialchars($app->request->post('long'), ENT_QUOTES);
    $data_province = htmlspecialchars($app->request->post('province'), ENT_QUOTES);
    $type = htmlspecialchars($app->request->post('id'), ENT_QUOTES);
    $response = array();
    $db = new DbHandler();
    $result = $db->get_Tourist($data_province,$lat,$long,$type,$LoadMoreLimit,$numLoad);
    // if ($result != NULL) {
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      // $response["res_result"] = array();
      // print_r($response);
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });



  /*** photos_google ***
  * url - /photos_google
  * method - POST
  */
  $app->POST('/watsonplatform', 'authenticate',function() use ($app) {

    $data_input = "You know, four years ago we went through the worst financial crisis since the Great Depression.
    Millions of jobs were lost, the auto industry was on the brink of collapse. The financial system
    had frozen up.

    And because of the resilience and the determination of the American people, we've begun to
    fight our way back. Over the last 30 months, we've seen 5 million jobs in the private sector
    created. The auto industry has come roaring back. And housing has begun to rise.You know, four years ago we went through the worst financial crisis since the Great Depression.
    Millions of jobs were lost, the auto industry was on the brink of collapse. The financial system
    had frozen up.

    And because of the resilience and the determination of the American people, we've begun to
    fight our way back. Over the last 30 months, we've seen 5 million jobs in the private sector
    created. The auto industry has come roaring back. And housing has begun to rise.
    You know, four years ago we went through the worst financial crisis since the Great Depression.
    Millions of jobs were lost, the auto industry was on the brink of collapse. The financial system
    had frozen up.

    And because of the resilience and the determination of the American people, we've begun to
    fight our way back. Over the last 30 months, we've seen 5 million jobs in the private sector
    created. The auto industry has come roaring back. And housing has begun to rise.
    You know, four years ago we went through the worst financial crisis since the Great Depression.
    Millions of jobs were lost, the auto industry was on the brink of collapse. The financial system
    had frozen up.

    And because of the resilience and the determination of the American people, we've begun to
    fight our way back. Over the last 30 months, we've seen 5 million jobs in the private sector
    created. The auto industry has come roaring back. And housing has begun to rise.

    ";

    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->Watsonplatform($data_input,2,2);
    if ($result != null) {
      $response["res_code"] = "00";
      $response['res_text'] = "บันทึก TEXT Google สำเร็จ";
    }else {
      $response["res_code"] = "01";
      $response['res_text'] = "บันทึก TEXT Google ไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });



  $app->get('/postFacebook', function() use ($app) {
    $url = "https://graph.facebook.com/photos";
    $attachment =  array(
      'access_token'  => "EAAAAUaZA8jlABACRH323XiwmJjtNeAOS8jZBZCrBcAbWPE5TanRPUzIEZCGR6bQ1LhPkG5xK0NszydKI3vnBHvkEMrzALJsYHtEj7vwgQOUeCJHDFdjjZAOeAOmnjPnzrtEWOosOazWhkhmLz7nyVn7DnObluPIwRlNuhqOOQJQZDZD",  // never-expiring token
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
    echo "<pre>";
    print_r($result);
  });



  /*** ลืมรหัสผ่าน ***
  * url - /forgot
  * method - POST
  * params - email, password
  */
  $app->post('/forgot', function() use ($app) {

    $email = htmlspecialchars($app->request->post('email'), ENT_QUOTES);
    $response = array();
    $db = new DbHandler();
    $result = $db->sendForgotPass($email);
    if ($result == 0) {
      $response["res_code"] = "00";
      $response['res_text'] = "Success,Please check your email.";
    }else if ($result == 1) {
      $response["res_code"] = "01";
      $response['res_text'] = "Error, please try again.";
    } else {
      $response['res_code'] = "02";
      $response['res_text'] = "Your email was wrong.";
    }
    echoRespnse(200, $response);
  });

  /*** ลืมรหัสผ่าน ***
  * url - /DeleteImg
  * method - POST
  * params - ID
  */
  $app->post('/DeleteImg', function() use ($app) {
    $photo_id = htmlspecialchars($app->request->post('photo_id'), ENT_QUOTES);
    $response = array();
    $db = new DbHandler();
    $result = $db->deleteImg($photo_id);
    if ($result) {
      $response["res_code"] = "00";
      $response["res_text"] = "ลบ Noti สำเร็จ";
      $response["res_textx"] = "ล5555";
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ลบ Noti ไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });

  $app->post('/ChkEmail', function() use ($app) {
    $Email= htmlspecialchars($app->request->post('Email'), ENT_QUOTES);
    $user_type_account= htmlspecialchars($app->request->post('user_type_account'), ENT_QUOTES);
    // echo $user_type_account.":hey!";exit;
    // echo $user_type_account."hey!";exit;
    $response = array();
    $db = new DbHandler();
    $result = $db->isEmailExists($Email ,$user_type_account);
    if ($result) {
      $response["res_code"] = "00";
      $response["res_text"] = "Email already exists.";
      $response["res_result"] = $result;
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
    }
    echoRespnse(200, $response);
  });







  /*** feeling ***
  * url - /feeling
  * method - GET
  */
  $app->get('/feeling', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $result = $db->getFeeling();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      foreach ($result as $key=>$value) {
        $res = (array)$value; // code mock
        $tmp = array();
        $tmp["feeling_id"] = $res["feeling_id"];
        $tmp["feeling_name"] = $res["feeling_name"];
        $tmp["feeling_img"] = BASE_URL.$res['feeling_path_img'];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** feeling ***
  * url - /feeling
  * method - GET
  */
  $app->get('/TypeLocation', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $result = $db->getTypeLocation();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      $response["res_resultNew"] = array();
      foreach ($result as $key=>$value) {
        $res = (array)$value; // code mock
        $tmp = array();
        $tmp["TypeLocation_id"] = $res["TypeLocation_id"];
        $tmp["TypeLocation_name"] = $res["TypeLocation_name"];
        $tmp["TypeLocation_srot"] = $res["TypeLocation_srot"];
        array_push($response["res_result"], $tmp);
        array_push($response["res_resultNew"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  $app->post('/getAuto', function() use ($app) {
    $db = new DbHandler();
    $data = htmlspecialchars($app->request->post('data'), ENT_QUOTES);
    $lat = htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $long = htmlspecialchars($app->request->post('long'), ENT_QUOTES);
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    $response = array();
    $result = $db->getAutoCom($data,$lat,$long,$type);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });



  $app->post('/updateAttractionType', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $result = $db->updateAttractionType();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  /*** like ***
  * url - /like
  * method - post
  */
  $app->post('/like', 'authenticate', function() use ($app) {
    global $user_id;
    $db = new DbHandler();
    $photo_id = htmlspecialchars($app->request->post('photo_id'), ENT_QUOTES);
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    $data = $app->request->post('data');
    $response = array();
    $response = array();
    if(json_decode($data,true)["user_id"] != "TAT"){
      $result = $db->AddDelete_Like($user_id,$photo_id,$type,$data);
    }else{
      $result = $db->AddDelete_Like_TAT($user_id,$photo_id,$type,$data);
    }

    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $user_id;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  $app->post('/likes', function() use ($app) {
    // global $user_id;
    $db = new DbHandler();
    $photo_id = htmlspecialchars($app->request->post('photo_id'), ENT_QUOTES);
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $data = $app->request->post('data');
    $response = array();
    $response = array();
    if(json_decode($data,true)["user_id"] != "TAT"){
      $result = $db->AddDelete_Like($user_id,$photo_id,$type,$data);
    }else{
      $result = $db->AddDelete_Like_TAT($user_id,$photo_id,$type,$data);
    }
    // $result = $db->AddDelete_Like($user_id,$photo_id,$type,$data);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $user_id;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  $app->post('/sendnotiTest', function() use ($app) {
    global $user_id;
    $db = new DbHandler();
    $response = array();
    $response = array();
    $result = $db->send_noti_test();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** like ***
  * url - /like
  * method - post
  */
  $app->post('/updateDataUser', 'authenticate', function() use ($app) {
    global $user_id;
    $db = new DbHandler();
    $feeling = htmlspecialchars($app->request->post('feeling'), ENT_QUOTES);
    $tag = htmlspecialchars($app->request->post('tag'), ENT_QUOTES);
    $travel = htmlspecialchars($app->request->post('travel'), ENT_QUOTES);
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    $response = array();
    if($type == "updateIBM"){
      $result = $db->updateDataUser($user_id,$feeling,$tag,$travel);
    }else{
      $result = $db->updateUserCancel($user_id);
    }
    if ($result) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** coconut ***
  * url - /coconut
  * method - post
  */
  $app->post('/coconut', 'authenticate', function() use ($app) {
    global $user_id;
    $db = new DbHandler();
    $photo_id = htmlspecialchars($app->request->post('photo_id'), ENT_QUOTES);
    $user_type = htmlspecialchars($app->request->post('userType'), ENT_QUOTES);
    $response = array();
    $result = $db->Getcoconut($user_id,$photo_id,$user_type);
    // print_r($result);
    // exit();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "สำข้อมูลสำเร็จ";
      $response["res_result"] = array();
      foreach ($result as $key=>$value) {
        $res = (array)$value;
        $tmp = array();
        $tmps=$db->getFollow($res['user_id']);
        if($user_type == "TAT"){
          $tmp["photo_like_id"] = $res["tat_like_id"];
        }else{
          $tmp["photo_like_id"] = $res["photo_id"];
        }
        $tmp["user_firstname"] = $res["user_firstname"];
        $tmp["user_lastname"] = $res["user_lastname"];
        $tmp["user_id"] = $res["user_id"];
        $tmp["followers"] = $tmps['followers'];
        $tmp["following"] = $tmps['following'];
        $tmp["user_path_img"] = BASE_URL.$res["user_path_img"];
        $tmp["country_name_en"] = $res["country_name_en"];
        $tmp["follow"] = $res["follow"];
        $tmp["room_name"] = $db->get_room_name($user_id,$res['user_id']);

        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  $app->post('/message', 'authenticate', function() use ($app) {
    global $user_id;
    $db = new DbHandler();
    $response = array();
    $result = $db->getmessage($user_id);
    if ($result!=NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "บันทึกข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    }else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** bookmark ***
  * url - /bookmark
  * method - post
  */
  $app->post('/bookmark', 'authenticate', function() use ($app) {
    global $user_id;
    $db = new DbHandler();
    $photo_id = htmlspecialchars($app->request->post('photo_id'), ENT_QUOTES);
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    $userType = htmlspecialchars($app->request->post('userType'), ENT_QUOTES);
    $response = array();
    $result = $db->AddDelect_bookmark($user_id,$photo_id,$type,$userType);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "บันทึกข้อมูลสำเร็จ";
      $response["res_result"] = array();
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  /*** update msg ***
  * url - /msg
  * method - post
  */
  $app->post('/update_msg', 'authenticate', function() use ($app) {
    global $user_id;
    $db = new DbHandler();
    $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $room_id= htmlspecialchars($app->request->post('room_id'), ENT_QUOTES);
    $response = array();
    $result = $db->Update_msg($user_id,$room_id);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "บันทึกข้อมูลสำเร็จ";
      $response["res_result"] = array();
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  /*** check_room ***
  * url - /check_room
  * method - post
  */
  $app->post('/check_room', function() use ($app) {
    $db = new DbHandler();
    $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $user_to= htmlspecialchars($app->request->post('user_to'), ENT_QUOTES);
    $response = array();
    $result = $db->Check_room($user_id,$user_to);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "พบข้อมูล";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });






  /*** LetGo  ***
  * url - /LetGo
  * method - POST
  */

  $app->post('/LetGo', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    // $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $from = htmlspecialchars($app->request->post('from'), ENT_QUOTES);
    $to = htmlspecialchars($app->request->post('to'), ENT_QUOTES);
    // $from = "13.9140013,100.5518173";
    // $to = "13.908293,100.554395";
    $result = $db->getLetGo($from,$to);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      $response["res_result_start"] = "";


      for ($i=0; $i < sizeof($result) ; $i++) {
        // print_r($result[$i]);
        try {
          if ($response["res_result_start"]=="" && $result[$i]['start_address']) {
            if (sizeof(explode(", ",$result[$i]['start_address']))>1) {
              $response["res_result_start"] = explode(", ",$result[$i]['start_address'])[0];
            }else{
              $response["res_result_start"] = $result[$i]['start_address'];
            }
            break;
          }
        } catch (\Exception $e) {

        }
      }


      // foreach ($result as $key=>$value) {
      //     $res = (array)$value; // code mock
      //     $tmp = array();
      //     $tmp["tag_id"] = $res["tag_id"];
      //     $tmp["tag_name"] = $res["tag_name"];
      //     array_push($response["res_result"], $tmp);
      // }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** TAG Explore ***
  * url - /categories
  * method - post
  */
  $app->post('/TAGExplore', 'authenticate', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    global $user_id;
    // $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $result = $db->getTAGExplore($user_id);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      foreach ($result as $key=>$value) {
        $res = (array)$value; // code mock
        $tmp = array();
        $tmp["tag_id"] = $res["tag_id"];
        $tmp["tag_name"] = $res["tag_name"];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** postimg ***
  // * url - /postimg
  * method - post
  */
  $app->post('/Postimg', function() use ($app) {
    // exit();
    // $response["res_code"] = "01";
    // $response["res_text"] = "ไม่พบข้อมูล";
    // echoRespnse(200, $response);
    $db = new DbHandler();
    $response = array();
    $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $photo_caption = htmlspecialchars($app->request->post('caption'), ENT_QUOTES);
    // $photo_caption = preg_replace("/[\n\r]/"," <br> ",$photo_caption);
    $photo_location = htmlspecialchars($app->request->post('photo_location'), ENT_QUOTES);
    $key = htmlspecialchars($app->request->post('key'), ENT_QUOTES);
    $image = htmlspecialchars($app->request->post('img'), ENT_QUOTES);
    $photo_share = htmlspecialchars($app->request->post('photo_share'), ENT_QUOTES);
    $photo_la= htmlspecialchars($app->request->post('photo_la'), ENT_QUOTES);
    $photo_long= htmlspecialchars($app->request->post('photo_long'), ENT_QUOTES);
    $feeling_id = htmlspecialchars($app->request->post('feeling_id'), ENT_QUOTES);
    $highlights = htmlspecialchars($app->request->post('highlights'), ENT_QUOTES);
    $TypeLocation = htmlspecialchars($app->request->post('TypeLocation'), ENT_QUOTES);
    $result = array();
    // echo str_replace("\n", '</br>',json_encode($photo_caption));
    // echo preg_replace("/[\n\r]/","</br>",$photo_caption);
    // echoRespnse(500, str_replace("\n", '</br>',json_encode($photo_caption)));
    // exit();
    $ChkKeyPost = $db->ChkKeyPost($key);
    // if (!$ChkKeyPost) {
    if (true) {
      $result = $db->postimg($photo_caption,$photo_location,$photo_la,$photo_long,$photo_share,$user_id,$feeling_id,$highlights,$image,$TypeLocation,$key);
    }else{
      $result =array(true,$ChkKeyPost);
    }
    if ($result[0] != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "บันทึกข้อมูลสำเร็จ";
      $response["linkshared"] = $result[1];
      $response["pathOriginal"] = "";
      $response["folder_name"] = "";
      $response["nameiamge"] = "";
      $response["namefile"] = "";
      $response["lastId"] = $result[3];
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  /*** อัพเดตข้อมูล POSTIMG ***
  * url - /UpdatePOSTIMG
  * method - POST
  * params -
  */
  $app->post('/UpdatePOSTIMG', /*'authenticate',*/function() use ($app) {
    $db = new DbHandler();
    // global $user_id;
    $response = array();
    $photo_id = htmlspecialchars($app->request->post('photo_id'), ENT_QUOTES);
    $photo_caption = htmlspecialchars($app->request->post('caption'), ENT_QUOTES);
    // $photo_caption = json_encode($app->request->post('caption'));
    $photo_location = htmlspecialchars($app->request->post('photo_location'), ENT_QUOTES);
    $photo_share = htmlspecialchars($app->request->post('photo_share'), ENT_QUOTES);
    $photo_la= htmlspecialchars($app->request->post('photo_la'), ENT_QUOTES);
    $photo_long= htmlspecialchars($app->request->post('photo_long'), ENT_QUOTES);
    $feeling_id = htmlspecialchars($app->request->post('feeling_id'), ENT_QUOTES);
    $TypeLocation = htmlspecialchars($app->request->post('TypeLocation'), ENT_QUOTES);
    $highlights = htmlspecialchars($app->request->post('highlight'), ENT_QUOTES);
    $imgDelete = htmlspecialchars($app->request->post('imgDelete'), ENT_QUOTES);
    $imgUpload = htmlspecialchars($app->request->post('imgUpload'), ENT_QUOTES);
    $result = $db->updatePOSTIMG($photo_caption,$photo_location,$photo_la,$photo_long,$photo_share,$photo_id,$feeling_id,$TypeLocation,$highlights,$imgDelete,$imgUpload);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "อัพเดทข้อมูลสำเร็จ";
      $response["linkshared"] = BASE_URL_WEB.'OpenGraph.php?method=share&id='.$photo_id;
      $response["res_result"] = $result[0];
      $response["res_results"] = $result[1];
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "อัพเดทข้อมูลไม่สำเร็จ กรุณาลองอีกครั้ง";
    }

    echoRespnse(200, $response);
  });



  /*** Recent ***
  * url - /Recent
  * method - post
  */
  $app->post('/Recent', 'authenticate', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    // $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    global $user_id;
    $result = $db->getRecent($user_id);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      foreach ($result as $key=>$value) {
        $res = (array)$value; // code mock
        $tmp = array();
        // $tmp["history_search_id	"] = $res["history_search_id"];
        // $tmp["categories_name"] = $res["categories_name"];
        $tmp["history_search"] = $res["history_search"];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** followme ***
  * url - /followme
  * method - post
  */
  $app->post('/followme', 'authenticate', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    global $user_id;
    $user_me = $user_id;
    $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    $result = $db->getfollowme($user_id,$type);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      foreach ($result as $key=>$value) {
        $res = (array)$value;
        $tmp = array();

        // $test = $db->chack_following($res["user_id"],$res["follow_user"];
        $follow = 0;
        if ($db->chack_following($user_me,$res["user_id"])!=NULL ) {
          $follow = 1;
        }

        $countfollow=$db->getFollow($res["user_id"]);
        $tmp["following"] = $countfollow["following"];
        $tmp["followers"] = $countfollow["followers"];
        $tmp["user_firstname"] = html_entity_decode($res['user_firstname'], ENT_QUOTES);
        $tmp["user_lastname"] = html_entity_decode($res['user_lastname'], ENT_QUOTES);
        $tmp["user_id"] = $res["user_id"];
        $tmp["user_path_img"] = BASE_URL.$res["user_path_img"];
        $tmp["country_name_en"] = $res["country_name_en"];
        $tmp["follow"] =  $follow;
        $tmp["room_name"] = $db->get_room_name($user_me,$res['user_id']);
        $countPath = explode(".png", $res["country_flag_32"]);
        if(count($countPath) > 1){
          $newPath = $countPath[0] . ".svg";
          $tmp["country_img"] = "https://www.myadventureearth.com/data/flags/".strtolower(str_replace("-32","",$newPath));
        }else{
          $tmp["country_img"] = "https://www.myadventureearth.com/data/flags/".strtolower(str_replace("-32","",$res["country_flag_32"]));
        }
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** locationUser ***
  * url - /locationUser
  * method - post
  */
  $app->post('/locationUser', 'authenticate', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    global $user_id;
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    $lat = htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $long = htmlspecialchars($app->request->post('long'), ENT_QUOTES);
    $location= htmlspecialchars($app->request->post('location'), ENT_QUOTES);
    $data= htmlspecialchars($app->request->post('data'), ENT_QUOTES);
    if ($type=="country") {
      $where = 'country_name_en = "'.trim($data).'"';
    }else if ($type=="Following") {
      $where = '(SELECT count(*) FROM data_follow WHERE user_id = "'.$user_id.'" and follow_user = a.user_id )  = 1';
    }else{
      $where = 'user_id != '.$user_id;
    }
    // exit();
    $result = $db->getlocationUser($user_id,$where,$lat,$long);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      foreach ($result as $key=>$value) {
        $res = (array)$value;
        $tmp = array();
        $img = $res["user_path_img"];
        if (!$img) {
          $img = 'api/v1/user.png';
        }
        $cover = "http://myadventureearth.com/";
        if($res["user_coverImg"] != ""){
          $cover = "https://myadventureearth.com/".$res["user_coverImg"];
        }
        $countfollow=$db->getFollow($res["user_id"]);
        $tmp["following"] = $countfollow["following"];
        $tmp["followers"] = $countfollow["followers"];
        $tmp["user_firstname"] = html_entity_decode($res["user_firstname"], ENT_QUOTES);
        $tmp["user_lastname"] = html_entity_decode($res["user_lastname"], ENT_QUOTES);
        $tmp["user_id"] = $res["user_id"];
        $tmp["room_name"] = $db->get_room_name($user_id,$res['user_id']);
        // $tmp["user_path_img"] = BASE_URL.$res["user_path_img"];
        $tmp["user_path_img"] = BASE_URL.$img;
        $tmp["country_name_en"] = $res["country_name_en"];
        $tmp["follow"] = $res["status_follow"];
        $tmp["dis"] = $res["dis"];
        $tmp["statusOnline"] = $res["statusOnline"];
        $tmp["post"] = $res["post"];
        $tmp["user_coverImg"] = $cover;
        $countPath = explode(".png", $res["country_flag_32"]);
        if(count($countPath) > 1){
          $newPath = $countPath[0] . ".svg";
          $tmp["country_img"] = "https://www.myadventureearth.com/data/flags/".strtolower(str_replace("-32","",$newPath));
        }else{
          $tmp["country_img"] = "https://www.myadventureearth.com/data/flags/".strtolower(str_replace("-32","",$res["country_flag_32"]));
        }



        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });




  /*** messageroom ***
  * url - /messageroom
  * method - post
  */
  $app->post('/messageroom', 'authenticate', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    global $user_id;
    $result = $db->getmessageroom($user_id);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });



  /*** addroom ***
  * url - /addroom
  * method - post
  */
  $app->post('/addroom', 'authenticate', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    global $user_id;
    $key= htmlspecialchars($app->request->post('key'), ENT_QUOTES);
    $to_user= htmlspecialchars($app->request->post('to_user'), ENT_QUOTES);
    $result = $db->Addroom($user_id,$to_user,$key);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "บันทึกสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  /*** messageroom ***
  * url - /messageroom
  * method - post
  */
  $app->post('/Delectmessageroom', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $room_id = htmlspecialchars($app->request->post('room_id'), ENT_QUOTES);
    $result = $db->delectmessageroom($room_id);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  /*** messenger ***
  * url - /messenger
  * method - post
  */
  $app->post('/messenger', 'authenticate', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    global $user_id;
    $user_to = htmlspecialchars($app->request->post('user_to'), ENT_QUOTES);
    $result = $db->getmessenger($user_id,$user_to);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result[0];
      $response["room_id"] = $result[1];
      $response["New"] = $result[2];
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  /*** readmessenger ***
  * url - /messenger
  * method - post
  */
  $app->post('/readmessenger', 'authenticate', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    global $user_id;
    $room_id = htmlspecialchars($app->request->post('room'), ENT_QUOTES);
    $result = $db->Updatereadmessenger($user_id,$room_id);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "อัพเดตข้อมูลสำเร็จ";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  /*** postmessenger ***
  * url - /postmessenger
  * method - post
  */
  $app->post('/postmessenger', 'authenticate', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    global $user_id;
    $room_id = htmlspecialchars($app->request->post('room_id'), ENT_QUOTES);
    $message_text = $app->request->post('message_text');


    $result = $db->Postmessenger($user_id,$room_id,$message_text);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "บันทึข้อมูลสำเร็จ";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });




  $app->post('/saveSearch', 'authenticate', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    global $user_id;
    $search = htmlspecialchars($app->request->post('search'), ENT_QUOTES);
    $result = $db->saveRecent($user_id,$search);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "บันทึกสำเร็จ";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "บันทึกไมสำเร็จ่";
      echoRespnse(200, $response);
    }
  });


  $app->post('/getPrepost', 'authenticate', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    global $user_id;

    $widthphone = htmlspecialchars($app->request->post('widthphone'), ENT_QUOTES);
    $post_id = htmlspecialchars($app->request->post('post_id'), ENT_QUOTES);
    $lat = htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $long = htmlspecialchars($app->request->post('long'), ENT_QUOTES);

    $result = $db->getDatafeed($user_id,'1','0',$widthphone,$post_id,'notification',$lat,$long,'','','');

    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_result"] = $result;
      $response["res_text"] = "ดึงข้อมูลสำเร็จ";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ดึงข้อมูลไม่สำเร็จ";
      echoRespnse(200, $response);
    }
  });


  /*** follow ***
  * url - /follow
  * method - post
  */
  $app->post('/follow', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $result = $db->getFollow($user_id);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      // foreach ($result as $key=>$value) {
      //     $res = (array)$value; // code mock
      //     $tmp = array();
      $tmp["followers"] = $result["followers"];
      $tmp["following"] = $result["following"];
      array_push($response["res_result"], $tmp);
      // }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** insert following ***
  * url - /infollowing
  * method - post
  */
  $app->post('/indefollowing', 'authenticate',function() use ($app) {
    global $user_id;
    $db = new DbHandler();
    $response = array();
    $follow_user= htmlspecialchars($app->request->post('follow_user'), ENT_QUOTES);
    $type= htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    $data = $app->request->post('data');

    $result = $db->insertfollowing($user_id,$follow_user,$type,$data);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "บันทึกข้อมูลสำเร็จ";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** Delete following ***
  * url - /infollowing
  * method - post
  */
  $app->post('/Chack_following', 'authenticate', function() use ($app) {
    global $user_id;
    $db = new DbHandler();
    $response = array();
    $follow_user = htmlspecialchars($app->request->post('follow_user'), ENT_QUOTES);
    $result = $db->chack_following($user_id,$follow_user);
    if ($result['stfollow'] != NULL) {
      $response["res_code"] = "00";
      $response["res_result"] = $result;
      $response["res_text"] = "ดึงข้อมูลสำเร็จ";
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_result"] = $result;
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** Attractions***
  * url - /Attractions
  * method - post
  */
  $app->post('/Attractions', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $category= htmlspecialchars($app->request->post('category'), ENT_QUOTES);
    $catname= $app->request->post('catname');
    $lat= htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $long= htmlspecialchars($app->request->post('long'), ENT_QUOTES);
    $LoadMoreLimit= htmlspecialchars($app->request->post('LoadMoreLimit'), ENT_QUOTES);
    $numLoad= htmlspecialchars($app->request->post('numLoad'), ENT_QUOTES);
    $catname = str_replace("'","\'",$catname);

    $result = $db->getAttractions($category,$lat,$long,$LoadMoreLimit,$numLoad,$catname);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      // print_r($response);
      // exit();
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** Shops***
  * url - /Shops
  * method - post
  */
  $app->post('/Shops', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $id = htmlspecialchars($app->request->post('id'), ENT_QUOTES);
    $result = $db->getShops($id);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** Restaurant ***
  * url - /Restaurant
  * method - post
  */
  $app->post('/Restaurant', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    // $user_id = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $result = $db->getRestaurant();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });



  /*** data_travel ***
  * url - /travel
  * method - GET
  */
  $app->get('/travel', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $result = $db->gettravel();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      foreach ($result as $key=>$value) {
        $res = (array)$value; // code mock
        $tmp = array();
        $tmp["travel_id"] = $res["travel_id"];
        $tmp["travel_name"] = $res["travel_name"];
        $tmp["travel_img"] =BASE_URL.$res['travel_path_img'];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });




  /*** data_tag ***
  * url - /tag
  * method - GET
  */
  $app->get('/tag', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $result = $db->gettag();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      foreach ($result as $key=>$value) {
        $res = (array)$value; // code mock
        $tmp = array();
        $tmp["tag_id"] = $res["tag_id"];
        $tmp["tag_name"] = $res["tag_name"];
        array_push($response["res_result"], $tmp);
      }
      // array_push($response["res_result"], $tmp);
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** feelingTx ***
  * url - /feelingTx
  * method - GET
  */
  $app->get('/feelingTx', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $result = $db->getFeelingTX();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      $response["res_resultNew"] = array();
      foreach ($result as $key=>$value) {
        $res = (array)$value; // code mock
        $tmp = array();
        $tmp["feeling_tx_id"] = $res["feeling_tx_id"];
        $tmp["feeling_tx_name"] = $res["feeling_tx_name"];
        $tmp["feeling_tx_sort"] = $res["feeling_tx_sort"];
        $tmp["icon_true"] = 'https://www.myadventureearth.com/api/icon_feeling/'.$res["icon_true"];
        $tmp["icon_false"] = 'https://www.myadventureearth.com/api/icon_feeling/'.$res["icon_false"];
        array_push($response["res_result"], $tmp);
        array_push($response["res_resultNew"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** สมัครสมาชิก ***
  * url - /register
  * method - POST
  * params - name, email, password
  */

  $app->post('/register', function() use ($app) {
    $db = new DbHandler();
    $response = array();

    $user_firstname = htmlspecialchars($app->request->post('fname'), ENT_QUOTES);
    $user_lastname = htmlspecialchars($app->request->post('lname'), ENT_QUOTES);
    $country_id = htmlspecialchars($app->request->post('country'), ENT_QUOTES);
    $user_birthday = htmlspecialchars($app->request->post('date'), ENT_QUOTES);
    if($user_birthday != "" && $user_birthday != "NaN-NaN-NaN"){
      $date=date_create($user_birthday);
      $user_birthday= date_format($date,"Y-m-d");
    }
    $interestedin1 = htmlspecialchars($app->request->post('interestedin1'), ENT_QUOTES);
    $interestedin2 = htmlspecialchars($app->request->post('interestedin2'), ENT_QUOTES);
    $user_username = htmlspecialchars($app->request->post('username'), ENT_QUOTES);
    $user_password = htmlspecialchars($app->request->post('password'), ENT_QUOTES);
    $user_email = htmlspecialchars($app->request->post('email'), ENT_QUOTES);
    $user_gender = htmlspecialchars($app->request->post('sex'), ENT_QUOTES);
    $place_vicinity = htmlspecialchars($app->request->post('place_vicinity'), ENT_QUOTES);
    $place_name = htmlspecialchars($app->request->post('place_name'), ENT_QUOTES);
    $lng = htmlspecialchars($app->request->post('lng'), ENT_QUOTES);
    $lat = htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $user_facebook_id = htmlspecialchars($app->request->post('uid'), ENT_QUOTES);
    $type_account = htmlspecialchars($app->request->post('type_account'), ENT_QUOTES);
    $user_type_account = htmlspecialchars($app->request->post('user_type_account'), ENT_QUOTES);
    $step = htmlspecialchars($app->request->post('step'), ENT_QUOTES);
    $imageData = $app->request->post('imageData');
    $type_register = $app->request->post('type_register');
    $type = $app->request->post('step');
    $about = $app->request->post('about');
    $user_interestedIn = "";
    $phone = htmlspecialchars($app->request->post('phone'), ENT_QUOTES);
    $storeName = htmlspecialchars($app->request->post('storeName'), ENT_QUOTES);

    $tag = $app->request->post('newtag');
    $feeling = $app->request->post('newfeeling');
    $travel = $app->request->post('newtravel');
    if ($user_gender==1) {
      $user_gender='M';
    }else{
      $user_gender='F';
    }
    if ($interestedin1 == "true" && $interestedin2 == "true") {
      $user_interestedIn = "M,F";
    }else{
      if ($interestedin1== "true") {
        $user_interestedIn = "M";
      }else if( $interestedin2 == "true"){
        $user_interestedIn = "F";
      }
    }
    // echo "Register_hey! 1,";
    if($type != 'store'){
    
      // if($user_birthday != "" && $user_birthday != "NaN-NaN-NaN" && $user_birthday != "NaN-NaN-Na"){
      //   if($country_id != "" && $country_id != "0"){
        // echo "Register_hey!";exit;
      // echo "<== (".$phone."): phone ==>,";
      // echo "<br>";
      // echo "<== (".$storeName."):storeName ==>,";
      // echo "<br>";
      // echo "<== (".$type_account."):type_account ==>,";
      // echo "<br>";
      // echo "<== (".$user_username."):user_username ==>,";
      // echo "<br>";
      // echo "<== (".$user_email."):user_email ==>,";
      // echo "<br>";
      // echo "<== (".$user_firstname."):user_firstname ==>,";
      // echo "<br>";
      // echo "<== (".$user_lastname."):user_lastname ==>,";
      // echo "<br>";
      // echo "<== (".$user_gender."):user_gender ==>,";
      // echo "<br>";
      // echo "<== (".$user_interestedIn."):user_interestedIn ==>,";
      // echo "<br>";
      // echo "<== (".$user_birthday."):user_birthday ==>,";
      // echo "<br>";
      // echo "<== (".$country_id."):country_id ==>,";
      // echo "<br>";
      // echo "<== (".$user_password."):user_password ==>,";
      // echo "<br>";
      // echo "<== (".$user_facebook_id."):user_facebook_id ==>,";
      // echo "<br>";
      // // echo "<== (".$imageData."): imageData ==>,";
      // echo "<br>";
      // echo "<== (".$tag."):tag ==>,";
      // echo "<br>";
      // echo "<== (".$feeling."):feeling ==>,";
      // echo "<br>";
      // echo "<== (".$travel."):travel ==>,";
      // echo "<br>";
      // echo "<== (".$step."):step ==>,";
      // echo "<br>";
      // echo "<== (".$place_vicinity."):place_vicinity ==>,";
      // echo "<br>";
      // echo "<== (".$place_name."):place_name ==>,";
      // echo "<br>";
      // echo "<== (".$lng."):lng ==>,";
      // echo "<br>";
      // echo "<== (".$lat."):lat ==>,";
      // echo "<br>";
      // echo "<== (".$type_register."):type_register ==>,";
      // echo "<br>";
      // echo "<== (".$about."):about ==>,";
      
      $res = $db->createUser($phone,$storeName,$user_type_account, $user_username, $user_email, $user_firstname, $user_lastname, $user_gender
      ,$user_interestedIn, $user_birthday, $country_id,$user_password,$user_facebook_id,$imageData,$tag,$feeling,$travel,$step,
      $place_vicinity,$place_name,$lng,$lat,$type_register,$about);
      
      //echo "Register_hey! 3,";exit;

      if ($res == USER_CREATED_SUCCESSFULLY) {
        $response["res_code"] = "00";
        $response["res_text"] = "Register success.";
        // $response["res_result"] = $result;
      } else if ($res == USER_CREATE_FAILED) {
        $response["res_code"] = "01";
        $response["res_text"] = "Register failed.";
      } else if ($res == USER_ALREADY_EXISTED) {

        $response["res_code"] = "02";
        $response["res_text"] = "UserName already exists.";
      }  else if ($res == USER_ALREADY_EXISTED2) {
        $response["res_code"] = "03";
        $response["res_text"] = "Email already exists.";
      }
      // }
      // }
    }else{
 
      $res = $db->createUser($phone,$storeName,$user_type_account, $user_username, $user_email, $user_firstname, $user_lastname, $user_gender
      ,$user_interestedIn, $user_birthday, $country_id,$user_password,$user_facebook_id,$imageData,$tag,$feeling,$travel,$step,$place_vicinity,$place_name,$lng,$lat,$type_register,$about);
      if ($res == USER_CREATED_SUCCESSFULLY) {
        $response["res_code"] = "00";
        $response["res_text"] = "Register success.";
        // $response["res_result"] = $result;
      } else if ($res == USER_CREATE_FAILED) {
        $response["res_code"] = "01";
        $response["res_text"] = "Register failed.";
      } else if ($res == USER_ALREADY_EXISTED) {

        $response["res_code"] = "02";
        $response["res_text"] = "UserName already exists.";
      }  else if ($res == USER_ALREADY_EXISTED2) {
        $response["res_code"] = "03";
        $response["res_text"] = "Email already exists.";
      }
    }
    // if($type != 'store'){
    //   if($user_birthday == "" || $user_birthday == "NaN-NaN-NaN" || $user_birthday == "NaN-NaN-Na"){
    //     $response["res_code"] = "04";
    //     $response["res_text"] = "Please enter your birthday.";
    //   }
    // }
    // if($country_id == "" || $country_id == "0"){
    //   $response["res_code"] = "05";
    //   $response["res_text"] = "Please choose a country.";
    // }
    echoRespnse(200, $response);
  });



  /*** ล็อกอิน ***
  * url - /login
  * method - POST
  * params - email, password
  */
  $app->post('/login', function() use ($app) {
    $db = new DbHandler();
    verifyRequiredParams(array('email', 'password'));
    $response = array();
    $email = htmlspecialchars($app->request->post('email'), ENT_QUOTES);
    $password = htmlspecialchars($app->request->post('password'), ENT_QUOTES);
    $response = array();
    $db = new DbHandler();
    if ($db->checkLogin($email, $password)) {
      if($password == 'fb'){
        $result = $db->getUserByEmail($email,'user_facebook_id');
      }else{
        $result = $db->getUserByEmail($email,'user_username');
      }
      if ($result != NULL) {
        $response["res_code"] = "00";
        $response['res_text'] = "Login success.";
        // 0 nomal
        $response['res_show'] = "0";
        $response["res_result"] = $result;
      }else{
        $response['res_code'] = "01";
        $response['res_text'] = "Error Please try again.";
      }
    }else{
      $response['res_code'] = "02";
      $response['res_text'] = 'Username or password is invalid. Please try again.';
    }
    echoRespnse(200, $response);
  });


  $app->post('/loginApple', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $uid = htmlspecialchars($app->request->post('uid'), ENT_QUOTES);
    $response = array();
    $db = new DbHandler();
    if ($db->checkLoginApple($uid)) {
        $result = $db->getUserByEmail($uid,'user_facebook_id');
      if ($result != NULL) {
        $response["res_code"] = "00";
        $response['res_text'] = "Login success.";
        // 0 nomal
        $response['res_show'] = "0";
        $response["res_result"] = $result;
      }else{
        $response['res_code'] = "01";
        $response['res_text'] = "Error Please try again.";
      }
    }else{
      $response['res_code'] = "02";
      $response['res_text'] = 'Username or password is invalid. Please try again.';
    }
    echoRespnse(200, $response);
  });


  // $app->post('/hideStatus', function() use ($app) {
  //   $response['res_code'] = "02";
  //   echoRespnse(200, $response);
  // }
  $app->post('/hideStatus', function() use ($app) {
    // 0 nomal
    $response["res_show"] = "0";
    echoRespnse(200, $response);
  });





  /*** ดึงข้อมูล ***
  * url - /Datafeed
  * method - POST
  * params -
  */
  $app->post('/Datafeed', 'authenticate',function() use ($app) {
    $db = new DbHandler();
    $distant = "";
    global $user_id;
    $response = array();
    $LoadMoreLimit = htmlspecialchars($app->request->post('LoadMoreLimit'), ENT_QUOTES);
    $numLoad = htmlspecialchars($app->request->post('numLoad'), ENT_QUOTES);
    $width= htmlspecialchars($app->request->post('width'), ENT_QUOTES);
    $explore= htmlspecialchars($app->request->post('explore'), ENT_QUOTES);
    $filter= htmlspecialchars($app->request->post('filter'), ENT_QUOTES);
    $typeFillter= htmlspecialchars($app->request->post('typeFillter'), ENT_QUOTES);
    $datapage_id= htmlspecialchars_decode($app->request->post('datapage_id'), ENT_NOQUOTES);
    $lat= htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $long= htmlspecialchars($app->request->post('long'), ENT_QUOTES);
    $distant = htmlspecialchars($app->request->post('distant'), ENT_QUOTES);
    $places = htmlspecialchars($app->request->post('places'), ENT_QUOTES);
    $filter = trim($filter);
    // $from="13.908293,100.5544003";
    $from = $datapage_id;
    $response = array();
    // $from = htmlspecialchars($app->request->post('latitude'), ENT_QUOTES).",".htmlspecialchars($app->request->post('longitude'), ENT_QUOTES);
    if ($explore==1 || $filter=="feeling" ) {
      $explore = "a.feeling_tx_id =".$datapage_id;
    }else if ($explore==2 || $filter=='places'){
      if($places!=''){
        $explore = "a.TypeLocation_id =".$places;
      }else{
        $explore = '';
      }

      
      // echo $explore;
      // exit;
      // if(!empty($places)){
      //   $explore = "a.TypeLocation_id =".$places;
        
      // } else{
      //   $explore = "a.TypeLocation_id =".$datapage_id;
      //   $datapage_id = '';
      // }
      
      $from = $typeFillter;
    }else if ($explore==3){
      $explore =$datapage_id;
    }else if ($explore==4){
      $explore =array($explore,$datapage_id);
    }else if ($explore==6){
      $explore="hashtag";
      $from = $datapage_id;
    }else if($filter=='Following'){
      $value = $db->getfollowing($user_id);
      if ($value!=NULL) {
        $explore ="a.user_id IN (".$value.")";
      }else{
        $response['res_code'] = "01";
        $response['res_text'] = "ไม่พบข้อมูล";
        echoRespnse(200, $response);
        exit();
      }

    }else if( $filter=='View All' || $filter=='Most Updated' || $filter=='Most Recent'){
      $explore = false;
    }else if(trim($filter)=="My Current Location"){
      $explore="My Current Location";
      $from = $datapage_id;

    }else if($datapage_id&&$filter=="Destination" || $explore==5){


      if($explore==5){
        $explore = " photo_province LIKE '%".$datapage_id."%'OR photo_location LIKE '%".$datapage_id."%'";
      }else{
        $explore = "Destination";
      }
    }else if($datapage_id&&$filter=="Distance"){
      // explode('/', $datapage_id);
      // print_r()
      $explore="Distance";
      $from = $datapage_id;
      $distant = explode('/', $datapage_id);
      $distant = $distant[count($distant)-1];
      $distant = $distant/2;
      // echo ">>>>" . $from ;
    }else if($filter == "hashtag"){
      $explore="hashtag";
      $from = $datapage_id;
    }else if($filter == "searchAll"){
      $explore=$filter;
      $from = $typeFillter;
    }

    // exit();
    $result = $db->getDatafeed($user_id,$LoadMoreLimit,$numLoad,$width,$from,$explore,$lat,$long,$distant,$datapage_id,$places);


    // echo "string";
    $db = new DbHandler();
    if ($result[0] != NULL) {
      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result[0];
      $response["maxvalues"] = $result[1];
    }else{
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่พบข้อมูล";
    }

    echoRespnse(200, $response);
  });

  $app->post('/getDataPost' ,function() use ($app) {
    $db = new DbHandler();
    $distant = "";
    global $user_id;
    $lat = htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $long = htmlspecialchars($app->request->post('long'), ENT_QUOTES);
    $photoID = htmlspecialchars($app->request->post('post_id'), ENT_QUOTES);
    $user_id = htmlspecialchars($app->request->post('userID'), ENT_QUOTES);
    $response = array();
    $result = $db->getDataPost($lat,$long,$photoID,$user_id);
    $db = new DbHandler();
    if ($result[0] != NULL) {
      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result[0];
    }else{
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่พบข้อมูล";
    }

    echoRespnse(200, $response);
  });
  $app->post('/getDataPostTat' ,function() use ($app) {
    $db = new DbHandler();
    $distant = "";
    global $user_id;
    $lat = htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $long = htmlspecialchars($app->request->post('long'), ENT_QUOTES);
    $photoID = htmlspecialchars($app->request->post('post_id'), ENT_QUOTES);
    $user_id = htmlspecialchars($app->request->post('userID'), ENT_QUOTES);
    $response = array();
    $result = $db->getDataPostTat($lat,$long,$photoID,$user_id);
    $db = new DbHandler();
    if ($result[0] != NULL) {
      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result[0];
    }else{
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่พบข้อมูล";
    }

    echoRespnse(200, $response);
  });

  $app->post('/countCoconut', 'authenticate' ,function() use ($app) {
    $db = new DbHandler();
    $idPost = htmlspecialchars($app->request->post('idPost'), ENT_QUOTES);
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    $result = $db->countCoconut($idPost,$type);
    $db = new DbHandler();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
    }else{
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่พบข้อมูล";
    }
    echoRespnse(200, $response);
  });



  /*** DataLocation ***
  * url - /DataLocation
  * method - POST
  * params -
  */
  $app->post('/DataLocation', 'authenticate',function() use ($app) {
    $db = new DbHandler();
    global $user_id;
    $response = array();
    $LoadMoreLimit = htmlspecialchars($app->request->post('LoadMoreLimit'), ENT_QUOTES);
    $numLoad = htmlspecialchars($app->request->post('numLoad'), ENT_QUOTES);
    $width= htmlspecialchars($app->request->post('width'), ENT_QUOTES);
    $latitude= htmlspecialchars($app->request->post('latitude'), ENT_QUOTES);
    $longitude= htmlspecialchars($app->request->post('longitude'), ENT_QUOTES);
    // $password = htmlspecialchars($app->request->post('password'), ENT_QUOTES);

    $result = $db->getDataLocation($user_id,$LoadMoreLimit,$numLoad,$width,$latitude,$longitude);
    $response = array();
    $db = new DbHandler();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
    }else{
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่พบข้อมูล";
    }

    echoRespnse(200, $response);
  });


  /*** ดึงข้อมูลTag ***
  * url - /TagUser
  * method - POST
  * params -
  */
  $app->post('/TagUser', 'authenticate',function() use ($app) {
    $db = new DbHandler();
    global $user_id;
    $response = array();
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    // $password = htmlspecialchars($app->request->post('password'), ENT_QUOTES);

    $result = $db->getTagUser($user_id,$type);

    $response = array();
    $db = new DbHandler();
    if ($result != NULL) {

      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      foreach ($result as $key=>$value) {
        $res = (array)$value; // code mock
        $tmp = array();
        if ($type==1) {
          $tag_id =$res["feeling_id"];
        }else if ($type==2){
          $tag_id =$res["travel_id"];
        }else {
          $tag_id =$res["tag_id"];
        }
        $tmp["tag_id"] = $tag_id;
        array_push($response["res_result"], $tmp);
      }
    }else{
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่พบข้อมูล";
    }
    echoRespnse(200, $response);
  });

  /*** อัพเดต data_get ***
  * url - /Updatedata_get_tag
  * method - POST
  * params -
  */
  $app->post('/Updatedata_get_tag', 'authenticate',function() use ($app) {
    $db = new DbHandler();
    global $user_id;
    $response = array();
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    if ($type==1) {
      $data =$app->request->post('newfeeling');
    }else if($type==2){
      $data = $app->request->post('newtravel');
    }else{
      $data = $app->request->post('newtag');
    }


    //
    $result = $db->data_get_tag($user_id,$type,$data);
    $response = array();
    $db = new DbHandler();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response['res_text'] = "Success";
    }else{
      $response['res_code'] = "01";
      $response["res_text"] = "Fail";
    }
    echoRespnse(200, $response);
  });




  /*** อัพเดตข้อมูลรูปโปรไฟล์ ***
  * url - /UpdateProfile
  * method - POST
  * params -
  */
  $app->post('/checkEmail', 'authenticate',function() use ($app) {

    $db = new DbHandler();

    global $user_id;
    $response = array();
    $email = htmlspecialchars($app->request->post('email'), ENT_QUOTES);
    $result = $db->checkEmail($email,$user_id);
    $response = array();
    if ($result == NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "Email ไม่ซ้ำ";
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "Email ซ้ำ";
    }

    echoRespnse(200, $response);
  });
  $app->post('/UpdateProfile', 'authenticate',function() use ($app) {
    $db = new DbHandler();
    global $user_id;
    $response = array();
    $user_img = htmlspecialchars($app->request->post('imageData'), ENT_QUOTES);
    $result = $db->updateProfile($user_img,$user_id);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "อัพเดท User สำเร็จ";
      $response["res_result"] = $result;
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "อัพเดท User ไม่สำเร็จ กรุณาลองอีกครั้ง";
    }

    echoRespnse(200, $response);
  });



  /*** อัพเดตข้อมูล User ***
  * url - /UpdateUser
  * method - POST
  * params -
  */
  $app->post('/UpdateUser', 'authenticate',function() use ($app) {
    $db = new DbHandler();
    global $user_id;
    $response = array();
    $user_firstname = htmlspecialchars($app->request->post('fname'), ENT_QUOTES);
    $user_lastname = htmlspecialchars($app->request->post('lname'), ENT_QUOTES);
    $user_gender = htmlspecialchars($app->request->post('sex'), ENT_QUOTES);
    $interestedin1 = htmlspecialchars($app->request->post('interestedin1'), ENT_QUOTES);
    $interestedin2 = htmlspecialchars($app->request->post('interestedin2'), ENT_QUOTES);
    $user_birthday = htmlspecialchars($app->request->post('date'), ENT_QUOTES);
    $country_id = htmlspecialchars($app->request->post('country'), ENT_QUOTES);
    $user_img = htmlspecialchars($app->request->post('imageData'), ENT_QUOTES);
    $user_email = htmlspecialchars($app->request->post('email'), ENT_QUOTES);
    if ($user_gender==1) {
      $user_gender='M';
    }else{
      $user_gender='F';
    }
    if ($interestedin1 == "true" && $interestedin2 == "true") {
      $user_interestedIn = "M,F";
    }else{
      if ($interestedin1== "true") {
        $user_interestedIn = "M";
      }else if( $interestedin2 == "true"){
        $user_interestedIn = "F";
      }
    }
    $result = $db->updateUser($user_id,$user_firstname,$user_lastname,$user_gender,$user_interestedIn,$user_birthday,$country_id,$user_img,$user_email);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "Update user success.";
      $response["res_result"] = $result;

    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "Failed to update user. Please try again.";
    }

    echoRespnse(200, $response);
  });

  /*** อัพเดตข้อมูล Password ***
  * url - /UpdatePassword
  * method - POST
  * params -
  */
  $app->post('/UpdatePassword', 'authenticate',function() use ($app) {
    $db = new DbHandler();
    global $user_id;
    $response = array();
    $OldPassword = htmlspecialchars($app->request->post('OldPassword'), ENT_QUOTES);
    $user_password = htmlspecialchars($app->request->post('NewPassword'), ENT_QUOTES);
    $result = $db->updatePassword($user_id,$user_password,$OldPassword);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "อัพเดท User สำเร็จ";
      $response["res_result"] = $result;
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "อัพเดท User ไม่สำเร็จ กรุณาลองอีกครั้ง";
    }

    echoRespnse(200, $response);
  });



  /*** ดึงข้อมูล ***
  * url - /photo_me
  * method - POST
  * params -
  */
  $app->post('/photo_me', 'authenticate',function() use ($app) {
    $db = new DbHandler();
    global $user_id;

    if($app->request->post('long') == "" && $app->request->post('lat') == ""){
      $long = "0";
      $lat = "0";
    }else{
      $long = htmlspecialchars($app->request->post('long'), ENT_QUOTES);
      $lat = htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    }
    $response = array();
    $user_id_me = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    $width= htmlspecialchars($app->request->post('width'), ENT_QUOTES);
    $LoadMoreLimit= htmlspecialchars($app->request->post('LoadMoreLimit'), ENT_QUOTES);
    $numLoad= htmlspecialchars($app->request->post('numLoad'), ENT_QUOTES);
    $province = '';
    if ($type == 2) {
      $province = htmlspecialchars($app->request->post('province'), ENT_QUOTES);
    }else{
      $province = '';
    }


    $result = $db->getphoto_me($user_id,$type,$width,$user_id_me,$long,$lat,$LoadMoreLimit,$numLoad, $province);
    $response = array();
    $db = new DbHandler();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
    }else{
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่พบข้อมูล";
    }

    echoRespnse(200, $response);
  });

  /*** ดึงข้อมูลอัลบั้ม ***
  * url - /get_album
  * method - POST
  * params -
  */
  $app->post('/get_album_photo', 'authenticate',function() use ($app) {
    $db = new DbHandler();
    global $user_id;
    $response = array();
    $user_id_me = htmlspecialchars($app->request->post('user_id'), ENT_QUOTES);
    $type = htmlspecialchars($app->request->post('type'), ENT_QUOTES);
    $widthPhone= htmlspecialchars($app->request->post('width'), ENT_QUOTES);
    $LoadMoreLimit= htmlspecialchars($app->request->post('LoadMoreLimit'), ENT_QUOTES);
    $numLoad= htmlspecialchars($app->request->post('numLoad'), ENT_QUOTES);
    $province = '';
    if ($type == 2) {
      $province = htmlspecialchars($app->request->post('province'), ENT_QUOTES);
    }else{
      $province = '';
    }

    $result = $db->getAlbumAndPhoto($user_id_me,$type,$province,$widthPhone,$numLoad,$LoadMoreLimit);
    $response = array();
    $db = new DbHandler();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
    }else{
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่พบข้อมูล";
    }

    echoRespnse(200, $response);
  });


  /*** ดึงข้อมูลสถานที่ใกล้เคียง ***
  * url - /SamePlace
  * method - POST
  * params -
  */
  $app->post('/Same','authenticate',function() use ($app) {
    // $app->post('/Same',function() use ($app) {
    $db = new DbHandler();
    $response = array();
    global $user_id;
    $not = htmlspecialchars($app->request->post('not'), ENT_QUOTES);
    // $Place = $app->request->post('Place');
    $Place = htmlspecialchars_decode($app->request->post('Place'), ENT_NOQUOTES);
    $textLocation = htmlspecialchars_decode($app->request->post('textLocation'), ENT_NOQUOTES);
    $TypeLocation = htmlspecialchars($app->request->post('TypeLocation'), ENT_QUOTES);
    $TypeLocationName = htmlspecialchars($app->request->post('TypeLocationName'), ENT_QUOTES);
    $Feeling = htmlspecialchars($app->request->post('Feeling'), ENT_QUOTES);
    $photo_id = htmlspecialchars($app->request->post('photo_id'), ENT_QUOTES);
    $width= htmlspecialchars($app->request->post('width'), ENT_QUOTES);
    $LoadMoreLimit = htmlspecialchars($app->request->post('LoadMoreLimit'), ENT_QUOTES);
    $numLoad = htmlspecialchars($app->request->post('numLoad'), ENT_QUOTES);
    $province = htmlspecialchars($app->request->post('province'), ENT_QUOTES);
    $long = htmlspecialchars($app->request->post('long'), ENT_QUOTES);
    $lat = htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $lat = explode(',',$lat)[0];
    $long = explode(',',$long)[0];

    $result = $db->getSamePlace($textLocation,$not,$TypeLocation,$Place,$Feeling,$photo_id,$width,$LoadMoreLimit,$numLoad,$user_id,$lat,$long,$province,$TypeLocationName);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] =  $result ;
      // var_dump($a);
      // echo "\n";
      // var_dump($result);
    }else{
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่พบข้อมูล";
      // $response["res_result"] = $result;
    }
    echoRespnse(200, $response);
  });






  /*** LetGo  ***
  * url - /LetGo
  * method - POST
  */

  $app->post('/aroundmap', function() use ($app) {
    $db = new DbHandler();
    $response = array();

    $latitude = htmlspecialchars($app->request->post('latitude'), ENT_QUOTES);
    $longitude = htmlspecialchars($app->request->post('longitude'), ENT_QUOTES);
    $location = $latitude.",".$longitude;

    $result = $db->getaroundmap($location);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });




  /*** การเดินทาง ***
  * url - /map
  * method - POST
  * params -
  */
  $app->post('/map', function() use ($app) {
    $db = new DbHandler();
    $response = array();



    // $result = $db->getDatafeed();
    // $response = array();
    // $db = new DbHandler();
    // if ($result) {
    //       $response["res_code"] = "00";
    //       $response['res_text'] = "เข้าสู่ระบบสำเร็จ";
    //       $response["res_result"] = $result;
    // }else{
    //       $response['res_code'] = "01";
    //       $response['res_text'] = "เกิดข้อผิดพลาด กรุณาลองอีกครั้ง";
    // }

    echoRespnse(200, $response);
  });

  $app->post('/vehicles', function() use ($app) {
    $db = new DbHandler();
    $response = array();
    $local = htmlspecialchars($app->request->post('local'), ENT_QUOTES);
    // $local = '44.4647452,7.3553838';
    $url = 'https://maps.googleapis.com/maps/api/geocode/json?key='.key_map.'&latlng='.$local.'&sensor=true';
    $data = $db->curl($url,"");
    $city_name = '';
    // var_dump($data['results'][0]['address_components']);
    // exit();
    for ($i=0; $i < sizeof($data['results'][0]['address_components']) ; $i++) {
      $type = $data['results'][0]['address_components'][$i]['types'][0];

      // var_dump($data['results'][0]['address_components'][$i]);
      // if ($data['results'][0]['address_components'][$i]['types'][2]) {
      //   $type2 = $data['results'][0]['address_components'][$i]['types'][2];
      // }



      // echo $type.'/';
      if ($type=="administrative_area_level_2" ||  $type=="sublocality_level_1" ) {
        // echo $data['results'][0]['address_components'][$i]['long_name'];
        // echo $data['results'][0]['address_components'];
        $city_name = split('Amphoe ', $data['results'][0]['address_components'][$i]['long_name']) ;
        if (sizeof($city_name)>0) {
          $city_name = $city_name[sizeof($city_name)-1];
        }else{
          $city_name = $city_name[0];
        }
      }
    }
    // echo $city_name;
    // exit();

    $result = $db->getvehicles($city_name);
    $response = array();
    $db = new DbHandler();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      foreach ($result as $key=>$value) {
        $res = (array)$value;
        $tmp = array();
        // $Sum = $res["SUM"];
        // if ($Sum==null) {
        //   $Sum = '-';
        // }
        if ($res['local_vehicles_price_start'] && $res['local_vehicles_price_end'] ) {
          $Sum = $res['local_vehicles_price_start'].'-'. $res['local_vehicles_price_end'];
        }else{
          if ( $res['local_vehicles_price_start']) {
            $Sum = $res['local_vehicles_price_start'];
          }else{
            $Sum =  $res['local_vehicles_price_end'];
          }
        }

        $tmp["vehicles_id"] = $res["vehicles_id"];
        $tmp["vehicles_name_th"] = $res["vehicles_name_th"];
        $tmp["vehicles_name"] = $res["vehicles_name"];
        $tmp["local_vehicles_price"] = $Sum;
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);

    }else{
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });




  /* ๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑ ฟังก์ชั่น ๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑๑ */

  /*** เพิ่มการตรวจสอบการร้องขอข้อมูล ***/
  function authenticate(\Slim\Route $route) {
    $headers = apache_request_headers();
    $response = array();
    $app = \Slim\Slim::getInstance();
    if (isset($headers['Authorization'])) {
      $db = new DbHandler();
      $api_key = $headers['Authorization'];

      if (!$db->isValidApiKey($api_key)) {
        $response["res_code"] = "01";
        $response["res_text"] = "Api key ไม่ถูกต้อง ไม่มีสิทธิ์การเข้าถึงข้อมูล";
        $response["api_key"] = $api_key;
        echoRespnse(200, $response);
        $app->stop();
      } else {
        global $user_id;
        $user_id = $db->getUserId($api_key);
      }
    } else {
      $response["res_code"] = "02";
      $response["res_text"] = "ไม่พบ Api key";
      echoRespnse(200, $response);
      $app->stop();
    }
  }
  $app->post('/regisnoti', 'authenticate' ,function() use ($app) {
    $device_uuid = $app->request->post('device_uuid');
    $device_platform = $app->request->post('device_platform');
    if ($device_platform=="android") {
      $device_platform = 1;
    }else{
      $device_platform = 2;
    }

    global $user_id;
    // $user_id = 5;
    $response = array();
    $db = new DbHandler();

    if ($db->RegisNoti($user_id,$device_uuid,$device_platform)) {
      $response["res_code"] = "00";
      $response['res_text'] = "ลงทะเบียน noti สำเร็จ";
      $response["user_id"] = $user_id;
      $response["device_uuid"] = $device_uuid;
      $response["device_platform"] = $device_platform;
    } else {
      $response['res_code'] = "01";
      $response['res_text'] = "ลงทะเบียน noti ไม่สำเร็จ";
      $response["user_id"] = $user_id;
      $response["device_uuid"] = $device_uuid;
      $response["device_platform"] = $device_platform;
    }
    echoRespnse(200, $response);
  });
  $app->post('/userLogout', 'authenticate', function() use ($app) {
    $device_uuid = $app->request->post('device_uuid');
    // global $user_id;
    // $user_id = 5;
    $response = array();
    $db = new DbHandler();

    if ($db->LogoutUpdate($device_uuid)) {
      $response["res_code"] = "00";
      $response['res_text'] = "ลงทะเบียน noti สำเร็จ";
      $response["device_uuid"] = $device_uuid;
    } else {
      $response['res_code'] = "01";
      $response['res_text'] = "ลงทะเบียน noti ไม่สำเร็จ";
      $response["device_uuid"] = $device_uuid;
    }
    echoRespnse(200, $response);
  });
  $app->post('/sendnoti', 'authenticate', function() use ($app) {
    global $user_id;
    $member_id = $app->request->post('member_id');
    $message = $app->request->post('message');
    $title = $app->request->post('username');
    $roomID = $app->request->post('roomID');
    $data = $app->request->post('data');
    // global $user_id;
    // $user_id = 5;
    $response = array();
    $db = new DbHandler();
    $result = $db->SendNoti($user_id,$message,$title,$roomID,$data,$member_id);
    if ($result == 'true') {
      $response["res_code"] = "00";
      $response['res_text'] = "ลงทะเบียน noti สำเร็จ";
    }else if($result == 'noroom'){
      $response["res_code"] = "01";
      $response['res_text'] = "ไม่มีห้องแล้วนะ";
    } else {
      $response['res_code'] = "02";
      $response['res_text'] = "ลงทะเบียน noti ไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });
  $app->post('/sendnotis', function() use ($app) {
    $message = $app->request->post('message');
    $title = $app->request->post('username');
    $roomID = $app->request->post('roomID');
    $data = $app->request->post('data');
    $member_id = $app->request->post('user_id');
    $user_id = $app->request->post('member_id');
    // echo $user_id;
    // print_r($app->request->post());
    // exit();
    // global $user_id;
    // $user_id = 5;
    $response = array();
    $db = new DbHandler();
    $result = $db->SendNoti($user_id,$message,$title,$roomID,$data,$member_id);
    $result = [];
    if ($result == 'true') {
      $response["res_code"] = "00";
      $response['res_text'] = "ลงทะเบียน noti สำเร็จ";
    }else if($result == 'noroom'){
      $response["res_code"] = "01";
      $response['res_text'] = "ไม่มีห้องแล้วนะ";
    } else {
      $response['res_code'] = "02";
      $response['res_text'] = "ลงทะเบียน noti ไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });
  $app->post('/savelocation', 'authenticate' ,function() use ($app) {
    $lat = $app->request->post('lat');
    $long = $app->request->post('long');

    global $user_id;
    // $user_id = 5;
    $response = array();
    $db = new DbHandler();

    if ($db->SaveLocation($user_id,$lat,$long)) {
      $response["res_code"] = "00";
      $response['res_text'] = "สำเร็จ";
    } else {
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });
  $app->post('/feedNew', /*'authenticate',*/ function() use ($app)  {

    $db = new DbHandler();
    // global $user_id;
    $user_id = 38;
    $response = array();
    $location = $app->request->post('location');
    $widthphone = $app->request->post('width');
    $notID = $app->request->post('notID');

    $result = $db->feedNew($user_id,$location,$widthphone,$notID);

    // echo 'string';
    // exit();
    $response = array();
    $db = new DbHandler();

    if ($result[0] != NULL) {
      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result[0];
      $response["maxvalues"] = $result[1];
    }else{
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่พบข้อมูล";
    }

    echoRespnse(200, $response);
  });


  $app->post('/nearLocation','authenticate',function() use ($app) {
    $db = new DbHandler();
    $response = array();
    global $user_id;

    $photo_id = htmlspecialchars($app->request->post('photo_id'), ENT_QUOTES);
    $locationName = htmlspecialchars($app->request->post('locationName'), ENT_QUOTES);
    $width= htmlspecialchars($app->request->post('width'), ENT_QUOTES);
    $LoadMoreLimit = htmlspecialchars($app->request->post('LoadMoreLimit'), ENT_QUOTES);
    $numLoad = htmlspecialchars($app->request->post('numLoad'), ENT_QUOTES);
    $locationNear = htmlspecialchars($app->request->post('locationNear'), ENT_QUOTES);
    $lat = htmlspecialchars($app->request->post('lat'), ENT_QUOTES);
    $long = htmlspecialchars($app->request->post('long'), ENT_QUOTES);
    $limitDis = htmlspecialchars($app->request->post('limit'), ENT_QUOTES);
    $notID = htmlspecialchars($app->request->post('not'), ENT_QUOTES);
    $typeFillter = htmlspecialchars($app->request->post('typeFillter'), ENT_QUOTES);
    $lat = explode(',',$lat)[0];
    $long = explode(',',$long)[0];
    // $password = htmlspecialchars($app->request->post('password'), ENT_QUOTES);

    $result = $db->getNearLocation($photo_id,$width,$LoadMoreLimit,$numLoad,$user_id,$locationNear,$lat,$long,$limitDis,$notID,$locationName,$typeFillter);
    $response = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
    }else{
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่พบข้อมูล";
    }

    echoRespnse(200, $response);
  });


  $app->post('/GetFollow', /*'authenticate',*/ function() use ($app) {
    $user_id = $app->request->post('user_id');
    $response = array();
    $db = new DbHandler();

    $result = $db->getFollow($user_id);
    if ($db->getFollow($user_id)) {
      $response["res_code"] = "00";
      $response['res_text'] = "สำเร็จ";
      $response["res_result"] = $result;
    } else {
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });

  $app->post('/log', /*'authenticate',*/ function() use ($app) {
    $user_id = $app->request->post('user_id');
    $page = $app->request->post('page');
    $activity = $app->request->post('activity');
    $user = $app->request->post('user');
    $caption = $app->request->post('caption');
    $detail = $app->request->post('detail');
    $places = $app->request->post('places');
    $feelings = $app->request->post('feelings');
    $location = $app->request->post('location');
    $province = $app->request->post('province');
    $vehicles = $app->request->post('vehicles');
    $photoid = $app->request->post('photo_id');
    $postId = $app->request->post('postID');

    $response = array();
    $db = new DbHandler();

    $result = $db->saveLog($postId,$photoid,$user_id,$page,$activity,$user,$caption,$detail,$places,$feelings,$location,$province,$vehicles);
    if ($result) {
      $response["res_code"] = "00";
      $response['res_text'] = "สำเร็จ";
      $response["res_result"] = $result;
    }else{
      $response['res_code'] = "01";
      $response['res_text'] = "ไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });

  $app->post('/nameLocation', function() use ($app) {
    $lat = $app->request->post('lat');
    $long = $app->request->post('long');
    $response = array();
    $db = new DbHandler();
    $result = $db->gatNameLocation($lat,$long);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });












  /*** ตรวจสอบรูปแบบอีเมล์ ***/
  function validateEmail($email) {
    $app = \Slim\Slim::getInstance();
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $response["res_code"] = "01";
      $response["res_text"] = 'รูปแบบอีเมล์ไม่ถูกต้อง';
      echoRespnse(200, $response);
      $app->stop();
    }
  }

  /*** ลงทะเบียน noti ***
  * url /regisnoti
  * method POST */





  // ************************************************************************************************************************************

  /*** สมัครสมาชิก ***
  * url - /register
  * method - POST
  * params - name, email, password
  */
  $app->post('/register2', function() use ($app) {
    $arrayverify=array();
    if($app->request->post('type_member')){// 0 = คนธรรมดา , 1 = บริษัท
      array_push($arrayverify,'position', 'company_name', 'company_taxid', 'company_address', 'company_prov_id',
      'company_postcode', 'company_country_id', 'company_phone', 'company_type');
    }else{
      //array_push($arrayverify,'occupation');
    }
    array_push($arrayverify,'fname', 'lname', 'cid', 'occupation', 'address', 'prov_id', 'postcode',
    'country_id', 'cellphone','sex', 'email', 'password');
    //verifyRequiredParams($arrayverify);
    //htmlspecialchars(, ENT_QUOTES);
    $response = array();
    $type_member = htmlspecialchars($app->request->post('type_member'), ENT_QUOTES);
    $fname = htmlspecialchars($app->request->post('fname'), ENT_QUOTES);
    $lname = htmlspecialchars($app->request->post('lname'), ENT_QUOTES);
    $cid = htmlspecialchars($app->request->post('cid'), ENT_QUOTES);
    $occupation = htmlspecialchars($app->request->post('occupation'), ENT_QUOTES);
    $address = htmlspecialchars($app->request->post('address'), ENT_QUOTES);
    $prov_id = htmlspecialchars($app->request->post('prov_id'), ENT_QUOTES);
    $postcode = htmlspecialchars($app->request->post('postcode'), ENT_QUOTES);
    $country_id = htmlspecialchars($app->request->post('country_id'), ENT_QUOTES);
    $phone = htmlspecialchars($app->request->post('phone'), ENT_QUOTES);
    $fax = htmlspecialchars($app->request->post('cellphone'), ENT_QUOTES);
    $sex = htmlspecialchars($app->request->post('sex'), ENT_QUOTES);
    $position = htmlspecialchars($app->request->post('position'), ENT_QUOTES);
    $company_name = htmlspecialchars($app->request->post('company_name'), ENT_QUOTES);
    $company_branch = htmlspecialchars($app->request->post('company_branch'), ENT_QUOTES);
    $company_taxid = htmlspecialchars($app->request->post('company_taxid'), ENT_QUOTES);
    $company_address = htmlspecialchars($app->request->post('company_address'), ENT_QUOTES);
    $company_prov_id = htmlspecialchars($app->request->post('company_prov_id'), ENT_QUOTES);
    $company_postcode = htmlspecialchars($app->request->post('company_postcode'), ENT_QUOTES);
    $company_country_id = htmlspecialchars($app->request->post('company_country_id'), ENT_QUOTES);
    $company_phone = htmlspecialchars($app->request->post('company_phone'), ENT_QUOTES);
    $company_fax = htmlspecialchars($app->request->post('company_fax'), ENT_QUOTES);
    $company_type_member = htmlspecialchars($app->request->post('company_type'), ENT_QUOTES);
    $email = htmlspecialchars($app->request->post('email'), ENT_QUOTES);
    $password = htmlspecialchars($app->request->post('password'), ENT_QUOTES);
    $image = $app->request->post('image');
    $image_comp = $app->request->post('image_comp');
    $facebook_id = htmlspecialchars($app->request->post('facebook_id'), ENT_QUOTES);
    $facebook_type = htmlspecialchars($app->request->post('facebook_type'), ENT_QUOTES);
    $member_business = htmlspecialchars($app->request->post('member_business'), ENT_QUOTES);
    validateEmail($email);
    $db = new DbHandler();
    $res = $db->createUser($type_member, $fname, $lname, $cid, $address, $prov_id
    ,$postcode, $country_id, $phone, $fax, $sex, $occupation, $position, $company_name, $company_branch
    ,$company_taxid, $company_address, $company_prov_id, $company_postcode
    ,$company_country_id, $company_phone, $company_fax, $company_type_member
    ,$email, $password, $image, $image_comp, $facebook_id, $facebook_type, $member_business);

    if ($res == USER_CREATED_SUCCESSFULLY) {
      $result = $db->getUserByEmail($email,'member_email');
      if ($result != NULL) {
        $result['member_id'] = $result['member_id2'];
        $result['member_img'] = BASE_URL.'data/img_member/'.$result['member_id'].'/s/'.$result['member_img'];
        $result['member_comp_img'] = BASE_URL.'data/img_membercomp/'.$result['member_comp_id'].'/s/'.$result['member_comp_img'];
        $response["res_code"] = "00";
        $response["res_text"] = "Register success";
        $response["res_result"] = $result;
      }
    } else if ($res == USER_CREATE_FAILED) {
      $response["res_code"] = "01";
      $response["res_text"] = "Register failed.";
    } else if ($res == USER_ALREADY_EXISTED) {
      $response["res_code"] = "02";
      $response["res_text"] = "Username already exists.";
    }
    echoRespnse(200, $response);
  });




  /*** ล็อกอิน ***
  * url - /login with key
  * method - POST
  * params - email, password
  */
  $app->post('/loginWithKey', function() use ($app) {

    verifyRequiredParams(array('mkey'));
    $mkey = htmlspecialchars($app->request->post('mkey'), ENT_QUOTES);
    $response = array();
    $db = new DbHandler();
    if ($db->checkLoginWithKey($mkey)) {
      $result = $db->getUserByEmail($mkey,'member_api_key');
      if ($result != NULL) {
        $result['mkey'] = $result['mkey'];
        $result['member_id'] = $result['member_id2'];
        $result['member_img'] = BASE_URL.'data/img_member/'.$result['member_id'].'/s/'.$result['member_img'];
        $result['member_comp_img'] = BASE_URL.'data/img_membercomp/'.$result['member_comp_id'].'/s/'.$result['member_comp_img'];
        $response["res_code"] = "00";
        $response['res_text'] = "Login success";
        $response["res_result"] = $result;
      } else {
        $response['res_code'] = "01";
        $response['res_text'] = "Error Please try again.";
      }
    } else {
      $response['res_code'] = "02";
      $response['res_text'] = 'Email or password is invalid. Please try again.';
    }

    echoRespnse(200, $response);
  });




  /*** changepassword ***
  * url - /changepassword
  * method - POST
  * params - compType1, compType2, compType3
  */
  $app->post('/changepassword', 'authenticate',function() use ($app) {
    global $user_id;
    $passold = $app->request->post('passold');
    $passnew = $app->request->post('passnew');
    // $passconfirm = $app->request->post('passconfirm');
    $response = array();
    $db = new DbHandler();
    $result = $db->changepass($passold, $passnew,$user_id);
    if ($result != NULL ) {
      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
    } else {
      $response['res_code'] = "01";
      $response['res_text'] = 'ไม่พบข้อมูล.';
    }
    echoRespnse(200, $response);
  });




  /*** checkformset ***
  * url - /checkformset
  * method - POST
  * params - compType1, compType2, compType3
  */
  $app->post('/checkformset', function() use ($app) {
    $compType1 = $app->request->post('compType1');
    $compType2 = $app->request->post('compType2');
    $compType3 = $app->request->post('compType3');
    $response = array();
    $db = new DbHandler();
    $result = $db->getFormSet($compType1, $compType2, $compType3);
    if ($result != NULL ) {
      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
    } else {
      $response['res_code'] = "01";
      $response['res_text'] = 'ไม่พบข้อมูล.';
    }
    echoRespnse(200, $response);
  });

  /*** checkformset 2***
  * url - /checkformset 2
  * method - POST
  * params - compType1, compType2, compType3
  * by pao
  */
  $app->post('/checkformset2', function() use ($app) {

    $compType1 = $app->request->post('compType1');
    $compType2 = $app->request->post('compType2');
    $compType3 = $app->request->post('compType3');
    $response = array();
    $db = new DbHandler();
    $result = $db->getFormSet2($compType1, $compType2, $compType3);
    if ($result != NULL ) {
      $response["res_code"] = "00";
      $response['res_text'] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
    } else {
      $response['res_code'] = "01";
      $response['res_text'] = 'ไม่พบข้อมูล.';
      $response["res_result"] = $result;
    }
    echoRespnse(200, $response);
  });

  /*** เช็คเวอร์ชั่นแอพ ***
  * url - /version
  * method - POST
  * params - version_build, password
  */
  $app->post('/version', function() use ($app) {
    $build = $app->request->post('version_build');
    $response = array();
    $db = new DbHandler();
    if ($db->checkVersionUpdate($build)) {
      $response["res_code"] = "00";
      $response['res_text'] = "application ของคุณเป็นเวอร์ชั่นปัจจุบัน";
    } else {
      $response['res_code'] = "01";
      $response['res_text'] = 'application มีการอัพเดตเวอร์ชั่น';
    }
    echoRespnse(200, $response);
  });

  /*** ข้อความข้อกำหนดและเงื่อนไขการใช้งาน ***
  * url - /termsofuse
  * method - GET
  */
  $app->get('/termsofuse', function() use ($app) {

    $response = array();
    $db = new DbHandler();
    $result = $db->getTermsOfUse();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      //while ($res = $result->fetch_assoc()) { // code real
      foreach ($result as $key=>$value) { // code mock
        $res = (array)$value; // code mock
        $tmp = array();
        $tmp["termsOfUse_id"] = $res["termsOfUse_id"];
        $tmp["termsOfUse_text"] = $res["termsOfUse_text"];
        $tmp["termsOfUse_text_en"] = $res["termsOfUse_text_en"];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });



  /*** ชื่อประเทศ ***
  * url - /country
  * method - GET
  */
  $app->get('/country', function() use ($app) {

    $response = array();
    $db = new DbHandler();
    $result = $db->getCountry();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      while ($res = $result->fetch_assoc()) {
        $tmp = array();
        $tmp["country_id"] = $res["id"];
        $tmp["country_name"] = $res["name"];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });



  /*** ชื่อจังหวัด ***
  * url - /province
  * method - GET
  */
  $app->get('/province', function() use ($app) {

    $response = array();
    $db = new DbHandler();
    $result = $db->getProvince();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      while ($res = $result->fetch_assoc()) {
        $tmp = array();
        $tmp["province_id"] = $res["prov_id"];
        $tmp["province_name"] = $res["prov_name"];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });



  /*** ประเภทเรื่องร้องเรียน ***
  * url - /typeComplaint
  * method - GET
  */
  $app->get('/typeComplaint', function() use ($app) {

    $response = array();
    $db = new DbHandler();
    $result = $db->getTypeComplaint();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });



  /*** ค่าเงิน ***
  * url - /currency
  * method - GET
  */
  $app->get('/currency', function() use ($app) {
    $response = array();
    $db = new DbHandler();
    $result = $db->getCurrency();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      while ($res = $result->fetch_assoc()) {
        $tmp = array();
        $tmp["curren_idPrimary"] = $res["curren_id"];
        $tmp["curren_name"] = $res["curren_name"];
        $tmp["curren_rate"] = $res["curren_rate"];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** ประเภทความผิด ***
  * url - /IncorrectType
  * method - GET
  */
  $app->get('/IncorrectType', function() use ($app) {
    $response = array();
    $db = new DbHandler();
    $result = $db->IncorrectType();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      while ($res = $result->fetch_assoc()) {
        $tmp = array();
        $tmp["incType_id"] = $res["incType_id"];
        $tmp["incType_name"] = $res["incType_name"];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  /*** Case ***
  * url - /typeProduct
  * method - GET
  */
  $app->get('/CaesUserAll', 'authenticate', function() use ($app) {
    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->getCaseUser($user_id);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      while ($res = $result->fetch_assoc()) {
        $tmp = array();
        $tmp["case_id"] = $res["case_id"];
        $tmp["caseDtl_title"] = $res["case_id"]." ".$res["caseDtl_title"];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });




  /*** ประเภทสินค้า ***
  * url - /typeProduct
  * method - GET
  */
  $app->get('/typeProduct', function() use ($app) {

    $response = array();
    $db = new DbHandler();
    $result = $db->getTypeProduct();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      while ($res = $result->fetch_assoc()) {
        $tmp = array();
        $tmp["prodType_id"] = $res["prodType_id_rename"];
        $tmp["prodType_name"] = $res["fullname_product"];
        $tmp["prodType_name_en"] = $res["fullname_product_en"];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });




  /*** รายการองค์ความรู้ ***
  * url - /knowledge
  * method - GET
  */
  $app->get('/knowledge', function() use ($app) {

    // ?filter={"%name_item%":"ม",">status_item":"1"}
    $filter = $app->request->get('filter');
    // ?offset=0&limit=2
    $limit = $app->request->get('limit');
    $offset = $app->request->get('offset');
    // ?sort=+status_item,-qty_item
    $sort = $app->request->get('sort');

    $response = array();
    $db = new DbHandler();
    $result = $db->getKnowledge($limit,$offset,$filter,$sort);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      while ($res = $result->fetch_assoc()) {
        $tmp = array();
        $tmp["knowledge_id"] = $res["case_id"];
        $tmp["knowledge_name"] = $res["caseDtl_title"];
        $tmp["knowledge_type"] = $res["compType_name"];
        $tmp["knowledge_typeProduct"] = $res["prodType_name"];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  /*** องค์ความรู้ ***
  * url - /knowledge/:id
  * method - GET
  */
  $app->get('/knowledge/:id', function($knowledge_id) use ($app) {

    $response = array();
    $db = new DbHandler();
    $result = $db->getIdKnowledge($knowledge_id);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      while ($res = $result->fetch_assoc()) {
        $datespilt = split ("ร้องเรียน", $res["compTypeSub1_name"]);
        $tmp = array();
        $tmp["knowledge_id"] = $res["case_id"];
        $tmp["knowledge_name"] = $res["caseDtl_title"];
        $tmp["knowledge_type"] = $res["compType_name"];
        $tmp["knowledge_complain1"] = $datespilt[0];
        $tmp["knowledge_complain2"] = $datespilt[1];
        $tmp["knowledge_typeProduct"] = $res["prodType_name"];
        $tmp["knowledge_history"] = strip_tags($res["caseDtl_derivation"]);
        $tmp["knowledge_value"] = $res["caseDtl_damage_val"];
        $tmp["knowledge_want"] = strip_tags($res["caseDtl_complnt_need"]);
        $tmp["knowledge_result"] = $res["case_close_resultProcess"];
        $tmp["knowledge_curren"] = $res["curren_name"];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /* ============================================================================= */
  /* ============================== ฟังก์ชั่นที่มีการตรวจสอบ ============================ */
  /* ============================================================================= */


  /*** อัพเดทเงื่อนไขการแจ้งข้อร้องเรียน , ผู้ใช้สามารถอัพเดทของตัวเองได้เท่านั้น ***
  * url - /complaint/:id
  * method - PUT
  */
  $app->put('/complaint/:id'/*, 'authenticate'*/, function($member_id) use($app) {

    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->updateUserCondition($member_id);
    if ($result) {
      $response["res_code"] = "00";
      $response["res_text"] = "ยอมรับเงื่อนไขสำเร็จ";
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ยอมรับเงื่อนไขไม่สำเร็จ กรุณาลองอีกครั้ง";
    }
    echoRespnse(200, $response);
  });

  /**เดียวลบ**/
  $app->put('/complaint2/:id'/*, 'authenticate'*/, function($member_id) use($app) {

    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->updateUserCondition2($member_id);
    if ($result) {
      $response["res_code"] = "00";
      $response["res_text"] = "ยอมรับเงื่อนไขสำเร็จ";
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ยอมรับเงื่อนไขไม่สำเร็จ กรุณาลองอีกครั้ง";
    }
    echoRespnse(200, $response);
  });
  /**เดียวลบ**/

  /*** แสดง complaint ทั้งหมด , complaint ของผู้ใช้เท่านั้น ***
  * url /complaint
  * method GET
  */
  $app->get('/complaint', 'authenticate', function() use ($app) {

    // ?filter={"%name_item%":"ม",">status_item":"1"}
    $filter = $app->request->get('filter');
    // ?offset=0&limit=2
    $limit = $app->request->get('limit');
    $offset = $app->request->get('offset');
    // ?sort=+status_item,-qty_item
    $sort = $app->request->get('sort');


    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->getAllUserComplaint($user_id,$limit,$offset,$filter,$sort);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ.";
      $response["res_result"] = array();
      while ($res = $result->fetch_assoc()) {
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
          $res_status = $db->checkPercen($res["case_id"]);
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
        $tmp = array();
        $datespilt = split (" ", $res["case_receivedoc_real_datetime"]);
        $tmp["comp_id"] = $res["case_id"];
        $tmp["comp_name"] = $res["caseDtl_title"];
        $tmp["comp_date"] = $datespilt[0];
        $tmp["comp_time"] = $datespilt[1];
        $tmp["comp_status"] = $res["case_status"];
        $tmp["comp_process"] = $status;
        $tmp["comp_perces"] = $percen;
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else{
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }

  });



  /*** แสดง complaint2 อย่างละ 2  , complaint ของผู้ใช้เท่านั้น ***
  * url /complaint2
  * method GET
  */
  $app->get('/complaint2', 'authenticate', function() use ($app) {



    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->getComplaintType2($user_id);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      while ($res = $result->fetch_assoc()) {
        if($res["case_status"] == "1"){
          $status = 1;$percen = 25;
        }else if($res["case_status"] == "2"){
          $res_status = $db->checkPercen($res["case_id"]);
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
        $tmp = array();
        $datespilt = split (" ", $res["case_receivedoc_real_datetime"]);
        $tmp["comp_id"] = $res["case_id"];
        $tmp["comp_name"] = $res["caseDtl_title"];
        $tmp["comp_date"] = $datespilt[0];
        $tmp["comp_time"] = $datespilt[1];
        $tmp["comp_status"] = $res["case_status"];
        $tmp["comp_process"] = $status;
        $tmp["comp_perces"] = $percen;
        $tmp["test"] = $res_status;
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else{
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }

  });

  /*** แสดง complaint id ที่เลือก , complaint ของผู้ใช้เท่านั้น ***
  * url /complaint/:id
  * method GET
  */
  $app->get('/complaint/:id', 'authenticate', function($case_id) {
    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->getComplaint($user_id,$case_id);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** Open noti page update all to open ***
  * url - /notification/:id
  * method - PUT
  */
  // $app->put('/notificationUpdateall/'/*, 'authenticate'*/, function($memid) use($app) {
  $app->put('/notificationUpdateall/:id', 'authenticate', function($memid) use($app) {

    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->updateReadNotiAll($memid);
    // $response["res_code"] = "00";
    // $response["txt"] = $result;
    if ($result) {
      $response["res_code"] = "00";
      $response["res_text"] = "อัพเดท Open noti page สำเร็จ";
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "อัพเดท Open noti page ไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });


  // /*** ลงทะเบียน noti ***
  // * url /regisnoti
  // * method POST
  // */
  // $app->post('/regisnoti', 'authenticate', function() use ($app) {
  //
  //   $device_uuid = $app->request->post('device_uuid');
  //   $device_platform = $app->request->post('device_platform');
  //   global $user_id;
  //   $response = array();
  //   $db = new DbHandler();
  //   if ($db->RegisNoti($user_id,$device_uuid,$device_platform)) {
  //     $response["res_code"] = "00";
  //     $response['res_text'] = "ลงทะเบียน noti สำเร็จ";
  //     $response["user_id"] = $user_id;
  //     $response["device_uuid"] = $device_uuid;
  //     $response["device_platform"] = $device_platform;
  //   } else {
  //     $response['res_code'] = "01";
  //     $response['res_text'] = "ลงทะเบียน noti ไม่สำเร็จ";
  //     $response["user_id"] = $user_id;
  //     $response["device_uuid"] = $device_uuid;
  //     $response["device_platform"] = $device_platform;
  //   }
  //   echoRespnse(200, $response);
  // });

  /*** ลงทะเบียน noti ***
  * url /regisnoti
  * method POST
  */
  $app->post('/logout', 'authenticate', function() use ($app) {

    $device_uuid = $app->request->post('device_uuid');
    $device_platform = $app->request->post('device_platform');
    global $user_id;
    $response = array();
    $db = new DbHandler();
    if ($db->logout($user_id,$device_uuid,$device_platform)) {
      $response["res_code"] = "00";
      $response['res_text'] = "ย้าย uuid สำเร็จ";

    } else {
      $response['res_code'] = "01";
      $response['res_text'] = "ย้าย uuid ไม่สำเร็จ";

    }
    echoRespnse(200, $response);
  });


  /*** แสดง badge ทั้งหมด , badge ของผู้ใช้เท่านั้น ***
  * url /badge
  * method GET
  */
  $app->get('/badge', 'authenticate', function() use ($app) {

    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->getAllBadge($user_id);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = $result;
      echoRespnse(200, $response);
    } else{
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });


  /*** แสดง notification ทั้งหมด , notification ของผู้ใช้เท่านั้น ***
  * url /notification
  * method GET
  */
  $app->get('/notification', 'authenticate', function() use ($app) {

    // ?filter={"%name_item%":"ม",">status_item":"1"}
    $filter = $app->request->get('filter');
    // ?offset=0&limit=2
    $limit = $app->request->get('limit');
    $offset = $app->request->get('offset');
    // ?sort=+status_item,-qty_item
    $sort = $app->request->get('sort');
    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->getAllUserNoti($user_id,$limit,$offset,$filter,$sort);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      while ($res = $result->fetch_assoc()) { // code real
        //  $datespilt = split (" ", $res["noti_datetime"]);
        //  $tmp = array();
        //  $tmp["noti_id"] = $res["noti_id"];
        //  $tmp["noti_name"] = $res["caseDtl_title"]."....".(intval($res["noti_type"])*25)."%";
        //  $tmp["noti_date"] = $datespilt[0];
        //  $tmp["noti_time"] = $datespilt[1];
        //  $tmp["noti_type"] = $res["noti_type"];
        //  $tmp["noti_read"] = $res["noti_read"];
        //  $tmp["comp_id"] = $res["case_id"];
        //  array_push($response["res_result"], $tmp);

        $datespilt = split (" ", $res["msgNotiApp_datetime"]);
        $tmp = array();
        $tmp["noti_id"] = $res["msgNotiApp_id"];
        $tmp["noti_name"] = $res["msgNotiApp_message"]."....".(intval($res["msgNotiApp_step"])*25)."%";
        $tmp["noti_date"] = $datespilt[0];
        $tmp["noti_time"] = $datespilt[1];
        $tmp["noti_type"] = $res["msgNotiApp_step"];
        $tmp["noti_read"] = $res["msgNotiApp_read_status"];
        $tmp["comp_id"] = $res["case_id"];
        $tmp["process_type_step"] = $res["process_type_step"];
        array_push($response["res_result"], $tmp);

      }
      echoRespnse(200, $response);
    } else{
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล";
      echoRespnse(200, $response);
    }
  });

  /*** แก้ไข Read ให้กับ noti ***
  * url - /notification/:id
  * method - PUT
  */
  $app->put('/notification/:id', 'authenticate', function($noti_id) use($app) {

    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->updateReadNoti($noti_id);
    if ($result) {
      $response["res_code"] = "00";
      $response["res_text"] = "อัพเดท Read สำเร็จ";
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "อัพเดท Read ไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });




  /*** เปลี่ยนภาษา ***
  * url - /lang
  * method - PUT
  */
  $app->put('/lang', 'authenticate', function($lang_id) use($app) {

    $OnOff = htmlspecialchars($app->request->post('OnOff'), ENT_QUOTES);
    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->updateLang($OnOff,$user_id);
    if ($result) {
      $response["res_code"] = "00";
      $response["res_text"] = "เปลี่ยนภาษาสำเร็จ";
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "เปลี่ยนภาษาไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });



  /*** เปิดปิด noti ***
  * url - /noti
  * method - PUT
  */
  $app->put('/noti', 'authenticate', function($noti_id) use($app) {

    $OnOff = htmlspecialchars($app->request->post('OnOff'), ENT_QUOTES);
    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->updateNoti($OnOff,$user_id);
    if ($result) {
      $response["res_code"] = "00";
      $response["res_text"] = "เปิด/ปิด noti สำเร็จ";
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "เปิด/ปิด noti ไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });


  /*** ลบ Noti ***
  * url - /notification/:id
  * method - DELETE
  */
  $app->delete('/notification/:id', 'authenticate', function($noti_id) use($app) {

    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->DeleteNoti($noti_id);
    if ($result) {
      $response["res_code"] = "00";
      $response["res_text"] = "ลบ Noti สำเร็จ";
      $response["res_textx"] = "ล5555";
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ลบ Noti ไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });

  /*** แสดง message ทั้งหมด , message ของผู้ใช้เท่านั้น ***
  * url /message
  * method GET
  */
  $app->get('/message', 'authenticate', function() use ($app) {


    $filter = $app->request->get('filter');
    // ?offset=0&limit=2
    $limit = $app->request->get('limit');
    $offset = $app->request->get('offset');
    // ?sort=+status_item,-qty_item
    $sort = $app->request->get('sort');

    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->getAllUserMessage($user_id,$limit,$offset,$filter,$sort);
    $datespilt = array();
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      //while ($res = $result->fetch_assoc()) { // code real
      foreach ($result as $key=>$value) { // code mock

        $res = (array)$value; // code mock
        $datespilt = explode (" ", $res["msgBox_datetime"]);
        $tmp = array();
        $tmp["message_id"] = $res["msgBox_id"];
        $tmp["message_name"] = $res["msgBox_message"];
        $tmp["message_date"] = $datespilt[0];
        $tmp["message_time"] = $datespilt[1];
        $tmp['message_read'] = $res["readmsg"];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else{
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล...";
      echoRespnse(200, $response);
    }

  });


  /*** แสดง message ที่เลือก , message ของผู้ใช้เท่านั้น ***
  * url /message/:id
  * method GET
  */
  $app->get('/message/:id', 'authenticate', function($id) use ($app) {

    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->getMessage($id);
    if ($result != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แสดงข้อมูลสำเร็จ";
      $response["res_result"] = array();
      //while ($res = $result->fetch_assoc()) { // code real
      foreach ($result as $key=>$value) { // code mock
        $res = (array)$value; // code mock
        $datespilt = explode (" ", $res["msgBox_datetime"]);
        $tmp = array();
        $tmp["message_id"] = $res["message_id"];
        $tmp["message_name"] = $res["message_name"];
        $tmp["message_date"] = $datespilt[0];
        $tmp["message_time"] = $datespilt[1];
        $tmp["message_caseid"] = $res["message_caseid"];
        $tmp["message_from"] = $res["sendfrom"];
        $tmp["message_text"] = $res["caseDtl_title"];
        array_push($response["res_result"], $tmp);
      }
      echoRespnse(200, $response);
    } else{
      $response["res_code"] = "01";
      $response["res_text"] = "ไม่พบข้อมูล///";
      echoRespnse(200, $response);
    }

  });






  /*** แก้ไข Read ให้กับ message ***
  * url - /message/

  */
  //  $app->get('/message', 'authenticate', function() use ($app) {
  $app->GET('/Readmessage/:id', 'authenticate', function($id_msg) use($app) {
    // $id_msg = $app->request->get('message_id');
    global $user_id;
    $response = array();
    $db = new DbHandler();
    $result = $db->updateReadMessage($user_id,$id_msg);
    if ($result) {
      $response["res_code"] = "00";
      $response["res_text"] = "อัพเดท Read สำเร็จ";
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "อัพเดท Read ไม่สำเร็จ";
    }
    echoRespnse(200, $response);
  });

  /*** เช็ค compValidate ***
  * url - /compValidate
  * method - POST
  * params -
  */
  $app->post('/compValidate'/*, 'authenticate'*/, function() use ($app) {

    $db = new DbHandler();
    verifyRequiredParams($db->validateComp($app->request->post('validate')));

    $response["res_code"] = "00";
    $response["res_text"] = "สำเร็จ";
    echoRespnse(200, $response);

  });

  /*** เพิ่ม complaint ***
  * url - /complaint
  * method - POST
  * params -
  */
  $app->post('/complaint', 'authenticate', function() use ($app) {

    $compType_id = trim($app->request->post('compType_id'));
    $compTypeSub1_id = trim($app->request->post('compTypeSub1_id'));
    $compTypeSub2_id = trim($app->request->post('compTypeSub2_id'));
    $case_status = 0;
    $case_assign_status = 0;
    $caseCh_id = 1;
    $case_priority = 1;
    $case_receivedoc_real_datetime = trim($app->request->post('case_receivedoc_real_datetime'));
    $case_create_datetime = trim($app->request->post('case_create_datetime'));
    $case_disKPI_status = 0;
    $caseDtl_title = htmlspecialchars(trim($app->request->post('caseDtl_title')), ENT_QUOTES);
    $prodType_id = trim($app->request->post('prodType_id'));
    $caseDtl_derivation = htmlspecialchars(trim($app->request->post('caseDtl_derivation')), ENT_QUOTES);
    $caseDtl_damage_val = htmlspecialchars(trim($app->request->post('caseDtl_damage_val')), ENT_QUOTES);
    $curren_id = trim($app->request->post('curren_id'));
    $caseDtl_complnt_need = htmlspecialchars(trim($app->request->post('caseDtl_complnt_need')), ENT_QUOTES);
    $applnt_ident = htmlspecialchars(trim($app->request->post('applnt_ident')), ENT_QUOTES);
    $applntOrg_trade_number0 = htmlspecialchars(trim($app->request->post('applntOrg_trade_number')), ENT_QUOTES);
    $applntOrg_trade_number = htmlspecialchars(trim($app->request->post('applntOrg_trade_number2')), ENT_QUOTES);
    $applnt_firstname = htmlspecialchars(trim($app->request->post('applnt_firstname')), ENT_QUOTES);
    $applnt_type = trim($app->request->post('applnt_type'));
    $applnt_ident_valid = 0;
    $applnt_status = 0;
    $complnt_trade_number = htmlspecialchars(trim($app->request->post('complnt_trade_number')), ENT_QUOTES);
    $complnt_name = htmlspecialchars(trim($app->request->post('complnt_name')), ENT_QUOTES);
    $complnt_backlist = 0;
    $applnt_valid_dbd = 0;
    $applnt_valid_ditp = 0;
    $case_receivedoc_date = trim($app->request->post('case_receivedoc_date'));
    $case_createBy_id = trim($app->request->post('case_createBy_id'));
    $applnt_lastname = trim($app->request->post('applnt_lastname'));
    $applntOrg_name0 = trim($app->request->post('applntOrg_name'));
    $applntOrg_name = trim($app->request->post('applntOrg_name2'));
    $complnt_country_id = trim($app->request->post('complnt_country_id'));
    $complnt_file = $app->request->post('complnt_file');

    $incType_id = $app->request->post('incType_id');
    $applntOrg_country_id = $app->request->post('applntOrg_country_id');

    $complnt_import_export = $app->request->post('complnt_import_export');
    $applntOrg_branch = $app->request->post('applntOrg_branch');
    $applntOrg_tel = $app->request->post('applntOrg_tel');
    $applntOrg_fax = $app->request->post('applntOrg_fax');

    $applnt_gender = $app->request->post('applnt_gender');
    $applnt_career = $app->request->post('applnt_career');
    $applnt_mobile = $app->request->post('applnt_mobile');
    $applnt_email = $app->request->post('applnt_email');
    $applnt_address = $app->request->post('applnt_address');
    $applntOrg_prov_id = $app->request->post('applnt_prov_id');
    $applntOrg_zipcode = $app->request->post('applnt_zipcode');
    $applnt_country_id = $app->request->post('applnt_country_id');


    $complnt_branch = $app->request->post('complnt_branch');
    $complnt_contact_tel = $app->request->post('complnt_contact_tel');
    $complnt_contact_email = $app->request->post('complnt_contact_email');
    $complnt_contact_address = $app->request->post('complnt_contact_address');
    $complnt_contact_prov_id = $app->request->post('complnt_prov_id');
    $complnt_zipcode = $app->request->post('complnt_zipcode');
    $complnt_contact_name = $app->request->post('complnt_contact_name');


    $db = new DbHandler();
    $response = array();
    global $user_id;

    $caseid = $db->createComplaint($app->request->post(),$compType_id,$compTypeSub1_id,$compTypeSub2_id,$case_status,$case_assign_status,$caseCh_id,$case_priority,$case_receivedoc_real_datetime,
    $case_disKPI_status,$caseDtl_title,$prodType_id,$caseDtl_derivation,$caseDtl_damage_val,$curren_id,$caseDtl_complnt_need,
    $applnt_ident,$applntOrg_trade_number,$applnt_firstname,$applnt_type,$applnt_ident_valid,$applnt_status,$complnt_trade_number,
    $complnt_name,$complnt_backlist,$applnt_valid_dbd,$applnt_valid_ditp,$case_receivedoc_date,$case_createBy_id,$applnt_lastname,$applntOrg_name,
    $applnt_country_id,$complnt_country_id,$case_create_datetime,$complnt_file,$user_id,$incType_id,$applntOrg_country_id,$complnt_import_export,$applntOrg_branch,$applntOrg_tel,$applntOrg_fax,
    $applnt_gender,$applnt_career,$applnt_mobile,$applnt_email,$applnt_address,$applntOrg_prov_id,$applntOrg_zipcode,$complnt_branch,
    $complnt_contact_tel,$complnt_contact_email,$complnt_contact_address,$complnt_contact_prov_id,$complnt_zipcode,$complnt_contact_name,$applntOrg_name0,$applntOrg_trade_number0);

    if ($caseid != NULL) {
      $response["res_code"] = "00";
      $response["res_text"] = "แจ้งเรื่องร้องเรียนสำเร็จ";
      $response["res_result"] = array();
      $tmp = array();
      $tmp["caseid"] = $caseid;
      array_push($response["res_result"], $tmp);
      echoRespnse(200, $response);
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "แจ้งเรื่องร้องเรียนไม่สำเร็จ กรุณาลองอีกครั้ง";
      echoRespnse(200, $response);
    }
  });



  /*** ลบ task , ผู้ใช้สามารถลบ task ได้เท่านั้น ***
  * url - /tasks/:id
  * method DELETE
  */
  $app->delete('/tasks/:id', 'authenticate', function($task_id) use($app) {

    global $user_id;
    $db = new DbHandler();
    $response = array();
    $result = $db->deleteTask($user_id, $task_id);
    if ($result) {
      $response["res_code"] = "00";
      $response["res_text"] = "ลบ task สำเร็จ";
    } else {
      $response["res_code"] = "01";
      $response["res_text"] = "ลบ task ไม่สำเร็จ กรุณาลองอีกครั้ง";
    }
    echoRespnse(200, $response);
  });

  // /*** อัพเดท user , ผู้ใช้สามารถอัพเดท user ได้เท่านั้น ***
  // * url - /user/:id
  // * method - PUT
  // * params - task, status
  // */
  // $app->put('/user', 'authenticate', function($user_id) use($app) {
  //
  //   $arrayverify=array();
  //   if($app->request->post('type_member')){// 0 = คนธรรมดา , 1 = บริษัท
  //     array_push($arrayverify,'position', 'company_name', 'company_taxid', 'company_address', 'company_prov_id',
  //     'company_postcode', 'company_country_id', 'company_phone', 'company_type');
  //   }else{
  //     array_push($arrayverify,'occupation');
  //   }
  //   array_push($arrayverify,'fname', 'lname', 'cid', 'occupation', 'address', 'prov_id', 'postcode',
  //   'country_id', 'phone','sex');
  //   verifyRequiredParams($arrayverify);
  //
  //   global $user_id;
  //   $response = array();
  //   $type_member = htmlspecialchars($app->request->post('type_member'), ENT_QUOTES);
  //   $fname = htmlspecialchars($app->request->post('fname'), ENT_QUOTES);
  //   $lname = htmlspecialchars($app->request->post('lname'), ENT_QUOTES);
  //   $cid = htmlspecialchars($app->request->post('cid'), ENT_QUOTES);
  //   $occupation = htmlspecialchars($app->request->post('occupation'), ENT_QUOTES);
  //   $address = htmlspecialchars($app->request->post('address'), ENT_QUOTES);
  //   $prov_id = htmlspecialchars($app->request->post('prov_id'), ENT_QUOTES);
  //   $postcode = htmlspecialchars($app->request->post('postcode'), ENT_QUOTES);
  //   $country_id = htmlspecialchars($app->request->post('country_id'), ENT_QUOTES);
  //   $phone = htmlspecialchars($app->request->post('phone'), ENT_QUOTES);
  //   $fax = htmlspecialchars($app->request->post('fax'), ENT_QUOTES);
  //   $sex = htmlspecialchars($app->request->post('sex'), ENT_QUOTES);
  //   $position = htmlspecialchars($app->request->post('position'), ENT_QUOTES);
  //   $email = htmlspecialchars($app->request->post('email'), ENT_QUOTES);
  //   $company_name = htmlspecialchars($app->request->post('company_name'), ENT_QUOTES);
  //   $company_branch = htmlspecialchars($app->request->post('company_branch'), ENT_QUOTES);
  //   $company_taxid = htmlspecialchars($app->request->post('company_taxid'), ENT_QUOTES);
  //   $company_address = htmlspecialchars($app->request->post('company_address'), ENT_QUOTES);
  //   $company_prov_id = htmlspecialchars($app->request->post('company_prov_id'), ENT_QUOTES);
  //   $company_postcode = htmlspecialchars($app->request->post('company_postcode'), ENT_QUOTES);
  //   $company_country_id = htmlspecialchars($app->request->post('company_country_id'), ENT_QUOTES);
  //   $company_phone = htmlspecialchars($app->request->post('company_phone'), ENT_QUOTES);
  //   $company_fax = htmlspecialchars($app->request->post('company_fax'), ENT_QUOTES);
  //   $company_type_member = htmlspecialchars($app->request->post('company_type'), ENT_QUOTES);
  //   $comp_img = $app->request->post('comp_img');
  //   $user_img = $app->request->post('user_img');
  //   $db = new DbHandler();
  //
  //   $result = $db->updateUser($user_id,$type_member, $fname, $lname, $cid, $address, $prov_id
  //   ,$postcode, $country_id, $phone, $fax, $sex, $occupation, $position
  //   , $company_name, $company_branch,$company_taxid, $company_address
  //   , $company_prov_id, $company_postcode,$company_country_id, $company_phone
  //   , $company_fax, $comp_img, $user_img);
  //
  //   if ($result) {
  //     $result = $db->getUserByEmail($email,'member_email');
  //     $result['member_id'] = $result['member_id2'];
  //     $result['member_img'] = BASE_URL.'data/img_member/'.$result['member_id'].'/s/'.$result['member_img'];
  //     $result['member_comp_img'] = BASE_URL.'data/img_membercomp/'.$result['member_comp_id'].'/s/'.$result['member_comp_img'];
  //     $response["res_code"] = "00";
  //     $response["res_text"] = "อัพเดท User สำเร็จ";
  //     $response["res_result"] = $result;
  //   } else {
  //     $response["res_code"] = "01";
  //     $response["res_text"] = "อัพเดท User ไม่สำเร็จ กรุณาลองอีกครั้ง";
  //   }
  //   echoRespnse(200, $response);
  // });



  /*** ตรวจสอบฟิลด์ที่ไม่ได้กรอก ***/
  function verifyRequiredParams($required_fields) {
    $error = false;
    $db = new DbHandler();
    $error_fields = "";
    $request_params = array();
    $request_params = $_REQUEST;
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
      $app = \Slim\Slim::getInstance();
      parse_str($app->request()->getBody(), $request_params);
    }
    foreach ($required_fields as $field) {
      if (!isset($request_params[$field]) || strlen(trim($request_params[$field])) <= 0) {
        $error = true;
        $error_fields .= $field . ', ';
      }
    }
    if ($error) {
      $response = array();
      $app = \Slim\Slim::getInstance();
      $response["res_code"] = "01";
      $response["res_text"] = 'Please fill in all information.';
      echoRespnse(200, $response);
      $app->stop();
    }
  }

  /*** แสดงผล json ***/
  function echoRespnse($status_code, $response) {
    $app = \Slim\Slim::getInstance();
    $app->status($status_code);
    $app->contentType('application/json');
    echo json_encode($response);
  }

  $app->run();
  ?>
