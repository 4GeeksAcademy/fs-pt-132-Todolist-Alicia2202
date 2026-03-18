import React, {useEffect, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Form from "./Form";
import List from "./List";

//create your first component
const Home = () => {
	const [dataList, setDataList] = useState([])
	// const [showList, setShowList] = useState(false);

	const upDateList = (newInputValue) => {
		if (newInputValue.trim() === "") return;
		setDataList([...dataList, newInputValue]);
	};

	const deleteTask = (index) => {
		const newTask = dataList.filter((_, i) => i !== index);
		setDataList(newTask);
	};

	// useEffect(()=>{
	// 	if(dataList.length>0) return setShowList(true);
	// 	return setShowList(false)
	// 	}, [dataList])

	// const showList = dataList.length > 0

	return (
		<div className="text-center">
            <Form list={dataList} upDateList={upDateList} />
			<List data={dataList} deleteTask={deleteTask} />
			
		</div>
	);
};

export default Home;