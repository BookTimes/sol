<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ask</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cabin:wght@600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body onload="checkCookie()">
    <div class="grid-container">
      <div class="det">
        <span id='userId'></span><br>
        <span id="userGr"></span>
               <button class="tb" onclick="delc()" style="height: 20px; font-size: small;">Sign Out</button>

                </div>

      <div class="item1" style="position: fixed;width: 100%;top: -1px;"><span>ᛗᛁᛗᛁᚱ</span>
        <div class="xHPsid" jsname="njTs3e" role="list"><div class="wZTANe" role="listitem"></div><div class="wZTANe" role="listitem"><a class="u2mfde hN1OOc EZrbnd J1raN S6Vdac active " target="_self" href="https://booktimes.github.io/sol/" guidedhelpid="classworkTab">Ask</a></div><div class="wZTANe" role="listitem"><a class="u2mfde hN1OOc EZrbnd J1raN S6Vdac " target="_self" href="https://slackedlime.github.io/Mimir/" guidedhelpid="studentTab">Tell</a></div></div>
      </div>
      
      <div class="item1" style="opacity: 0;"><span>Mim</span></div>
      <div class="item3">
            <h1 id="ol">Ask your doubts</h1>
            <div id="qnb" class="qnBox">
                <textarea  placeholder="Tell me your doubts" class="tbox" id="tbox"></textarea>
                <select  class="sel" id="sel">
                    <option value="nono">
                        Pick a subject
                        </option>
                        <option value="Maths">Mathematics</option>
                 
                        <option  value="English">English</option>
                        <option  value="Biology">Biology</option>
                        <option  value="Chemistry">Chemistry</option>
                        <option  value="Physics">Physics</option>
                        <option  value="Social">Social Studies</option>
                       
                        <option value="Computer">Computer Science</option>
                        <option  value="French">French</option>
                        <option  value="Hindi">Hindi</option>
                        <option  value="Malayalam">Malayalam</option>


                        
                </select>
                <button class="tb" id="tb" onclick="submit()">Ask</button>
            </div>
            <div  class="dbts" id="dbts">
              <form class="modal hid" id="modsel">
                <h1 style="text-align: center;">Sign In</h1>
                <input id="ussel" type="text" class="tbox" placeholder="Username" style="height: 15px;margin-bottom: -20px; "></input>
                <select  class="spin" id="rosel">
                  <option value="nono">Role</option>
                  <option value="tr">Teacher</option>
                  <option value="sd">Student</option>
                </select>
                <select  class="spin hid" id="sujsel">
                  <option value="nono">Subject</option>
                  <option value="Maths">Mathematics</option>
                  <option  value="English">English</option>
                  <option  value="Biology">Biology</option>
                  <option  value="Chemistry">Chemistry</option>
                  <option  value="Physics">Physics</option>
                  <option  value="Social">Social Studies</option>
                  <option value="Computer">Computer Science</option>
                  <option  value="French">French</option>
                  <option  value="Hindi">Hindi</option>
                  <option  value="Malayalam">Malayalam</option>
                </select>
                <select  class="spin hid" id="grsel">
                  <option>Grade</option>
                   <option>1</option>
                   <option>2</option>
                   <option>3</option>
                   <option>4</option>
                   <option>5</option>
                   <option>6</option>
                   <option>7</option>
                   <option>8</option>
                   <option>9</option>
                   <option>10</option>
                </select>
                <input id="subsel" type="submit" class="subb" onclick="checkCookie()"></input>
              </div>
              <div class="overlay hid" id="ossel"></div>
          </div>
      </div>

  </body>
   
</html>
<script src="script.js" ></script>

