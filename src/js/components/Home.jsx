import React, {useEffect, useState} from "react";

//include images into your bundle
import Form from "./Form";
import List from "./List";

//create your first component
const Home = () => {
	const [dataList, setDataList] = useState([])
	
	const upDateList = (newInputValue) => {
		if (newInputValue.trim() === "") return;
		setDataList([...dataList, newInputValue]);
	};

	const deleteTask = (index) => {
		const newTask = dataList.filter((_, i) => i !== index);
		setDataList(newTask);
	};

	return (
		<div className="container d-flex flex-column  align-items-center">

			<h1 className="mt-4">Lista de tareas</h1>
            <Form list={dataList} upDateList={upDateList} />
			<List data={dataList} deleteTask={deleteTask} />
			
		</div>
	);
};

export default Home;