import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Solution = () => {
	const [show, setShow] = useState<Boolean>(true);
	const [show2, setShow2] = useState<Boolean>(false);
	const [show3, setShow3] = useState<Boolean>(false);

	const Toogle = () => {
		setShow(true);
		setShow2(false);
		setShow3(false);
	};
	const Toogle2 = () => {
		setShow2(true);
		setShow(false);
		setShow3(false);
	};
	const Toogle3 = () => {
		setShow3(true);
		setShow2(false);
		setShow(false);
	};

	return (
		<Container>
			<h1>Atlassian solutions are designed for all types of work</h1>

			<ButtonHold>
				<Button bg={show ? "bb" : ""} onClick={Toogle}>
					Work Management
				</Button>
				<Button bg={show2 ? "bb" : ""} onClick={Toogle2}>
					Work Management
				</Button>
				<Button bg={show3 ? "bb" : ""} onClick={Toogle3}>
					Work Management
				</Button>
			</ButtonHold>

			<View>{show ? <Card bg='red' /> : null}</View>
			<View2>{show2 ? <Card bg='blue' /> : null}</View2>
			<View1>{show3 ? <Card bg='green' /> : null}</View1>
		</Container>
	);
};

export default Solution;

const View = styled.div`
	/* left: ; */
`;
const View1 = styled.div``;
const View2 = styled.div``;

const ButtonHold = styled.div`
	margin-top: 10px;
`;
const Button = styled.button<{ bg: string }>`
	height: 80px;
	width: 300px;
	border-radius: 50px;
	position: relative;
	border: 0;
	background-color: ${({ bg }) => (bg ? "#deebff" : "#0052cc")};
	color: ${({ bg }) => (bg ? "#0052cc" : "#deebff")};

	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
	transition: all 350ms;
	margin-right: 10px;
	margin-left: 10px;

	/* :hover {
		transform: scale(0.99);
		background-color: #0052cc;
		color: white;
	} */
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	flex-direction: column;
	padding-bottom: 50px;
`;
