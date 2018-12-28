<div class="subscribe_popup_btn"><a href="javascript:void(0);"><i class="fa fa-envelope-o"></i></a></div>
<div class="subscribe_popup_wrap">
    <div class="subscribe_popup_bg"></div>
    <a class="subscribe_popup_close" href="javascript:void(0);"></a>
    <div class="subscribe_popup_content">
        <h4>SUBSCRIBE TO GET POSTS DIRECT TO YOUR EMAIL</h4>
        <p class="mb30">Once you have hit the sign up button you will receive a confirmation e-mail. Head over to your e-mail, confirm that and then you are all ready to receive our blog posts via e-mail!</p>
        <p class="no-spam mb30">(no spam ever, unsubscribe at any time)</p>
        <div class="clearfix">
                <?php if (function_exists( 'mc4wp_show_form')): ?>
                    <?php mc4wp_show_form($id = esc_html(cstheme_option('subscribe_popup_mailChimpid'))); ?>
                <?php endif ?>
        </div>
    </div>
</div>
<div class="subscribe_popup_back"></div>