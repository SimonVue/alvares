!function(r,o,e){jQuery(e).ready(function(){var t,e,n;"IntersectionObserver"in o&&"IntersectionObserverEntry"in o&&"intersectionRatio"in o.IntersectionObserverEntry.prototype&&(t="ibm-duo-u--bg-lazy-load",e=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&r(e.target).removeClass(t).addClass(t+"--processed")})},{rootMargin:"0px 0px 100px 0px",threshold:[0,.01]}),(n=r("[data-bg-lazy-load")).addClass(t),n.each(function(){e.observe(this)}))})}(jQuery,this,this.document);