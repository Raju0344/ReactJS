import React from 'react'

import Card from './components/Card.jsx'


const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://cdn.simpleicons.org/google",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAACUCAMAAADyHdbUAAAA2FBMVEX/////uQHzUSMCpO9/uQL///1/uQEBpO/+/f////jzUCb///v8//8ApPF+uwDsrgD//vLK+/r7/d30/////+hupQD+/dKAswDPl3esx3T9+cYKo+rh/f3sVCfx0noAi8vPPADgTBt8v94Amt3+8uvgm4S2y3zhSSHMmYn2tQAAl991wcwAidQAitB1v9L+/MP+8+TNkH++NAC9j4BfjwBtmwCswHXbTyLcl4jKRB7KkZDw/9JgoADawbTDl2vS3LHy//HU8vt/sc/ksxnryn5zssoAfrjXpACt7Hk7AAAED0lEQVR4nO2cDVPaQBCGrw0hFy7BlASpYkupVMUWtB9qv2ytWvv//1HvLkQ+qsjtrXMJ3YeBDIzO7HPv7dnRbRgjCIIgiPXHh8A484XwXdeuAQnI0qWAYBz63SUgL0RAKIUAbOkfIwGfFat5e114e8fHcuXVOyE456jVAICtYSHgPgFYBbqD1UsIQaDWPxgMjtVTvaxOksjFF2HWgpChZKB3r1zD9x9eQfgYMuFnn9oATk4TwZn1YaQF5CK+OXsB4OwgkTuodVIzp9PZwxXoPwWwLwVC0WrX6qY0a0gCbFagYSrQP0hkA7fa9dr9j7s+rDfrtc4WukCj0VBPA/oqAS1gSLOZC3DULQQSkP8OMk+g2ZxsIVwB0BbSAk0javoFKQFm28TyGHUqYJeAEgBuoU4pttBUwLSH61g9YHeMwhNAE3CVQI0SWJcEKi9Q+S2EJVD5LURN7FqAErAwoASoB8ogUPkEnAlQE7tOgJqYEihJEztLgE4h1wlQD6xLAs4EqIkpgf89gcofo5VPoPI9QD/IXCdQ+R6ovEDlm7jyCVAT8zIkIFYVWPwCNbGlhj3MB7bQZiVyCcY+9/c1/eXsz/Pla5gl/rfvHQDtvSRU1aMIcHb+HMKPc56EPDvdgvAzrx9j+FIa+CLRPDCwnczTSniUpuI4g5Do3ePjDIGr0Wc9DcyXsjjiG3IpcJFAB6e5XjmcEWRV3fLi70FGF0Z+MVG/EuqbhNo5WAJ+FMkSIgBCXMijJE3MEMVmxdhCOn1Zys4zEL9ElvDB0bY5m5stlCaeCLDL3kjzbjmjOXo3l6ncQNtXGxCuUY5RziK5KaP09a4Xx558LsebI+6N0zRiRxtPAAxfZvIMsD5FtQCbCngmBIdAgeFjCQRx4C0+/vlg5mEvwCgBSqBUCUAERJkSMNxC3uHbNA3ZdomOUUOUwIVfIoE7l3lZE1sLYDexGQgClAAlUC4BSsBYgHpgzQSoiR0IcGriMm0h6gHXApSAawE6hVwnUHkBamJjAezfC1ETmwpQD7hOoPI9UPkEKt8DdAq5FqAmdp0ANbHrBNz2gP3fyBiuQBzE3mSiY3pZvM68jXfHqQitBKwn5uYEgkAp5It7e43n385e1bSKEMJiWoXZj07PCATdrlkLdG8Fhjmr1q6+UgkwBIGZ340GQbH+K/fARMCsfv2X+iGWQJHAodrWD807LWK7hbAFjOnpJi6HwG7X6xrTG0dCAGclNnAFft/0RqOeKTdjpgT+QGb+rq61ANbdm9MdEGmkZvdbmxBwbllbABl71eibBhtOvuaEiOVDkfXb3DvbdfmTsdsHR8bvnSRHLsVmFc3mxXFLz4E1QFG/mXOZbh6vgYWG8X9PZgFt44hNbyZPEARBEMQd/AU8YuNKVrjjOAAAAABJRU5ErkJggg==",
      companyName: "Microsoft",
      datePosted: "5 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QTiRf5dOyFBGl0joX6HY9mk3ImJkx7UvUvez1yHReow--iDKAvDKOa4&s",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/netflix",
      companyName: "Netflix",
      datePosted: "3 days ago",
      post: "UI/UX Developer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/meta",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/spotify",
      companyName: "Spotify",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Remote",
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "Adobe",
      datePosted: "10 days ago",
      post: "JavaScript Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/airbnb",
      companyName: "Airbnb",
      datePosted: "3 weeks ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$68/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/apple",
      companyName: "Apple",
      datePosted: "6 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$72/hr",
      location: "Chennai, India",
    },
    {
      brandLogo: "https://cdn.simpleicons.org/nvidia",
      companyName: "NVIDIA",
      datePosted: "5 weeks ago",
      post: "AI Software Engineer",
      tag1: "Internship",
      tag2: "Entry Level",
      pay: "$35/hr",
      location: "Delhi, India",
    },
  ];
  
  

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){
        console.log(idx)
        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} datePosted={elem.datePosted} 
          tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} logo={elem.brandLogo}/>
        </div>
      })}
    </div>
  )
}

export default App 