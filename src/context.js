import React, { useState, useContext } from 'react';
import data_timeline from './asset/data/data_timeline';

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
    // State management
    const [gender, setGender] = useState('ชาย');
    const [age, setAge] = useState(25);
    const [job, setJob] = useState('Full Stack Developer');
    const [error, setError] = useState('true');
    const [description, setDescription] = useState('Aliquip et ad in exercitation dolore proident laborum nisi laboris amet officia.');
    const [timestamp, setTimestamp] = useState();
    const [timeline, setTimeline] = useState(data_timeline);

    const removeTimeline = (unique) => {

    
        // setTimeline(data_timeline.map((date) => {
        //     return { ...date, detail:date.detail.filter((time) => {return time.time !== unique })}
        // }))

        const updateTimeline = data_timeline.map((date) => {
            return { ...date, detail:date.detail.filter((time) => {return time.time !== unique}) }
        });
        // console.log(unique)
        // console.log(JSON.stringify(updateTimeline, null, 4));
        // console.log(JSON.stringify(data_timeline, null, 4));
        // console.log(data_timeline);
        // console.log(updateTimeline);
        setTimeline(updateTimeline);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if ( typeof age === "undefined" || job.length === 0 || gender.length === 0 || description.length === 0 || typeof timestamp === "undefined") {
            setError('คุณกรอกข้อมูลไม่ครบ');
        }
        else {
            setError('');
        }
    }

    return (
        <AppContext.Provider value={{job, setJob, age, setAge,gender, setGender, description, setDescription, timestamp, setTimestamp,timeline, removeTimeline,onSubmit, error}}>{children}</AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};