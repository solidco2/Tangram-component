/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */

///import baidu.ui.dialog.Dialog;
///import baidu.ui.behavior.coverable;

baidu.extend(baidu.ui.dialog.Dialog.prototype,{
    coverable: true,
    coverableOptions: {}
});

baidu.ui.dialog.Dialog.register(function(me){

    if(me.coverable){

        me.addEventListener("onopen", function(){
            me.Coverable_show();
        });

        me.addEventListener("onclose", function(){
            me.Coverable_hide();
        });

        me.addEventListener("onupdate",function(){
            me.Coverable_update();
        });
    }
});
