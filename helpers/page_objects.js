var page_objects = {};

page_objects.association_page = {
  //'test'      : {xpath : '//div[@id="login"]/h4'},
  test: function(str) {
    return {xpath : '//div[@id="login"]/h4[text()="' + str + '"]'};
  },
  'login_header'      : {xpath : '//div[@id="login"]/h4[text()="Login With Existing Account:"]'},
  'register_header'   : {xpath : '//div[@id="register"]/h4[text()="Create a New Account:"]'},
  'login_username' : {xpath : '//div[@id="login"]/form/div/input[@name="username"]'},
  'login_password' : {xpath : '//div[@id="login"]/form/div/input[@name="password"][@type="password"]'},
  'login_username_label' : {xpath : '//div[@id="login"]/form/div/label[@for="username"][contains(text(), "Username:")]'},
  'login_password_label' : {xpath : '//div[@id="login"]/form/div/input[@name="password"][@type="password"]'},
  'register_fields1'  : {xpath : '//div[@id="register"]/form[@id="mform1"]/fieldset[@id="id_createuserandpass"]'},
  'register_username' : {xpath : '//div[@id="register"]/form[@id="mform1"]/fieldset/div/div/div/input[@id="id_username"]'},
  'register_password' : {xpath : '//div[@id="register"]/form[@id="mform1"]/fieldset/div/div/div/input[@id="id_password"][@type="password"]'},
  'register_fields2'  : {xpath : '//div[@id="register"]/form[@id="mform1"]/fieldset[@id="id_supplyinfo"]'},
  'register_email'    : {xpath : '//div[@id="register"]/form[@id="mform1"]/fieldset/div/div/div/input[@id="id_email"]'},
  'register_email_confirm'  : {xpath : '//div[@id="register"]/form[@id="mform1"]/fieldset/div/div/div/input[@id="id_email2"]'},
  'register_firstname'      : {xpath : '//div[@id="register"]/form[@id="mform1"]/fieldset/div/div/div/input[@id="id_firstname"]'},
  'register_lastname'       : {xpath : '//div[@id="register"]/form[@id="mform1"]/fieldset/div/div/div/input[@id="id_lastname"]'},
  'register_city'     : {xpath : '//div[@id="register"]/form[@id="mform1"]/fieldset/div/div/div/input[@id="id_city"]'},
  // country
  'register_submit'   : {xpath : '//div[@id="register"]/form[@id="mform1"]/fieldset/div/div/div/input[@id="id_submitbutton"]'},
  'login_username'    : {xpath : '//div[@id="login"]/form/div/input[@id="username"]'},
  'login_password'    : {xpath : '//div[@id="login"]/form/div/input[@id="password"]'},
  'login_button'      : {xpath : '//div[@id="login"]/form/button[@type="submit"]'},
  'error_flash_email' : {xpath : '//*[@id="id_email"]/../span'},
};

//More specifically, only super common things like the header and footer.
// Many moodle pages have their own.
page_objects.moodle_common = {
  'header_username'   : {css : 'span.usertext'},
  'footer_username'   : {css : 'div.logininfo a:first-of-type'},
  'user_menu'         : {css : 'a#action-menu-toggle-0'},
  'user_menu_home'    : {css : 'span#actionmenuaction-1'},
  'user_menu_profile' : {css : 'span#actionmenuaction-2'},
  'breadcrumbs'       : {css : 'ul.breadcrumb'},
  'header_title'      : {xpath : '//*[@id="page-header"]//h1'},
};

page_objects.moodle_course = {
  'header' : function(course) {
    return {xpath: '//header[@id="page-header"]//h1[text()="' + course + '"]'}
  },
};

page_objects.moodle_myhome = {
  'course_links'   : {xpath : '//div[@class="course_list"]/*/div[@class="course_title"]/h2/a'},
  'course_link'    : function(fullname) {
    return {xpath : '//div[@class="course_list"]/*/div[@class="course_title"]/h2/a[text()="' + fullname + '"]'};
  },
  'nav_my_courses' : {xpath : '//a[text()="My courses"]'}
};

// FIX: anyone using this for anything?
// page_objects.moodle_home = {
//   'course_overview_content' : {xpath : '//div[@data-block="course_overview"]/*[@class="content"]'},
// }

