def subtract_sum(number):
    lst = []
    if number <= 100:
        return 'apple'
    for i in str(number):
        lst.append(int(i))
    return subtract_sum(number - sum(lst))



# 3) კომენტარების სახით ახსენი box-model ატრიბუტები

#    BOX MODEL

# content
#    ელემენტის შიგნით არსებული რეალური კონტენტი:
#    ტექსტი, სურათი, ვიდეო და ა.შ.
#    width და height default-ად ეხება მხოლოდ content-ს 
# .content {
#     width: 200px;   /* კონტენტის სიგანე */
#     height: 100px;  /* კონტენტის სიმაღლე */
# }

# /* padding
#    შიდა სივრცე content-სა და border-ს შორის
#    ზრდის ელემენტის ზომას */
# .padding {
#     padding: 20px;               /* ყველა მხრიდან 20px */
#     padding-top: 10px;           /* ზემოდან */
#     padding-right: 15px;         /* მარჯვნიდან */
#     padding-bottom: 10px;        /* ქვემოდან */
#     padding-left: 15px;          /* მარცხნიდან */
# }

# /* border
#    ჩარჩო ელემენტის გარშემო
#    ითვლება box-model-ის ნაწილად */
# .border {
#     border: 2px solid black;     /* სისქე | სტილი | ფერი */
# }

# /* margin
#    გარე სივრცე ელემენტსა და სხვა ელემენტებს შორის
#    არ შედის ელემენტის ზომაში */
# .margin {
#     margin: 30px;                /* ყველა მხრიდან */
#     margin-top: 10px;
#     margin-right: 20px;
#     margin-bottom: 10px;
#     margin-left: 20px;
# }

# /* box-sizing
#    განსაზღვრავს როგორ ითვლება width და height */
# .box-sizing-content {
#     box-sizing: content-box;
#     /* default მნიშვნელობა
#        width/height ითვლის მხოლოდ content-ს
#        padding და border ემატება ზომას */
# }

# .box-sizing-border {
#     box-sizing: border-box;
#     /* width/height მოიცავს content + padding + border-ს
#        ყველაზე ხშირად გამოყენებადი */
# }

# /* =========================
#    ზომის გამოთვლა (content-box)
#    ========================= */
# /*
# width: 200px
# padding: 20px
# border: 5px

# საბოლოო სიგანე:
# 200 + 20*2 + 5*2 = 250px
# */

# /* =========================
#    ზომის გამოთვლა (border-box)
#    ========================= */
# /*
# width: 200px
# padding და border უკვე შიგნითაა
# საბოლოო სიგანე: 200px
# */
