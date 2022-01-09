function love() {
    var person1 = document.querySelector(".person1").value;
    var person2 = document.querySelector(".person2").value;
    if (person1 === "") 
    {
        alert("Enter your name!");
    } else if (person2 === "") 
    {
        alert("Enter your crush's name");
    } else 
    {
        var wholeName = person1 + person2;
        lovePercent = Math.floor(Math.random() * 100) + wholeName.length;
        if(lovePercent > 100)
        {
            lovePercent = 100;
        }
        alert(lovePercent);
        document.querySelector(".couple").innerHTML = "'" + person1 + "'  &  '" + person2 + "'";
        document.querySelector(".heart").style.display = "block";
        document.querySelector(".scroll-below").style.display = "block";
        document.querySelector(".lovePercent").style.display = "block";
        document.querySelector(".lovePercent").innerHTML = lovePercent + "%";
        var remark = "";
        if(lovePercent == 100 && lovePercent >= 79)
        {
            remark = "A beautiful relationship is a never ending paradise.A beautiful relationship consists of two souls falling in love,it's all about that fire in the heart which makes us strive forward in life You feel complete,you are connected to your true self that's what makes a relationship beautiful A beautiful relationship has immense love,passion,compassion you feel like you're connected to them in the previous life.";
        }
        else if(lovePercent < 79 && lovePercent >= 65 )
        {
            remark = "This Relation has a reasonable chance of working out, but on the other hand, it might not. Your relationship may suffer good and bad times. If things might not be working out as you would like them to, do not hesitate to talk about it with the person involved. Spend time together, talk with each other.";
        }
        else if(lovePercent < 65 && lovePercent >= 40)
        {
            remark = "Its possible, if the two of you really want it to, and are prepared to make some sacrifices for it. You'll have to spend a lot of quality time together. You must be aware of the fact that this relationship might not work out at all, no matter how much time you invest in it.";
        }
        else if(lovePercent < 40)
        {
            remark = "A successful relationship is possible, but you both have to work on it. Do not sit back and think that it will all work out fine, because it might not be working out the way you wanted it to. Spend as much time with each other as possible. Again, the chance of this relationship working out is very small, so even when you do work hard on it, it still might not work out.";
        }
        document.querySelector(".about").style.display = "block";
        document.querySelector(".about").innerHTML = remark;
        document.querySelector(".reload").style.display = "block";
        document.querySelector(".person1").readOnly = true;
        document.querySelector(".person2").readOnly = true;


    }
}