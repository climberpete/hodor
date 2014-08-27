imgFind();
walk(document.body);

function walk(node) 
{
        // I stole this function from here:
        // http://is.gd/mwZp7E
        
        var child, next;

        switch ( node.nodeType )  
        {
                case 1:  // Element
                case 9:  // Document
                case 11: // Document fragment
                        child = node.firstChild;
                        while ( child ) 
                        {
                                next = child.nextSibling;
                                walk(child);
                                child = next;
                        }
                        break;

                case 3: // Text node
						node.nodeValue = 'Hodor';
                        //handleText(node);
                        break;
        }
}

function imgFind() {
    var imgs = document.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
		imgs[i].src = "http://i.imgur.com/Kcp0tRa.jpg";
    }
}