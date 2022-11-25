import React from "react";
import styled from "styled-components";
import log from "../assets/logo.webp";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";

const Header = () => {
	return (
		<Container>
			<FirstWrapper>
				<Logo src={log} />
				<NavHold>
					<Nav>Products</Nav>
					<Icon>
						<AiOutlineDown />
					</Icon>
				</NavHold>
				<NavHold>
					<Nav>For teams </Nav>
					<Icon>
						<AiOutlineDown />
					</Icon>
				</NavHold>
				<NavHold>
					<Nav>Support</Nav>
					<Icon>
						<AiOutlineDown />
					</Icon>
				</NavHold>
			</FirstWrapper>

			<SecondWrapper>
				<Button>Try now</Button>
				<But>Buy now</But>

				<Search>
					<AiOutlineSearch />
				</Search>
				<UserHold>
					<Avatar>
						<HiUserCircle />
					</Avatar>
					<select>
						<option>My Account</option>
						<option>2</option>
					</select>
				</UserHold>
			</SecondWrapper>
		</Container>
	);
};

export default Header;

const Button = styled.div`
	margin-right: 15px;
	height: 35px;
	width: 90px;
	background-color: #0052cc;
	color: white;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const But = styled.div`
	color: #0052cc;
	margin-right: 15px;
	height: 35px;
	width: 90px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 350ms;
	cursor: pointer;

	:hover {
		background-color: silver;
	}
`;
const Search = styled.div`
	margin-right: 15px;

	font-size: 25px;
	margin-top: 5px;
	color: gray;
`;
const UserHold = styled.div`
	margin-right: 15px;
	display: flex;
`;
const Avatar = styled.div`
	margin-right: 15px;
	border-left: 1px solid silver;
	padding-left: 10px;
	color: silver;

	font-size: 20px;
`;

const Icon = styled.div`
	margin-top: 5px;
	margin-left: 2px;
	font-size: 12px;
`;
const SecondWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 100px;

	select {
		border: none;
		color: #0052cc;
	}
`;
const Logo = styled.img`
	height: 50px;
	width: 200px;
	object-fit: contain;
	margin-right: 20px;
`;
const FirstWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-left: 100px;
`;
const NavHold = styled.div`
	display: flex;
	align-items: center;
	margin-right: 15px;
	transition: all 350ms;
	padding: 5px 5px;

	:hover {
		background-color: silver;
		border-radius: 5px;
		cursor: pointer;
	}
`;
const Nav = styled.div``;
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	height: 70px;
`;