///local/stemlms/payment.php
page_objects.payment = {
  // no longer used as of rc7?
  //'header'            : {xpath : '//div/h2[text()="You are about to Purchase:"]'},
  'ac_entry_header'   : {xpath : '//div/h2[contains(text(), "Please enter your access code to complete enrollment in ")]'},
  'ac_full_header'   : function(course_name){
    return {xpath : '//div/h2[contains(text(), "Please enter your access code to complete enrollment in ' + course_name + '")]'};
  },
  'existing_credit_prompt'   : function(course_name){
    var str = '//div/h2[contains(normalize-space(), "Would you like to enroll in ' + course_name + ' using your existing credit?")]';
    return {xpath : str};
  },
  'payment_options_prompt'   : function(course_name){
    var str = '//div/h2[contains(normalize-space(), "Payment options for ' + course_name + '")]';
    return {xpath : str};
  },
  'bt_options_prompt'   : function(course_name){
    var str = '//div/h2[contains(normalize-space(), "Purchase Options for ' + course_name + '")]';
    return {xpath : str};
  },
  // 'ac_aside'          : {xpath : '//aside[normalize-space(contains(., "Your access code would have been purchased from the bookstore and is not a discount code or coupon.")])'},
  'ac_aside'          : {xpath : '//aside[normalize-space("Your access code would have been purchased from the bookstore and is not a discount code or coupon.")]'},
  //TODO: if purchase name and price are not separated into multiple elements
  // in the near future, file a bug so they should be.
  // for now, they're the same element and we just match on contains text (instead of = text.)
  'purchase_name'     : {xpath : '//section[@id="region-main"]/div/h3'},
  'price'             : {xpath : '//section[@id="region-main"]/div/h3'},
  'access_code_label' : {xpath : '//form/label[@for="accessCode"]'},
  'access_code_input' : {xpath : '//form/input[@name="accessCode"]'},
  'access_code_submit': {xpath : '//form/button[@type="submit"]'},
  //
  'credit_card_label' : {xpath : '//div/h3[text()="Credit Card Payment:"]'},
  'zipcode'           : {xpath : '//input[@id="zipcode"]'},
  'enroll'            : {xpath : '//input[@id="calculateTax_submit"]'},
  //
  'bad_access_code'   : {xpath : '//div/h3[text()="Invalid Access Code"]'},
  'no_such_course'    : {xpath : '//*[contains(text(), "Course does not exist, please contact your instructor.")]'},
  'error_header'      : {xpath : '//*[contains(text(), "Error:")]'},
  //
  'choose_payment'    : function(payment) {
    //console.log('======== is it here?');
    switch (payment) {
    case 'access_code':
      button = 'btnACPay';
      break;
    case 'braintree':
      button = 'btnCCPay';
      break;
    case 'existing_credit':
      button = 'btnCreditPay';
    default:
      throw 'Trying to select an unknown payment type in this test?';
    }
    var str = {xpath : '//*[@id="' + button + '"]'};
    return str;
  }
};

// if a course has  groups, we use self-enrollments
// if it doesn't, we use manual enrollments

page_objects.bt_purchase = {
  // these are in our domain (stemlms local plugin, actually)
  'header'             : {xpath : '//div/h2[contains(normalize-space(), "You are about to Purchase:")]'},
  'purchase_name'      : function(purchase) {
    return {xpath : '//div/h3[contains(text(), "' + purchase + '")]'};
  },
  'price'              : function(price) {
    return {xpath : '//p[contains(normalize-space(), "Price: $' + price + '")]'};
  },
  'tax'                : function(tax) {
    if (tax === 0) { tax = '0.00'}
    return {xpath : '//p[contains(normalize-space(), "Tax: $' + tax + '")]'};
  },
  'total'              : function(total) {
    return {xpath : '//p[contains(normalize-space(), "Total: $' + total + '")]'};
  },
  'submit_total'       : function(total) {
    return {xpath : '//input[@value=("Pay $' + total + '")]'};
  },
  'submit'             : {xpath : '//input[contains(@value, "Pay $")]'},
  // and these are actually inside the braintree iframe, served from braintree ofc.
  'credit_card_number' : {id : 'credit-card-number'},
  'expiration'         : {id : 'expiration'},
  'cvv'                : {id : 'cvv'},
  'paypal'             : {id : 'braintree-paypal-button'}
};

