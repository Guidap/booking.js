(function() {
    function Booking() {

        this.domain = null;
        this.uuid = null;

        let rootElement = null;
        let contentElement = null;
        let iframeElement = null;

        /** Creates root element for modal to be displayed
         *
         */
        let createRoot = function() {
            rootElement = document.createElement('div');
            rootElement.setAttribute('style', 'display:none; position:fixed; left:0; top:0; height:100vh; width:100vw; background-color:rgba(50, 50, 50, 0.5);');
        };

        /** Creates veil meant to darken website, hold close button and iframe
         *
         */
        let createVeil = function() {
            contentElement = document.createElement('div');
            contentElement.setAttribute('style', 'position:absolute; left:10px; top:25px; width:calc(100% - 20px); height:calc(100% - 50px); box-sizing: border-box; border:1px solid #E0E0E0; background-color:#fff; box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);');
        };

        /** Creates button meant to close modal
         *
         */
        let createCloseButton = function() {
            let closeElement = document.createElement('div');
            closeElement.setAttribute('style', 'position:absolute; top:-22px; right:-8px; height:44px; width:44px; border-radius:50%; background:#fff; text-align:center; font-family: sans-serif; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.20); cursor:pointer;');
            closeElement.setAttribute('onClick', 'GUIDAP.booking.close()');
            closeElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="height:100%" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="4c4c4c" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>';
            return closeElement;
        };

        /** Creates iframe meant to show content
         *
         */
        let createIframe = function() {
            iframeElement = document.createElement('iframe');
            iframeElement.setAttribute('style', 'width:100%; height:100%');
            iframeElement.setAttribute('marginwidth', "0");
            iframeElement.setAttribute('marginHeight', "0");
            iframeElement.setAttribute('frameborder', "0");
            iframeElement.setAttribute('vspace', "0");
            iframeElement.setAttribute('hspace', "0");
            iframeElement.setAttribute('allowtransparency', "0");
        };

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

            iframeElement.setAttribute('src', 'http://' + this.domain + '/app_dev.php/export/full/' + uuid);
            rootElement.style.display = 'block';

            return false;
        };

        /** Closes modal
         */
        this.close = function () {
            iframeElement.setAttribute('src', '');
            rootElement.style.display = 'none';
        };

        /** Sets owner domain for use in iframe, creates modal
         * @param domain Tenant domain
         */
        this.init = function (domain) {
            this.domain = domain;

            createRoot();
            createVeil();
            contentElement.appendChild(createCloseButton());

            createIframe();
            contentElement.appendChild(iframeElement);

            rootElement.appendChild(contentElement);
            document.body.appendChild(rootElement);
        };

    };

    window.GUIDAP = window.GUIDAP || {};
    GUIDAP.booking = new Booking();
})();
