import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Filters from "./components/filters";
import Table from "./components/table";
import Pagination from "./components/pagination";
import "./App.css";

function App() {
    const [perPage, setPerPage] = useState(10)
    const [page, setPage] = useState(1)
    const [nat, setNat] = useState("")
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetch(`https://randomuser.me/api/?page=${page}&results=${perPage}&nat=${nat}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(date => {
                setUserList(date.results)
            })
    }, [perPage, page, nat])

    function handlePerPageChange(event) {
        setPerPage(event.target.value)
    }

    function handleNatChange(event) {
        const value = event.target.value === "all" ? '' : event.target.value;
        setPage(1)
        setNat(value)
    }


    function handlePageChange(value) {
        setPage(value);
    }

    return (
        <div className="og-contianer">
            <Header text="Users List" />
            <Filters onPerPageChange={handlePerPageChange} onNatChange={handleNatChange} />
            <Table
                userList={userList}
                pageForId={(page - 1) * perPage}
                onChangeUserList={userList}
            />
            <Pagination
                pageCount={5000 / perPage}
                currentPage={page}
                onPageChange={handlePageChange}
            />
        </div>
    )
}

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userList: []
//         }
//     }

//     perPage = 10;
//     page = 1;
//     nat = ""

//     componentDidMount() {
//         this.fetchUserList();
//     }

//     fetchUserList = () => {
//         fetch(`https://randomuser.me/api/?page=${this.page}&results=${this.perPage}&nat=${this.nat}`)
//             .then(response => {
//                 if (response.ok) {
//                     return response.json()
//                 }
//             })
//             .then(date => {
//                 this.setState({ userList: date.results })
//             })
//     }

//     handlePerPageChange = event => {
//         this.perPage = event.target.value;
//         this.fetchUserList();
//     }
//     handleNatChange = event => {
//         this.nat = event.target.value;
//         this.page = 1
//         if (this.nat === "all") {
//             this.nat = ""
//         } 
//         this.fetchUserList();

//     }

//     handlePageChange = value => {
//         this.page = value;
//         this.fetchUserList();
//     }

//     handleChangeUserList = newUserList => {
//         this.setState({ userList: newUserList })
//     }

//     render() {
//         console.log("SDASD")
//         return (
//             <div className="og-contianer">
//                 <Header text="Users List" />
//                 <Filters onPerPageChange={this.handlePerPageChange} onNatChange={this.handleNatChange} />
//                 <Table
//                     userList={this.state.userList}
//                     pageForId={(this.page - 1) * this.perPage}
//                     onChangeUserList={this.handleChangeUserList}
//                 />
//                 <Pagination
//                     pageCount={5000 / this.perPage}
//                     currentPage={this.page}
//                     onPageChange={this.handlePageChange}
//                 />
//             </div>
//         )
//     }
// }

export default App;
