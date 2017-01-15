    if (page == '/') {
        
    } else {
        var script1 = document.createElement('script');
        script1.src = page + '.js';
        document.head.appendChild(script1);
    }
