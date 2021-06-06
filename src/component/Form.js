import React from 'react';
import { useGlobalContext } from '../context';
import Select from 'react-select';
import { MdAdd, MdWarning } from "react-icons/md";
import { IconContext } from "react-icons";

const options = [
    { value: 'ชาย', label: 'ชาย' },
    { value: 'หญิง', label: 'หญิง' },
    { value: 'ไม่ระบุ', label: 'ไม่ระบุ' }
];

// const selectStyle = {
//     option: (provided, state) => ({
//         ...provided,
//         color: state.isSelected ? '#fff' : '#7D22C9',
//     }),
//     control: () => ({
//         // none of react-select's styles are passed to <Control />
//         width: 200,
//     }),
//     singleValue: (provided, state) => {
//         const opacity = state.isDisabled ? 0.5 : 1;
//         const transition = 'opacity 300ms';

//         return { ...provided, opacity, transition };
//     }
// }

export default function Form() {
    const { job, setJob, age, setAge, gender, setGender, timestamp, setTimestamp, description, setDescription, onSubmit, error } = useGlobalContext();
    return (
        <aside className="form">
            <section className="form__profile">
                <h2 className="form__headline">ข้อมูลผู้ป่วย</h2>
                <div className="form-wrapper">
                    <div className="input">
                        <div className="input__wrapper">
                            <label className="input__label" htmlFor="gender">เพศ</label> <IconContext.Provider value={{ className: "icon-alert" }}><i className="input__alert"><MdWarning /></i></IconContext.Provider>
                        </div>
                        <Select className="input__dropdown" classNamePrefix="react-select" options={options} onChange={(e) => { setGender(e.value) }} />
                    </div>

                    <div className="input">
                        <div className="input__wrapper">
                            <label className="input__label" htmlFor="age">อายุ</label><IconContext.Provider value={{ className: "icon-alert" }}><i className="input__alert"><MdWarning /></i></IconContext.Provider>
                        </div>
                        <input className="input__field" name="age" type="number" value={age} onChange={(e) => { setAge(e.target.value) }} />
                    </div>
                </div>


                <div className="input">
                    <div className="input__wrapper">
                        <label className="input__label" htmlFor="job">อาชีพ</label><IconContext.Provider value={{ className: "icon-alert" }}><i className="input__alert"><MdWarning /></i></IconContext.Provider>
                    </div>
                    <input className="input__field --full" name="job" type="text" value={job} onChange={(e) => { setJob(e.target.value) }} />
                </div>


            </section>

            {/* <select name="gender" value={gender} onChange={(e) => { setGender(e.currentTarget.value) }}>
                <option value="male">ชาย</option>
                <option value="female">หญิง</option>
                <option value="unknow">ไม่ระบุ</option>
            </select> */}
            <hr />

            <section className="form__timeline">
                <h2 className="form__headline">ข้อมูลไทม์ไลน์</h2>
                <form className="form__form" onSubmit={onSubmit}>
                    <div className="input">
                        <div className="input__wrapper">
                            <label className="input__label" htmlFor="timestamp">วันเวลา</label><IconContext.Provider value={{ className: "icon-alert" }}><i className="input__alert"><MdWarning /></i></IconContext.Provider>
                        </div>
                        <input className="input__time --full" type="datetime-local" name="timestamp" value={timestamp} onChange={(e) => { setTimestamp(e.target.value) }} />
                    </div>

                    <div className="input">
                        <div className="input__wrapper">
                            <label className="input__label" htmlFor="description">รายละเอียด</label><IconContext.Provider value={{ className: "icon-alert" }}><i className="input__alert"><MdWarning /></i></IconContext.Provider>
                        </div>
                        <textarea className="input__textarea --full" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    </div>
                    {error}
                    <button className="form__btn --full-btn" type="submit"><IconContext.Provider value={{ className: "icon-btn" }}><MdAdd /></IconContext.Provider> เพิ่มข้อมูล</button>

                </form>

            </section>
        </aside>
    )
}