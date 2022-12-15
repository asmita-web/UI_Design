import React  from "react";
import './style.css';
import arrow from '../assets/photose/1.png';
import user from '../assets/photose/2.png';

export default function Home(){
    return(

        <div>
        <div class="mainclass">
             <div class="headerclass">
                <div class="upcomming">
                    <div class="icon">
                        <span class="imagesize">
                            <img src={arrow}  alt="image"/>
                            </span>

                    </div>
                    <div>
                        <span>UPCOMING APPOINMENTS</span>
                    </div>
                  
                   
                    
                </div>
                
             </div>
             <div class="sectionone">
                <div class="newbooking">
                 <span>New Booking In 2 Minutes</span>
                </div>
                <div class="booknow">
                    <span>Book Now</span>
                </div>
             </div>
             <div class="center">
             <div class="card">
                  <div class="innersection">
                   
                    <div class="mainsectiontwo">

                        <div class="middlesection">
                            <div class="clinic"><span>Clinic</span></div>
                            <div class="Test"><span>Test</span></div>
                            <div class="Test"><span>Surgery</span></div>
                            <div class="Test"><span>Medicine</span></div>
                        </div>
                        <div class="sectiontwo">
                            <div class="imagesection">
                                <img class="image" src={user} alt="image" width="100%"/>
                            </div>
                            <div class="Appointment">
                                <div>17 September 2021, 9.30 PM</div>
                                <div class="doctor">Appointment With Doctor Arun</div>
                                <div class="world">Doctor World Clinic</div>
                               
                            </div>
                        </div>
                      
                      
                        <div class="RESCHEDULE">
                            <div class="button"><span>RESCHEDULE</span></div>
                            <div class="button"><span>CANCEL</span></div>
                            <div class="VIEW"><span>VIEW</span></div>
                        </div>
                    </div>
                  </div>
             </div>
            </div>
             <div >
             <div class="center">
                <div class="card">
                    <div class="innersection">
                      
                      <div class="mainsectiontwo">
                        <div class="middlesection">
                            <div class="clinic"><span>Clinic</span></div>
                            <div class="Test"><span>Test</span></div>
                            <div class="Test"><span>Surgery</span></div>
                            <div class="Test"><span>Medicine</span></div>
                        </div>
                          <div class="sectiontwo">
                              <div class="imagesection">
                                  <img class="image" src={user} alt="image" width="100%"/>
                              </div>
                              <div class="Appointment">
                                  <div>17 September 2021, 9.30 PM</div>
                                  <div class="doctor">Appointment With Doctor Arun</div>
                                  <div class="world">Doctor World Clinic</div>
                                  <div class="xray">test :  X-ray test</div>
                                 
                              </div>
                          </div>
                        
                        
                          <div class="RESCHEDULE">
                              <div class="button"><span>RESCHEDULE</span></div>
                              <div class="button"><span>CANCEL</span></div>
                              <div class="VIEW"><span>VIEW</span></div>
                          </div>
                      </div>
                    </div>
               </div>
             </div>


           
            
             <div class="mainback">
                <div class="backbutton"><span>Back</span></div>
             </div>
        </div>
    </div>
    </div>
    )
}