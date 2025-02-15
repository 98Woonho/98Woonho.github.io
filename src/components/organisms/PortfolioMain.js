import React, { Component } from "react";
import styled from "styled-components";
import data from "../../assets/data/portfoilodata";
import { Link } from "react-router-dom";

class PortfolioMain extends Component {
	render() {
		const portfolioList = data.portfolioList.map((list, idx) => {
			return (
				<li key={idx} className="port-list in-top">
					<div className="project">
						<div>
							<div className="info-wrap">
								<div className="link-wrap">
									{list.youtube && (
  									<Link to={list.youtube}>
    									<i className="fa-brands fa-youtube"></i>
  									</Link>
									)}
									{list.github && (
  									<Link to={list.github}>
    									<i className="fa-brands fa-github"></i>
  									</Link>
									)}
									{list.link && (
  									<Link to={list.link}>
    									<i className="fa-brands fa-globe"></i>
  									</Link>
									)}
								</div>
								<div className="txt-wrap">
									<div className="name">{list.name}</div>
									<span className="time">{list.period}</span>
									<p>
										<span className="label">Description</span>
										{list.description}
									</p>
								</div>
								<div className="tech">
									<span className="label">Tech Stack</span>
									<ul>
										{list.tech.map((list, idx) => (
											<li key={idx}>{list}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</li>
			);
		});

		return (
			<StyledPortWrap className="container">
				<ul>{portfolioList}</ul>
			</StyledPortWrap>
		);
	}
}

const StyledPortWrap = styled.div`
	width: 85%;
	max-width: 1140px;
	margin: auto;
	padding-bottom: 80px;
	> ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		gap: 22px;
		> li {
			width: 32%;
			min-height: 320px;
			margin-bottom: 2%;
			position: relative;
			background-color: #191919;
			border-radius: 2px;
			overflow: hidden;
			.project {
				width: 100%;
				height: 100%;
				display: inline-block;
				> div {
					height: 100%;
					padding: 20px;
					.toy {
						position: absolute;
						top: 20px;
						right: 20px;
						font-size: 30px;
						color: ${(props) => props.theme.mainColor};
						img {
							width: 45px;
						}
					}
					.info-wrap {
						position: relative;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.link-wrap {
							position: absolute;
							top: 3px;
							right: 0;
							a:nth-child(2) {
								margin-left: 10px;
							}
							i {
								font-size: 20px;
							}
						}
						.txt-wrap {
							.name {
								width: 260px;
								font-weight: 500;
								font-size: 22px;
								line-height: 1.3;
								color: ${(props) => props.theme.mainColor};
							}
							.time {
								font-size: 14px;
							}
							p {
								padding: 10px 0;
								font-size: 14px;
							}
						}
						.tech {
							ul {
								display: flex;
								flex-wrap: wrap;
								margin-left: -2px;
								padding-top: 3px;
								li {
									padding: 4px;
									margin: 0 2px 5px;
									border: 1px solid #fff;
									border-radius: 2px;
									font-size: 13px;
									line-height: 1;
								}
							}
						}
						span.label {
							display: block;
							padding-bottom: 3px;
							font-size: 12px;
							font-weight: 500;
						}
					}
				}
			}
		}
	}

	@media ${(props) => props.theme.laptop} {
		> ul {
			.port-list {
				width: 49%;
				min-height: 260px;
			}
		}
	}
	@media ${(props) => props.theme.mobile} {
		width: 80%;
		padding-bottom: 60px;
		> ul {
			.port-list {
				width: 100%;
				min-height: 220px;
				margin-bottom: 20px;
				.tech {
					display: none;
				}
			}
		}
	}
`;

export default PortfolioMain;
