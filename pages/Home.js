import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function Home({ navigation }) {
	// const dispatch = useDispatch();
	const list = useSelector((state) => state.stock);
	console.log(list);
	const value = () => {
		let per;
		if(list){
			for(let i = 0; i > list.length; i++){
				per += list[i].per;
			}
			return per;
		}	
	}
	return (
		<Container>
			<StockContainer>
				<TitleView>
					<Title> Utsav Pandey </Title>
					{list.length ? <Title>{value}</Title> : <Title>N/A</Title>}
				</TitleView>
				{list.length ? (
					<StockList>
						{list.map((data, key) => <StockSymbol key={key}>- {data.symbol}</StockSymbol>)}
					</StockList>
				) : (
					<Title style={{marginLeft: '5px', marginTop: '10px'}}>Please select some stocks first!</Title>
				)}
			</StockContainer>
			<ButtonAdd onPress={() => navigation.navigate('StockInfo')}>
				<Text>+</Text>
			</ButtonAdd>
		</Container>
	);
}

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const StockContainer = styled.View`
	backgroundColor: #E0E0E0;
	${'' /* height: 300px;
	width: 350px; */} margin: 10px;
	borderRadius: 10px;
	padding: 10px;
`;

const StockSymbol = styled.Text`
	marginTop: 10px;
	fontSize: 18px;
`

const TitleView = styled.View`
	display: flex;
	flexDirection: row;
	${'' /* marginLeft: 20px; */} justifyContent: space-between;
`;

const Title = styled.Text`
	font-size: 20px;
	${'' /* font-weight: 500; */} ${'' /* color: palevioletred; */} color: #585a5c;
`;

const StockList = styled.View`
	borderColor: black;
	borderWidth: 2px;
	borderRadius: 10px;
	backgroundColor: white;
	padding: 10px;
`;

const ButtonAdd = styled.TouchableOpacity`
	width: 60px;
	height: 60px;
	borderRadius: 30px;
	backgroundColor: #ee6e73;
	position: absolute;
	bottom: 10px;
	right: 10px;
	textAlign: center;
	alignItems: center;
	justifyContent: center;
`;
