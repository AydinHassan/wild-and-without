            </div><!-- //page-content -->
            <div id="prefooter_area">
                <div class="container">
                    <div class="row">
                        <?php get_sidebar('footer'); ?>
                    </div>
                </div>
            </div>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 copyright_wrap">
                            <div class="copyright">Copyright Wild & Without <?= date('Y') ?></div>
                        </div>
                        <div class="col-md-6 social_links_wrap">
                            <?= cstheme_social_links() ?>
                            <div class="do-ref small mt-4"><p>Proudly hosted on <a class="link" href="https://m.do.co/c/cc90ea102df3">Digital Ocean</a>. If you need hosting, <a class="link" href="https://m.do.co/c/cc90ea102df3">get some free credit.</a></p></div>
                        </div>
                        <div class="col-md-3 scroll_top_wrap">
                            <a class="btn-scroll-top heading_font" href="javascript:void(0);"><?= esc_html__('Back top',) ?><i class="fa fa-chevron-up"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        <?php wp_footer(); ?>
        <script async defer data-pin-hover="true" data-pin-tall="true" data-pin-round="true" src="//assets.pinterest.com/js/pinit.js"></script>
    </body>
</html>
