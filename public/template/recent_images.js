this.T=this.T||{},this.T.recent_images=new Hogan.Template(function(a,b,c){var d=this;return d.b(c=c||""),d.s(d.f("images",a,b,1),a,b,0,11,105,"{{ }}")&&(d.rs(a,b,function(a,b,c){c.b('<img src="'),c.b(c.v(c.f("dataUrl",a,b,0))),c.b('" class="img-polaroid" width="250" onclick="location.href=\''),c.b(c.v(c.f("url",a,b,0))),c.b("'\" />"),c.b("\n")}),a.pop()),d.fl()});