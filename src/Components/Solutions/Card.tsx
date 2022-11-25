import React from "react";
import styled from "styled-components";

interface BackGround {
	bg: string;
}
const Card: React.FC<BackGround> = ({ bg }) => {
	return <Container bg={bg}>Card</Container>;
};

export default Card;

const Container = styled.div<{ bg: string }>`
	width: 100%;
	background-color: ${(props) => props.bg};
	height: 120px;
`;
