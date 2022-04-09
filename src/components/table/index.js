import React from "react";
import Row from "./Row";

import "./index.css"

const list = [
    "#",
    "name",
    "email",
    "phone",
    "age",
    "gender",
    "location"
];

function getValue(key, user, id) {
    const { name, dob, location } = user;

    switch (key) {
        case "#": return id;
        case "name": return `${name.first} ${name.last}`;
        case "age": return dob.age;
        case "location": return location.city;
        default: return user[key];
    }
}

function getUserList(user, id) {
    const arr = list.map(item => getValue(item, user, id))

    return arr;
}

function Table({ userList, pageForId, onChangeUserList }) {

    function handleSort(item) {

        const sortedList = [...userList].sort((item1, item2) => {
            return getValue(item, item1) < getValue(item, item2) ? -1 : 1
        })

        onChangeUserList(sortedList);
    }


    return (
        <>
            <div className="og-row og-li og-li-head">
                <Row list={list} onSort={handleSort} />
            </div>

            {userList.map((user, index) => (
                <div className="data-row og-row og-li" key={index}>
                    <Row list={getUserList(user, pageForId + index + 1)} />
                </div>
            ))}
        </>
    )
}

export default Table;
