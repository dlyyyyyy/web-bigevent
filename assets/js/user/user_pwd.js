$(function(){
    var form=layui.form
    var layer=layui.layer
    form.verify({
        pwd:[
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
        ],
        samePwd:function(value){
            if(value==$('[name=oldPwd].val()')){
                return '新密码不能和原密码一样'
            }
        },
        rePwd:function(value){
            if(value!==$('[name=newPwd].val()')){
                return '确认新密码要和新密码一致'
            }
        }

    })
    
    $('.layui-form').on('submit',function(e){
        e.preventDefault()
        $ajax({
            method:'POST',
            url:'/my/updatepwd',
            data:$(this).serialize,
            success:function(res){
                if(res.status!==0){
                    return layui.layer.msg('更新密码失败')
                }
                layui.layer.msg('更新密码成功')

                //重置表单
                $('.layui-form')[0].reset()
                //先通过jquery的方式拿到一个对象，并将其转换为dom对象，然后调用form表单的reset方法来重置表单
            }
        })
    })
})