define([], function() {

    var initData = function(data) {
        initTable(data);
    }

    function initTable(data) {

        if (data.result) {
            var str = "";
            var og = data.orderGoods;
            var order = data.order;

            str = "<h4><i class='iconfont'>&#xe60c;</i>" + og.statusName + "</h4>" +
                "   <p>订单编号：" + order.id + "</p>" +
                "   <p>成功时间：" + og.refundtimeStr + "</p>" +
                "   <p>订单状态：" + order.order_status_name + "</p>";
            $("#orderHeader").html(str);

            str = "<div class='order-img'><img src='" + og.goods_img + "' alt=''></div>" +
                "   <div class='order-info'>" +
                "<p class='title'>" + og.goods_name + " 规格:" + og.spec1_desc + " " + og.spec2_desc + "</p>" +
                "<p class=''>合计:<em>￥" + og.total + "</em><span>(￥" + og.price + "x" + og.num + ")</span></p>" +
                "</div>";
            $("#ordergoods").html(str);


            str = "<p class='overflow'><span class='f-left'>退款数量</span><em class='f-right'>" + og.num + "</em></p>" +
                "   <p class='overflow'><span class='f-left'>退款金额</span><em class='f-right'>" + og.total + "</em></p>" +
                //" <p class='overflow'><span class='f-left'>退款需求</span><em class='f-right'>仅退款</em></p>"+
                //" <p class='overflow'><span class='f-left'>退款原因</span><em class='f-right'>买错了</em></p>"+
                "   <p class='overflow'><span class='f-left'>退款说明</span><em class='f-right'>" + og.refund_msg + "</em></p>" +
                "   <p class='overflow'><span class='f-left'>退款账户</span><em class='f-right'>原支付账户</em></p>" +
                "<p class='overflow'><span class='f-left'>物流公司</span><input type='text' id='company' class='f-right'></p>" +
                "<p class='overflow'><span class='f-left'>快递单号</span><input type='text' id='express' class='f-right'></p>" +
                "<div class='btn'><a href='javascript:void(0);' data-orderid=" + order.id + "id='confirm'>提交物流信息</a></div>";
            $("#others").html(str);
        }
    }

    return {
        initData: initData
    }
});