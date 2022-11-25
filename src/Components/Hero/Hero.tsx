import React from "react";
import styled from "styled-components";
import pic from "../assets/bg.png";
import pic2 from "../assets/bg2.jpg";

const Hero = () => {
	return (
		<Container>
			<First>
				<Text>
					It’s possible <br /> <span>with teamwork</span>
				</Text>
			</First>
			<Second>
				<BgImage src={pic2} />
			</Second>
		</Container>
	);
};

export default Hero;

const BgImage = styled.img`
	height: 450px;
`;
const Text = styled.div`
	font-size: 60px;
	font-weight: bold;
	line-height: 1.05;
	span {
		margin-left: 50px;
	}
`;
const First = styled.div`
	margin-left: 20px;
`;
const Second = styled.div``;
const Holder = styled.div``;

const Container = styled.div`
	/* height: 500px; */
	width: 100%;
	background-image: url(${pic});
	background-size: contain;
	background-position: left;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
`;
