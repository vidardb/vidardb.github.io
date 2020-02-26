'use strict';

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SiteUtils =
    /*#__PURE__*/
    function () {
        function SiteUtils() {
            var _this = this;

            _classCallCheck(this, SiteUtils);

            $(function () {
                /* ------------
                   Global mobile menu: right side
                   -> open / close the right-side menu
                   ------------ */
                $('.menu-trigger a').click(function (event) {
                    event.preventDefault();
                    $('body').toggleClass('pmr-open');
                });

                /* ------------
                   Blog right panel should be set to a fixed position on scroll
                   ------------ */
                var $_sidebar = $('.blog-sidebar ul');

                if ($_sidebar.length) {
                    var blog_sidebar_sticky = new Waypoint.Sticky({
                        element: $('.blog-sidebar ul')
                    });
                    var blog_sidebar_github = new Waypoint({
                        element: $('.blog-sidebar ul'),
                        handler: function handler() {
                            // Delay the popup animation
                            setTimeout(function () {
                                $('.github-star .popup', $_sidebar).removeClass('hidden');
                            }, 2000);
                        }
                    });
                }

                /* ------------
                   Docs navigation: collapse / expand sections
                   ------------ */
                $('.docs-nav h1, .mobile-doc-links h1').click(function (event) {
                    $(event.target).parent().toggleClass('expand').next('ul').slideToggle('fast', function () {
                        // Refresh any waypoints: expanding the the menu may have shifted trigger points
                        if (Waypoint) {
                            Waypoint.refreshAll();
                        }
                    });
                    event.preventDefault();
                    return;
                });

                _this.rewrite_links();

                _this.create_video_modals();
            });
        }

        /* ------------
           Landing page: video modals
           ------------ */
        _createClass(SiteUtils, [{
            key: "create_video_modals",
            value: function create_video_modals() {
                var _this2 = this;

                // -> show a video modal on click
                $('.video').click(function (event) {
                    event.preventDefault();
                    var $modal = $('.video-modal', _this2); // Buid the iframe for the YouTube embed
                    // -------------------------------------
                    // Get the YouTube video id

                    var yt = $modal.data('youtube-id'); // Specify iframe attributes

                    var attrs = "width='560' height='315' frameborder='0' allowfullscreen"; // YouTube video options

                    var opts = "rel=0&autoplay=1&autohide=1"; // Video to show

                    var src = "src='//www.youtube.com/embed/".concat(yt, "?").concat(opts, "'");
                    var iframe = "<iframe ".concat(attrs, " ").concat(src, "></iframe>"); // Add the iframe to the modal

                    $('.iframe-container', $modal).html(iframe); // Fade in the modal

                    $modal.fadeIn('fast');
                }); // Two ways to dismiss videos: clicking outside the video or pressing ESC

                $('.video-modal').on('click', function (event) {
                    event.preventDefault();
                    event.stopPropagation();

                    _this2.dismiss_video();
                });
                $(document).keyup(function (event) {
                    if (event.keyCode == 27) {
                        _this2.dismiss_video();
                    }
                });
            } // -> hide the video modal

        }, {
            key: "dismiss_video",
            value: function dismiss_video() {
                $modal = $('.video-modal:visible');
                $modal.fadeOut('fast', function () {
                    // Once the modal has faded out, reset the content once again
                    $('.iframe-container').empty();
                });
            }

            /* ------------
               Rewrite links that point to multi-language
               documents, based on the language switcher + a cookie
               ------------*/
        }, {
            key: "rewrite_links",
            value: function rewrite_links() {
                // List of multi-language documents
                var routes = {
                    '/api/': true,
                    '/docs/changefeeds/': true,
                    '/docs/cookbook/': true,
                    '/docs/dates-and-times/': true,
                    '/docs/geo-support/': true,
                    '/docs/guide/': true,
                    '/docs/nested-fields/': true,
                    '/docs/publish-subscribe/': true,
                    '/docs/rabbitmq/': true,
                    '/docs/secondary-indexes/': true,
                    '/docs/sql-to-reql/': true,
                    '/docs/storing-binary/': true
                }; // Get the current language from a cookie, if it exists

                var lang = Cookies.get('lang'); // Set the cookie with the current language in either case

                if (lang === undefined) {
                    lang = 'javascript';
                    Cookies.set('lang', lang, {
                        path: '/'
                    });
                } else if (/javascript/.test(document.location.pathname)) {
                    if (lang !== 'javascript') {
                        lang = 'javascript';
                        Cookies.set('lang', lang, {
                            path: '/'
                        });
                    }
                } else if (/python/.test(document.location.pathname)) {
                    if (lang !== 'python') {
                        lang = 'python';
                        Cookies.set('lang', lang, {
                            path: '/'
                        });
                    }
                } else if (/ruby/.test(document.location.pathname)) {
                    if (lang !== 'ruby') {
                        lang = 'ruby';
                        Cookies.set('lang', lang, {
                            path: '/'
                        });
                    }
                } // Rewrite the links on the page


                var links_on_page = $('a');

                for (var i = 0; i < links_on_page.length; i++) {
                    var link = links_on_page[i];
                    var href = $(link).attr('href');

                    if (href === undefined) {
                        continue;
                    } // Trim the hash at the end of URLs


                    if (href.substr(-1) === '#') {
                        href = href.substr(0, href.length - 1);
                    } // Make sure there's a trailing slash


                    if (href.substr(-1) !== '/') {
                        href = "#{href}/";
                    } // Rewrite only the right links


                    if (routes[href]) {
                        $(link).attr('href', href + lang + '/');
                    }
                }
            }
        }]);

        return SiteUtils;
    }();

var site = new SiteUtils();