page_objects.instpicker = {
  'header'        : {xpath : '//h1[contains(text(), "Choose An Institution")]'},
  'selector'      : {id    : 'inst_select'},
  'institution'   : function(i) {
    return {xpath : '//select[@id="inst_select"]/*[@value="' + i + '"]'};
  },
  'choose_course_header' : function(i) {
    return {xpath : '//h2[text()="Choose your course for ' + i + '"]'};
  },
  'course_title'  : function(c) {
    return {id: 'purchaseCourse_' + c.id};
  },
  'course_enroll' : function(c) {
    return {xpath : '//*[@id="purchaseCourse_' + c + '"]/form/input[@value="Enroll"]'};
  },
};

page_objects.blocks = {
  //super not convinced these should all be lumped here this way
  'course_catalog_link'  : {css : 'div.block_mnv_courseenrollment > div.content'},
};

page_objects.payment_options = {
  'single_price'       : function(price) {
    return {xpath : '//form/div/div[contains(normalize-space(), "Single Term Access - $' + price + '")]'};
  },
  'single_price_desc'  : {xpath : '//form/div/div/em'},
  'multi_price'        : {},
  'multi_price_desc'   : {},
  'zip_label'          : {xpath : '//label[@for="zipcode"]'},
  'zip_input'          : {id    : 'zipcode'},
  'submit'             : {id    : 'calculateTax_submit'}
};

page_objects.receipt = {
  'ac_header' : {xpath : '//h3[text()="Enrollment Successful"]'},
  'bt_header' : {xpath : '//h3[text()="Payment Successful"]'},
  'ac_thanks_message'  : {xpath: "//p[text()='Your access code processed successfully. Please find the details of your transaction below.']"},
  'bt_thanks_message'  : {xpath: "//p[text()='Thank you for your payment. Please find the details of your transaction below.']"},
  // payment method is only ever shown for access code purchases (shown in lieu of the prices braintree receipts list)
  // TODO: or existing credit???
  'payment_method'     : {xpath: '//p[text()="Payment method: Access code"]'},
  'price'              : function(price) {
    return {xpath: '//p[text()="Course Price: $' + price + '"]'};
  },
  'total'              : function(total) {
    return {xpath: '//p[text()="Total Payment: $' + total + '"]'};
  },
  'tax'                : function(tax) {
    if (tax === 0) { tax = '0.00'}
    return {xpath: '//p[text()="Tax: $' + tax + '"]'};
  },
  'course_name'    : function(name) {
    return {xpath: '//p[text()="Course Name: ' + name + '"]'};
  },
  'support_blurb'  : function(email) {
    return {xpath: '//p[contains(text(), "To contact our Support team, email")]/a[text()="' + email + '."]'};
  },
  'continue_button': {xpath: '//button[text()="Continue to Course"]'},
  'purchase_option': function(str) {
    return {xpath: '//p[text()="Purchase Option: ' + str + '"]'};
  },
  'tx_div'         : {xpath: '//p[contains(text(), "Transaction ID: ")]'}
};

page_objects.login = {
  'header'   : {xpath : '//h2[text()="Log in"]'},
  'username' : {id    : 'username'},
  'password' : {id    : 'password'},
  'submit'   : {id    : 'loginbtn'}
};

 /*
 * @todo - if we ever want better searching, verification of tx sequence, etc
 *   the ids & classes of this block really need to be reworked on the frontend.
 */
// Transaction History Block - should just show up on user's moodle profile page]
page_objects.txblk = {
  title : {},
  credits_header  : {xpath : '//h3[@id="creditsAvailable"][contains(text(), "Credits Available")]'},
  credit_unavail  : {xpath : '//*[@id="creditStatus"][contains(text(), "You do not have credit available.")]'},
  credit_avail    : {xpath : '//*[@id="creditStatus"][contains(text(), "You have credit available for a future purchase.")]'},
  all_txs         : {css : '.ccTrans, .credTrans, .acTrans'},
  // credit is credit
  credit_txs      : {css : '.credTrans'},
  ac_txs          : {css : '.acTrans'},
  // and cc is credit card
  cc_txs          : {css : '.ccTrans'},
  all_courses     : {css : 'tr:not(.ccTrans):not(.credTrans):not(.acTrans)'},
  // and this actually can return multiple...
  txid_for_course : function(id) {
    return {css : 'tr.courseid_' + id +' > td.purchaseId'}
  },
  // and this actually can return multiple...
  total_for_course : function(id) {
    return {css : 'tr.courseid_' + id +' > td.purchaseAmount'}
  },
  course_name    : function(id) {
    return {id : 'txHistCourseLink_' + id};
  },
  course_link   : function(id) {
    return {xpath : '//*[@id="txHistCourseLink_' + id + '"]'};
  }
};

module.exports = page_objects;
