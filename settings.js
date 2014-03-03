$(document).ready(function(){
	var fdbck = $("#feedback");
	var placeholder = "";
    var newplace = "";
    var remindTime = "";
    var startFdbck = "";
    var placeFdbck = "";
    var table=document.getElementById('faveTable');
    var l1 = $("#location1");
    var l2 = $("#location2");
    var l3 = $("#location3");
    var newLoc = "";

	document.getElementById("setSpot").onclick = function(){
		placeholder = document.getElementById('spot').value;
        if (placeholder == "")
        {
            placeFdbck = "Please enter a value for current spot before submitting.";
            fdbck.text(placeFdbck);
        }
        else
        {
            $('#spot').prop('placeholder',placeholder);
            placeFdbck = placeholder + " saved as current spot.";
    		fdbck.text(placeFdbck);
        }
	}
    document.getElementById("clear").onclick = function(){
        newplace = "";
        fdbck.text(newplace);
        $('#spot').prop('placeholder', newplace);
        document.getElementById('spot').value = "";
        placeholder = "";
    }

    $("#addFave").click(function(){
       document.getElementById("faveModal").style.visibility="visible";
       document.getElementById("myModal").style.visibility = "hidden";
       fdbck.text("");
    });
    document.getElementById("saveFave").onclick = function(){
        newLoc = document.getElementById("faveAdd").value;
        if(newLoc != ""){
            if(l1.text() == "")
            {
                l1.text(newLoc);
                document.getElementById("faveAdd").value = "";
                document.getElementById("faveModal").style.visibility="hidden";
                document.getElementById("remove1").style.visibility = "visible";
            }
            else if(l2.text() == "")
            {
                l2.text(newLoc);
                document.getElementById("faveAdd").value = "";
                document.getElementById("faveModal").style.visibility="hidden";
                document.getElementById("remove2").style.visibility = "visible";
            }
            else{
                l3.text(newLoc);
                document.getElementById("faveAdd").value = "";
                document.getElementById("faveModal").style.visibility="hidden";
                document.getElementById("addFave").style.visibility = "hidden";
                document.getElementById("remove3").style.visibility = "visible";
            }
        }
        else{
            document.getElementById("faveModal").style.visibility="hidden";
            fdbck.text("Please enter a value for new favorite address.");

        }

    }
    document.getElementById("closeFave").onclick = function(){
        document.getElementById("faveModal").style.visibility="hidden";
    }
    document.getElementById("remove1").onclick = function(){
        l1.text("");
        document.getElementById("remove1").style.visibility = "hidden";
        document.getElementById("addFave").style.visibility = "visibile";
    }
    document.getElementById("remove2").onclick = function(){
        l2.text("");
        document.getElementById("remove2").style.visibility = "hidden";
        document.getElementById("addFave").style.visibility = "visible";
    }
    document.getElementById("remove3").onclick = function(){
        l3.text("");
        document.getElementById("remove3").style.visibility = "hidden";
        document.getElementById("addFave").style.visibility = "visible";
    }
    document.getElementById("save").onclick = function(){
        remindTime = document.getElementById("alertTime").value;
        if (remindTime == ""){
            fdbck.text("Please select a time.");
        }
        else{
            fdbck.text("Reminder set for: " + remindTime + ".");
            document.getElementById("alertTime").value = "";
            document.getElementById("myModal").style.visibility = "hidden";
        }   
    }
	$("#reminder").click(function(){
        document.getElementById("myModal").style.visibility = "visible";
        document.getElementById("faveModal").style.visibility="hidden";
        fdbck.text("");
    });
    document.getElementById("closeTime").onclick = function(){
        document.getElementById("myModal").style.visibility="hidden";
    }


    $("#check").click(function(){
        if (placeholder==""){
            fdbck.text("Err: No parking spot currently saved.");
        }
        else
        {
            var check = "Yes! This spot currently allows 2-hour parking.";
            fdbck.text(check);
        }
    });
});
