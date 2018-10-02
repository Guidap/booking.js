(function() {
    let GUIDAP = {};

    if(window.GUIDAP) {
        GUIDAP = window.GUIDAP;
    }

    function Booking() {

        this.domain = null;
        this.uuid = null;

        this.rootElement = null;
        this.contentElement = null;
        this.iframeElement = null;

        /** Sets iframe src and display modal
         * @param uuid Uuid of module export
         * @param e JS event from onclick
         */
        this.call = function (uuid, e) {

            let event;
            if (!e) {
                event = window.event;
            } else {
                event = e;
            }

            // Cancel propagation
            event.cancelBubble = true;      // IE
            if (event.stopPropagation) {    // All modern browsers
                event.stopPropagation();
            }

            this.iframeElement.setAttribute('src', 'http://' + this.domain + '/app_dev.php/activity/export-full/' + uuid);
            this.rootElement.style.display = 'block';

            return false;
        };

        /** Closes modal
         */
        this.close = function () {
            this.iframeElement.setAttribute('src', '');
            this.rootElement.style.display = 'none';
        };

        /** Sets owner domain for use in iframe, creates modal
         * @param domain Tenant domain
         */
        this.init = function (domain) {
            this.domain = domain;

            // Creates a full page veil
            this.rootElement = document.createElement('div');
            this.rootElement.setAttribute('style', 'display:none; position:absolute; left:0; top:0; height:100vh; width:100vw; background-color:rgba(50, 50, 50, 0.5);');

            // Creates a modal on veil
            this.contentElement = document.createElement('div');
            this.contentElement.setAttribute('style', 'position:absolute; top:10px; left:10px; width:calc(100% - 20px); height:calc(100% - 20px); box-sizing: border-box; border:1px solid #E0E0E0; background-color:#fff; box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);');

            // Creates a close button
            let closeElement = document.createElement('div');
            closeElement.setAttribute('style', 'position:absolute; height:50px; width: 50px; top:0; right:0; background:rgba(224, 224, 224, 0.5); line-height:50px; text-align:center; font-family: sans-serif; cursor:pointer;');
            closeElement.setAttribute('onClick', 'GUIDAP.booking.close()');
            closeElement.innerHTML = 'X';
            this.contentElement.appendChild(closeElement);

            // Creates iframe used to display activity page
            this.iframeElement = document.createElement('iframe');
            this.iframeElement.setAttribute('style', 'width:100%; height:100%');
            this.iframeElement.setAttribute('marginwidth', "0");
            this.iframeElement.setAttribute('marginHeight', "0");
            this.iframeElement.setAttribute('frameborder', "0");
            this.iframeElement.setAttribute('vspace', "0");
            this.iframeElement.setAttribute('hspace', "0");
            this.iframeElement.setAttribute('allowtransparency', "0");
            this.contentElement.appendChild(this.iframeElement);

            this.rootElement.appendChild(this.contentElement);
            document.body.appendChild(this.rootElement);
        };
    };

    GUIDAP.booking = new Booking();
    window.GUIDAP = GUIDAP;
})();
