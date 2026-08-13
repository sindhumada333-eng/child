        function generateQR() {

            let childName = document.getElementById("childName").value;
            let parentName = document.getElementById("parentName").value;
            let mobile = document.getElementById("mobile").value;
            let age = document.getElementById("age").value;

            if (childName == "" || parentName == "" ||
                mobile == "" || age == "") {

                alert("Please enter all information");
                return;
            }

            // Child information
            let information =
                "Child Name: " + childName +
                "\nParent Name: " + parentName +
                "\nMobile Number: " + mobile +
                "\nChild Age: " + age;
                "\nAddress:" + address;

            // Remove old QR code
            document.getElementById("qrcode").innerHTML = "";

             document.getElementById("message").innerHTML =
                "QR Code Generated Successfully!";
         

            // Generate QR code
            new QRCode(document.getElementById("qrcode"), {
                text: information,
                width: 200,
                height: 200
            });

        }

