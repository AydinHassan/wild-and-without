<?php

$subscribe_popup_heading = cstheme_option( 'subscribe_popup_heading' );
$subscribe_popup_descr = cstheme_option( 'subscribe_popup_descr' );
$subscribe_popup_mailChimpid = cstheme_option( 'subscribe_popup_mailChimpid' );
?>
	
	<div class="subscribe_popup_btn"><a href="javascript:void(0);"><i class="fa fa-envelope-o"></i></a></div>
	<div class="subscribe_popup_wrap">
		<div class="subscribe_popup_bg"></div>
		<a class="subscribe_popup_close" href="javascript:void(0);"></a>
		<div class="subscribe_popup_content">
			<h4><?php echo esc_attr( $subscribe_popup_heading ); ?></h4>
			<p class="mb30"><?php echo esc_attr( $subscribe_popup_descr ); ?></p>
			<p class="no-spam mb30">(no spam ever, unsubscribe at any time)</p>
			<div class="clearfix">
			
				<?php
					if( function_exists( 'mc4wp_show_form' ) ) {
						mc4wp_show_form( $id = esc_html( $subscribe_popup_mailChimpid ) );
					}
				?>
			
			</div>
			<script type="text/javascript">

				(function($) {

					document.querySelector('#mc4wp-form-1').addEventListener('submit', function (e) {
						e.preventDefault();
						$(".mc4wp-response").remove();

						//const formData = new FormData(e.target);
						const form = $(e.target);
						const formData = form.serializeArray();
						const data = {};

						$(formData).each(function(index, obj){
							data[obj.name] = obj.value;
						});

						data['action'] = 'wild_without_subscribe';

						const submitButton = form.find('input[type=submit]').first();

						submitButton.val('Submitting...');
						submitButton.prop('disabled', true);

						$.ajax({
							url: '<?= admin_url('admin-ajax.php') ?>',
							data: data,
							type: "POST",
							dataType: 'JSON',
							success: function(data){
								$(".mc4wp-response").remove();

								console.log(data);
								if (!data.success) {
									form.removeClass('mc4wp-form-error').addClass('mc4wp-form-success');

									var errorHtml = data.data.errors.map(function (error) {
										return '<div class="mc4wp-alert mc4wp-' + error.type + '"><p class="subscribe-error">' + error.text + '</p></div>';
									}).join();

									var responseHtml = '<div class="mc4wp-response">' + errorHtml + '</div>';
									form.append(responseHtml);
									submitButton.val('Sign up');
									submitButton.prop('disabled', false);
									return;
								}

								var responseHtml = '<div class="mc4wp-response"><p class="subscribe-success">Thank you for subscribing. We have sent you a confirmation email.</p></div>';
								form.replaceWith(responseHtml);

								form.removeClass('mc4wp-form-success').addClass('mc4wp-form-error');
								submitButton.val('Sign up');
								submitButton.prop('disabled', false);
							},
							error: function(errorThrown){
								console.log(errorThrown);
								submitButton.val('Sign up');
								submitButton.prop('disabled', false);
							}
						});
					});
				})(jQuery);

			</script>
		</div>
	</div>
	<div class="subscribe_popup_back"></div>