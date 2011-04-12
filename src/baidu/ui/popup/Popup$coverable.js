/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */

///import baidu.ui.popup;
///import baidu.ui.popup.Popup;
///import baidu.ui.behavior.coverable;

baidu.extend(baidu.ui.popup.Popup.prototype,{
    coverable: true,
    coverableOptions: {}
});

baidu.ui.popup.Popup.register(function(me){

    if(me.coverable){

        me.addEventListener("onopen", function(){
            me.Coverable_show();
        });

        me.addEventListener("onclose", function(){
            me.Coverable_hide();
        });

        me.addEventListeners("onupdate",function(){
            me.Coverable_update();
        });
    }
});
