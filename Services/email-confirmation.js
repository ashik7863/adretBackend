const nodemailer = require("nodemailer");
const sendEmail = async (contact_person) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ashikmolla78633@gmail.com",
        pass: "sbdu rpmf wgsm qaha",
      },
    });

    const mailOptions = {
      from: "ashikmolla78633@gmail.com", //company
      to: contact_person.email, //user
      subject: "Thank you for your query",
      html: `<div>
    <div class="">
     <div class="aHl"></div>
     <div id=":pt" tabindex="-1"></div>
     <div id=":pg" class="ii gt" jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTc2Njg1OTM1NjcxNDQwMjcyOSJd; 4:WyIjbXNnLWY6MTc2Njg1OTM1NjcxNDQwMjcyOSJd">
        <div id=":pf" class="a3s aiL ">
           <u></u>
           <div style="margin:0">
              <table style="border-collapse:collapse;max-width:600px;width:100%;margin:0 auto;color:#000;font-size:19px;line-height:1.5;background:#ffffff;vertical-align:top;border-bottom:5px solid #012033;font-family:Arial,sans-serif">
                 <tbody>
                    <tr>
                       <td width="100%" style="text-align:center;padding:10px 30px;border-bottom:5px solid #00baff"><a style="display:inline-block;text-decoration:none" href="https://www.adretsoftware.in/" target="_blank"><img width="300px" src="https://www.adretsoftware.in/images/logo-dark.webp" alt="Adret Software pvt ltd" class="CToWUd" data-bit="iit" jslog="138226; u014N:xr6bB; 53:WzAsMl0."></a></td>
                    </tr>
                    <tr>
                       <td style="text-align:center;padding:10px 30px">
                          <h3 style="color:#163560;font-weight:700;font-size:28px;margin:5px 0">Hello! ${
                            contact_person.name
                          }</h3>
                          <h4 style="color:#3b99d1;font-weight:700;font-size:31px;margin:5px 0">Thank You for post your query!!!</h4>
                          
                       </td>
                    </tr>
                    <tr>
                     <td style="background-color:#ebf3fa;padding:10px 30px">
                        <table style="border-collapse:collapse;width:100%">
                           <tbody>
                              <tr>
                                 <td style="text-align:center">
                                    <h5 style="color:#2b478b;font-size:17px;font-weight:700;margin-bottom:15px">Query Information</h5>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <table style="border-collapse:collapse;width:100%">
                                       <tbody>
                                          <tr>
                                             <td style="padding:8px 0;width:45%">
                                                <h4 style="color:#1b3768;font-size:17px;font-weight:700;margin:0">Name : </h4>
                                             </td>
                                             <td style="text-align:left;padding:8px 0;width:55%">
                                                <p style="color:#1b3768;font-size:17px;font-weight:400;margin:0">${contact_person.name}</p>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td style="padding:8px 0;width:45%">
                                                <h4 style="color:#1b3768;font-size:17px;font-weight:700;margin:0">Mobile : </h4>
                                             </td>
                                             <td style="text-align:left;padding:8px 0;width:55%">
                                                <p style="color:#1b3768;font-size:17px;font-weight:400;margin:0">${contact_person.mobile}</p>
                                             </td>
                                          </tr>

                                          <tr>
                                             <td style="padding:8px 0;width:45%">
                                                <h4 style="color:#1b3768;font-size:17px;font-weight:700;margin:0">Email : </h4>
                                             </td>
                                             <td style="text-align:left;padding:8px 0;width:55%">
                                                <p style="color:#1b3768;font-size:17px;font-weight:400;margin:0">${contact_person.email}</p>
                                             </td>
                                          </tr>

                                          <tr>
                                             <td style="padding:8px 0;width:45%">
                                                <h4 style="color:#1b3768;font-size:17px;font-weight:700;margin:0">Category : </h4>
                                             </td>
                                             <td style="text-align:left;padding:8px 0;width:55%">
                                                <p style="color:#1b3768;font-size:17px;font-weight:400;margin:0">${contact_person.category}</p>
                                             </td>
                                          </tr>
                                          
                                          <tr>
                                             <td style="padding:8px 0;width:45%;vertical-align:top">
                                                <h4 style="color:#1b3768;font-size:17px;font-weight:700;margin:0">Message : </h4>
                                             </td>
                                             <td style="text-align:left;padding:8px 0;width:55%">
                                                <p style="color:#1b3768;font-size:17px;font-weight:400;margin:0">${contact_person.message}</p>
                                             </td>
                                          </tr>
                                         
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                              
                           </tbody>
                        </table>
                     </td>
                  </tr>
                  <tr>
                          <td>
                          <h5 style="color:#384152;font-weight:700;font-size:16px;margin:10px 0 15px 0">We will get back to you soon</h5>
                          </td>                  
                  </tr>

                
  
                 </tbody>
              </table>
              <div class="yj6qo"></div>
              <div class="adL">
              </div>
           </div>
           <div class="adL">
           </div>
        </div>
     </div>
     <div id=":qh" class="ii gt" style="display:none">
        <div id=":qi" class="a3s aiL "></div>
     </div>
     <div id=":pv" class="hq gt">
        <div class="hp"></div>
        <div id=":px" class="ho">
           
           <div class="aZi J-J5-Ji">
              <div id=":ql" class="T-I J-J5-Ji aZj T-I-ax7 L3" role="button" aria-label="Add all to Drive" aria-disabled="false" data-tooltip="Add all to Drive" style="user-select: none;" tabindex="0">
                 <div class="asa">
                    <div class="XF T-I-J3 J-J5-Ji">
                       <div class="T-aT4">
                          <div></div>
                          <div class="T-aT4-JX"></div>
                       </div>
                    </div>
                 </div>
                 <div class="a3I">&nbsp;</div>
              </div>
           </div>
        </div>
        <div id=":q1"></div>
        <div id=":pw" class="aQH">
           <span class="aZo N5jrZb" download_url="application/pdf:Invoice-1685008387.pdf:https://mail.google.com/mail/u/0/https://mail.google.com/mail/u/0?ui=2&amp;ik=5fd6b33736&amp;attid=0.1&amp;permmsgid=msg-f:1766859356714402729&amp;th=18852539450983a9&amp;view=att&amp;disp=safe" draggable="true">
              <a id=":q2" class="aQy aZr e" href="https://mail.google.com/mail/u/0?ui=2&amp;ik=5fd6b33736&amp;attid=0.1&amp;permmsgid=msg-f:1766859356714402729&amp;th=18852539450983a9&amp;view=att&amp;disp=inline" target="_blank" role="link" jslog="119523; u014N:xr6bB,cOuCgd,Kr2w4b; 4:WyIjbXNnLWY6MTc2Njg1OTM1NjcxNDQwMjcyOSJd; 43:WyJhcHBsaWNhdGlvbi9wZGYiLDc4NjAwXQ.." data-tooltip-align="t,c" data-tooltip-class="a1V" tabindex="0">
             
                 <div aria-hidden="true">
                    <div class="aSG"></div>
                    <div class="aVY aZn">
                       <div class="aZm"></div>
                    </div>
                    
                       
                    </div>
                    <div class="aSI">
                       <div id=":q4" class="aSJ" style="border-color: #fb4c2f"></div>
                    </div>
                 </div>
              </a>
              <div class="aQw">
                 <div id=":qc" class="T-I J-J5-Ji aQv T-I-ax7 L3" role="button" aria-label="Download attachment Invoice-1685008387.pdf" jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTc2Njg1OTM1NjcxNDQwMjcyOSJd" data-tooltip-class="a1V" aria-disabled="false" style="user-select: none;" tabindex="0" data-tooltip="Download">
                    <div class="akn">
                       <div class="aSK J-J5-Ji aYr"></div>
                    </div>
                 </div>
                 <div id=":qd" class="T-I J-J5-Ji aQv T-I-ax7 L3" role="button" aria-label="Add attachment to Drive Invoice-1685008387.pdf" jslog="54185; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTc2Njg1OTM1NjcxNDQwMjcyOSJd; 4:WyIjbXNnLWY6MTc2Njg1OTM1NjcxNDQwMjcyOSJd; 43:WyJhcHBsaWNhdGlvbi9wZGYiLDc4NjAwXQ.." data-tooltip-class="a1V" aria-hidden="false" style="user-select: none;" tabindex="0" data-tooltip="Add to Drive">
                    <div class="akn">
                       <div class="wtScjd J-J5-Ji aYr XG">
                          <div class="T-aT4" style="display: none;">
                             <div></div>
                             <div class="T-aT4-JX"></div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div id=":qe" class="T-I J-J5-Ji aQv T-I-ax7 L3" role="button" aria-label="Edit attachment with  Invoice-1685008387.pdf" jslog="92518; u014N:cOuCgd,xr6bB; 1:WyIjdGhyZWFkLWY6MTc2Njg1OTM1NjcxNDQwMjcyOSJd; 4:WyIjbXNnLWY6MTc2Njg1OTM1NjcxNDQwMjcyOSJd; 43:WyJhcHBsaWNhdGlvbi9wZGYiLG51bGwsMF0." data-tooltip-class="a1V" aria-hidden="true" style="user-select: none; display: none;" data-tooltip="Edit with ">
                    <div class="akn">
                       <div class="aYt J-J5-Ji aYr"></div>
                    </div>
                 </div>
              </div>
           </span>
           <div class="aZK"></div>
        </div>
     </div>
     <div class="hi"></div>
     <div class="WhmR8e" data-hash="0"></div>
  </div>
    </div>`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports={sendEmail};