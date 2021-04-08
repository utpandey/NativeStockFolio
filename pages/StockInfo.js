import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import { TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import StockItem from '../components/StockItem';

export default function StockInfo({stockData}) {
	const dispatch = useDispatch();
	const list  = useSelector((state) => state.stock);
	// const [users, setUserList] = useState('hello');
	// useLayoutEffect(() => {
	// 	  axios.get('http://localhost:4000/nse/get_index_stocks?symbol=nifty', {
	// 		headers: {
	// 		  'Content-Type': 'application/json'
	// 		}
	// 	  })
	// 		.then((response) => {
	// 			setUserList(response.data);
	// 		});
	// 	}, []);
		if(stockData === undefined){
			console.log(undefined + 'its shows')
		}
		else {
			console.log(stockData)
		}
		// console.log(stockData.map(data => console.log(data) ));
		if(stockData) {
			return (
				<Container>
					<HeaderView>
						<HeaderText>You can selected any 10 stocks from the list to create a portfolio</HeaderText>
					</HeaderView>
					{/* {data ?? data.map((data,key) => <StockItem  data={data} key={key}/>)} */}
					{/* {stockData ? <Title>{stockData.map((data,key) => <Title key={key}>{data}</Title>)}</Title> : <Title>false</Title>} */}
					{stockData.map((data,key) => <StockItem stockItemInfo={data} key={key} />)}
				</Container>
			);
		}
	
}

const Container = styled.View`
	flex: 1;
	background-color: white;
	${'' /* justify-content: center;
	align-items: center; */}
`;

const StockContainer = styled.View`
	backgroundColor: #93999e;
	${'' /* height: 300px;
	width: 350px; */}
	margin: 10px;
	borderRadius: 10px;
	padding: 10px;
	
`;

const HeaderView = styled.View`
	display: flex;
	padding: 20px;
    backgroundColor: #E0E0E0;
    borderRadius: 10px;
    marginTop: 20px;
    marginLeft: 20px;
    marginRight: 20px;
	marginBottom: 20px;
`;

const HeaderText = styled.Text`
    fontSize: 18px;
    ${'' /* fontWeight: 200px; */}
    color: black;
`

const Title = styled.Text`
	font-size: 20px;
	${'' /* font-weight: 500; */}
	${'' /* color: palevioletred; */}
	color: #585a5c;
`;

const StockList = styled.View`
	borderColor: black;
	borderWidth: 2px;
	borderRadius: 10px;
	backgroundColor: white;
	padding: 10px;
`;

