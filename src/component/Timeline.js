import React from 'react';
import { useGlobalContext } from '../context';
// import timeline from '../asset/data/data_timeline';
import { MdClear,MdPhotoCamera } from "react-icons/md";
import { FaCircle } from "react-icons/fa";


export default function Timeline() {
    const { age, gender, job, timeline, removeTimeline } = useGlobalContext();

    let emptyTimeline = null;
    if (timeline.length !== 0) {
        emptyTimeline = <p>Not empty</p>
    } else {
        emptyTimeline = <p> empty</p>
    }

    return (
        <main className="main">
            <h2 className="main__headline">Timeline</h2>
            <i className="main__screenshot"><MdPhotoCamera /></i>
            <section className="profile">
                <img className="profile__img" src="https://via.placeholder.com/100" alt="Avatar" />
                <div className="profile__detail">
                    <div className="profile__wrapper">
                        <p className="profile__gender">เพศ {gender}</p>
                        <p className="profile__age">อายุ {age} ปี</p>
                    </div>
                    <p className="profile__job">อาชีพ {job}</p>
                </div>
            </section>
            <section className="timeline">
                <div className="timeline__line"></div>
                <articles className="timeline__content">
                    <i className="timeline__dot"><FaCircle /> </i>
                    <div className="timeline__detail">
                        <p className="timeline__date">14/05/2020</p>
                        <p className="timeline__time">12:30 PM</p>
                        <p className="timeline__description">Pariatur sit nostrud mollit consequat ex proident eu deserunt non magna esse veniam laborum cillum.</p>
                    </div>
                </articles>

            </section>
            {/* {gender ? <img src="xxx" alt={`${gender}`}/> : <img src="xxx" alt="noset" /> }
        {age}
        {gender}
        {job}
        {emptyTimeline} */}
            {/* {timeline.sort((a, b) => a.time - b.time).map((each, index) => {
            return (
                <div key={index}>
                    <p>{each.time.toLocaleDateString()}</p>
                    <p>{each.time.toLocaleTimeString('en-US', { hour12: false,hour: '2-digit', minute: '2-digit' })}</p>
                    <p>{each.description}</p>
                    <MdClear onClick={() => removeTimeline(index)}/>
                </div>
            )
        })} */}
            {timeline.sort((a, b) => a.date - b.date).map((each, index) => {
                return (
                    <div key={index}>
                        <p>{each.date.toLocaleDateString()}</p>
                        {each.detail.sort((a, b) => a.time - b.time).map((time, index) => {
                            const unique = time.time;
                            return (<div key={unique}><MdClear key={unique} onClick={() => removeTimeline(unique)} /><p>{time.time.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' })}</p><p>{time.description}</p></div>)
                        })}
                    </div>
                )
            })}


        </main>
    )
}