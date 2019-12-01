<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta name="B-verify" content="a19d7f8703389d3156762141f6f25cfa5fd9906d" />
    <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <script type="text/javascript">
        var cstheme_ajaxurl = "<?php echo admin_url('admin-ajax.php'); ?>";
    </script>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	
	<?php get_template_part('templates/subscribe-popup') ?>
	<div id="page-wrap">
		<?php get_template_part('templates/header/header_layout') ?>
		<?php get_template_part('templates/header/header-mobile') ?>
		<div id="page-content">
