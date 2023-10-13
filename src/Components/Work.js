import './WorkCardStyles.css';
import WorkCard  from './WorkCard';
import WorkCardData from './WorkCardData'
import React from 'react'
import Phone3 from '../Assets/phone3.png'

const Work = () => {
  return (
    <div className='work-continer'>
        <h1 className='project-heading fs-1'>PROJECTS</h1>
        <div className='project-container'>
            {WorkCardData.map((value,i)=>{
                return (
                    <WorkCard 
                        key={i}
                        imgsrc={value.imgsrc}
                        title={value.title}
                        text={value.text}
                        source={value.source}
                    />
                )
            })}
        </div>
        <div className="banner type_3">
				<div className="container-fluid">
					<div className="banner_content">
						<div className="row">
							<div className="col-lg-8">
								<div className="banner_text">
									<img src={Phone3} alt=""/>
									<h1>I'm ready to serve you 24/7. Just Call me when you need</h1>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="banner_phone">
									<h4>Call Me Anytime</h4>
									<span>+91 85117 31099</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Work