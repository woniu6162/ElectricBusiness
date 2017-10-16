// 获取衣服界面的数据
function clothing() {
    $.get("../json/clothing.json", function (data) {
        // data.Each(function (element) {
        //     console.log(data.data)
        // });

    });
}
clothing();