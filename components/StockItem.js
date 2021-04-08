import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { addStock } from '../redux/reducers/stockReducer';

export default function StockInfo({ stockItemInfo }) {
	const dispatch = useDispatch();
	const list = useSelector((state) => state.stock);
	// console.log(list);
	return (
		<Container>
			<InfoContainer>
				<Symbol>{stockItemInfo.symbol}</Symbol>
				<PrevCont>
					<PrevClose>
						{stockItemInfo.dayEndClose === undefined ? (
							`Previous Close: ${stockItemInfo.dayEndClose}`
						) : (
							`Previous Close : N/A`
						)}
					</PrevClose>
					<PrevClose>Open: {stockItemInfo.open}</PrevClose>
				</PrevCont>
				<PriceReturnCont>
					<Price>&#8377;{stockItemInfo.ltP}</Price>
					{ stockItemInfo.ptsC > 0 ?  
						<>
							<ReturnCont >
								<Return style={{color: 'green'}} >
									&#9650;{stockItemInfo.ptsC}
								</Return>
								<Return style={{color: 'green'}} >
									({stockItemInfo.per}%)
								</Return>
							</ReturnCont> 
						</>
						:
						<>
							<ReturnCont>
								<Return style={{color: 'red'}}  >
									&#9650;{stockItemInfo.ptsC}
								</Return>
								<Return style={{color: 'red'}}  >
									({stockItemInfo.per}%)
								</Return>
							</ReturnCont>
						</>
						}
				</PriceReturnCont>
			</InfoContainer>
			<ButtonView>
				<BuyButton onPress={() => dispatch(addStock(stockItemInfo))}>
					<Buy>Buy</Buy>
				</BuyButton>
			</ButtonView>
		</Container>
	);
}

const Container = styled.View`
	${'' /* flex: 1; */}
	background-color: #E0E0E0;
	${'' /* justify-content: center;
	align-items: center; */} padding: 20px;
	marginTop: 10px;
	marginLeft: 20px;
	marginRight: 20px;
	marginBottom: 10px;
	borderRadius: 10px;
	display: flex;
	flexDirection: row;
	justifyContent: space-between;
	alignItems: center;
`;

const ButtonView = styled.View`
	display: flex;
	flexDirection: row;
	justifyContent: space-around;
`;

const BuyButton = styled.TouchableOpacity`
	${'' /* display: flex;
	flexDirection: row;
	justifyContent: space-around; */}
	borderRadius: 100px;
	borderColor: green;
	borderWidth: 2px;
	padding: 10px;
`;

const Buy = styled.Text`
	color: green;
	fontSize: 15px;
`

const InfoContainer = styled.View`
	display: flex;
	flexDirection: column;
	justifyContent: space-between;
`;

const Symbol = styled.Text`
	font-size: 22px;
	font-weight: bold;
	${'' /* color: palevioletred; */} color: #000;
	marginTop: 10px;
	marginBottom: 10px;
`;

const PrevCont = styled.View`
	display: flex;
	flexDirection: column;
	justifyContent: space-between;
`;
const PrevClose = styled.Text`
	font-size: 16px;
	color: #000;
`;

const PriceReturnCont = styled.View`
	display: flex;
	flexDirection: row;
	justifyContent: space-between;
	marginTop: 10px;
	marginBottom: 10px;
	alignItems: center;
`
const Price = styled.Text`
	fontSize: 20px;
	fontWeight: bold;
`
const ReturnCont = styled.View`
	display: flex;
	flexDirection: column;
	justifyContent: space-between;
	marginLeft: 10px;
`
const Return = styled.Text`
	${'' /* paddingTop: 10px; */}
`