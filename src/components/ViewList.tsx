import styled from "styled-components";
import * as THREE from "three";
import gsap from "gsap";
import { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

interface ViewListProps{
    cameraRef: React.MutableRefObject<THREE.OrthographicCamera>,
    controlRef: any
}

function ViewList({cameraRef, controlRef}: ViewListProps){
    const [curView, setCurView] = useState<number>(1);
    const {camera, get, size} = useThree();
    useFrame(()=>{
        controlRef.current.update();
    })
    return (
        <Html 
            as="div"
            className="viewlist"
            style={{zIndex:10}}
            fullscreen
            onClick={(e)=>{e.stopPropagation(); console.log("click");}}
            onContextMenu={(e)=>e.stopPropagation()}
        >
            <ViewListContainer>
                <ViewBtn onClick={(e)=>{
                    e.stopPropagation();
                    let tl = gsap.timeline();
                    if(curView !== 1){
                        if(curView === 2){
                            tl.to(camera.position,{
                                duration:0.5,
                                x:40,
                                y:0,
                                z:0,
                                ease:"linear"
                            });
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:0,
                                z:40,
                                ease:"linear"
                            });
                        }
                        else{
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:0,
                                z:40,
                                ease:"linear"
                            });
                        }
                    }
                    else{
                        if(camera.position.x !== 0 || camera.position.y !== 0 || camera.position.z !== 40){
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:0,
                                z:40,
                                ease:"linear"
                            });
                        }
                    }
                    setCurView(1);
                    camera.lookAt(new THREE.Vector3(0,0,0));
                }}>
                    1
                </ViewBtn>
                <ViewBtn onClick={(e)=>{
                    e.stopPropagation();
                    let tl = gsap.timeline();
                    if(curView !== 2){
                        if(curView === 1){
                            tl.to(camera.position,{
                                duration:0.5,
                                x:-40,
                                y:0,
                                z:0,
                                ease:"linear"
                            });
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:0,
                                z:-40,
                                ease:"linear"
                            });
                        }
                        else{
                            if(curView === 5){
                                tl.to(camera.position,{
                                    duration:0.3,
                                    x:0,
                                    y:0,
                                    z:40,
                                    ease:"linear"
                                });
                                tl.to(camera.position,{
                                    duration:0.4,
                                    x:-40,
                                    y:0,
                                    z:0,
                                    ease:"linear"
                                });
                                tl.to(camera.position,{
                                    duration:0.3,
                                    x:0,
                                    y:0,
                                    z:-40,
                                    ease:"linear"
                                });
                            }
                            else if(curView === 6){
                                tl.to(camera.position,{
                                    duration:0.3,
                                    x:0,
                                    y:0,
                                    z:40,
                                    ease:"linear"
                                });
                                tl.to(camera.position,{
                                    duration:0.4,
                                    x:-40,
                                    y:0,
                                    z:0,
                                    ease:"linear"
                                });
                                tl.to(camera.position,{
                                    duration:0.3,
                                    x:0,
                                    y:0,
                                    z:-40,
                                    ease:"linear"
                                });
                            }
                            else{
                                tl.to(camera.position,{
                                    duration:0.5,
                                    x:0,
                                    y:0,
                                    z:-40,
                                    ease:"linear"
                                });
                            }
                            
                        }
                    }
                    else{
                        if(camera.position.x !== 0 || camera.position.y !== 0 || camera.position.z !== -40){
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:0,
                                z:-40,
                                ease:"linear"
                            });
                        }
                    }
                    setCurView(2);
                    // camera.lookAt(new THREE.Vector3(0,0,0));
                }}>
                    2
                </ViewBtn >
                <ViewBtn onClick={(e)=>{
                    e.stopPropagation();
                    let tl = gsap.timeline();
                    if(curView !== 3){
                        if(curView === 4){
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:0,
                                z:-40,
                                ease:"linear"
                            });
                            tl.to(camera.rotation,{
                                duration:0.3,
                                x:0,
                                y:0,
                                z:0
                            });
                            tl.to(camera.position,{
                                duration:0.5,
                                x:40,
                                y:0,
                                z:0,
                                ease:"linear"
                            });
                        }
                        else{
                            if(curView === 5 || curView === 6){
                                tl.to(camera.position,{
                                    duration:0.5,
                                    x:0,
                                    y:0,
                                    z:40,
                                    ease:"linear"
                                });
                                tl.to(camera.position,{
                                    duration:0.5,
                                    x:40,
                                    y:0,
                                    z:0,
                                    ease:"linear"
                                });
                            }
                            else{
                                tl.to(camera.position,{
                                    duration:0.5,
                                    x:40,
                                    y:0,
                                    z:0,
                                    ease:"linear"
                                });
                            }
                            
                        }
                    }
                    else{
                        if(camera.position.x !== 40 || camera.position.y !== 0 || camera.position.z !== 0){
                            tl.to(camera.position,{
                                duration:0.5,
                                x:40,
                                y:0,
                                z:0,
                                ease:"linear"
                            });
                        }
                    }
                    setCurView(3);
                    // camera.position.set(40,0,0);
                    camera.lookAt(new THREE.Vector3(0,0,0));
                }}>
                    3
                </ViewBtn>
                <ViewBtn onClick={(e)=>{
                    e.stopPropagation();
                    let tl = gsap.timeline();
                    if(curView !== 4){
                        if(curView === 3){
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:0,
                                z:40,
                                ease:"linear"
                            });
                            tl.to(camera.position,{
                                duration:0.5,
                                x:-40,
                                y:0,
                                z:0,
                                ease:"linear"
                            });
                        }
                        else{
                            if(curView === 5 || curView === 6){
                                tl.to(camera.position,{
                                    duration:0.5,
                                    x:0,
                                    y:0,
                                    z:40,
                                    ease:"linear"
                                });
                                tl.to(camera.position,{
                                    duration:0.5,
                                    x:-40,
                                    y:0,
                                    z:0,
                                    ease:"linear"
                                });
                            }
                            else{
                                tl.to(camera.position,{
                                    duration:0.5,
                                    x:-40,
                                    y:0,
                                    z:0,
                                    ease:"linear"
                                });
                            }
                        }
                    }
                    else{
                        if(camera.position.x !== -40 || camera.position.y !== 0 || camera.position.z !== 0){
                            tl.to(camera.position,{
                                duration:0.5,
                                x:-40,
                                y:0,
                                z:0,
                                ease:"linear"
                            });
                        }
                    }
                    setCurView(4);
                    // camera.position.set(-40,0,0);
                    // camera.lookAt(new THREE.Vector3(0,0,0));
                }}>
                    4
                </ViewBtn>
                <ViewBtn onClick={(e)=>{
                    e.stopPropagation();
                    let tl = gsap.timeline();
                    if(curView !== 5){
                        if(curView === 2){
                            tl.to(camera.position,{
                                duration:0.5,
                                x:-40,
                                y:0,
                                z:0,
                                ease:"linear"
                            });
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:0,
                                z:40,
                                ease:"linear"
                            });
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:40,
                                z:0,
                                ease:"linear"
                            });
                        }
                        else{
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:0,
                                z:40,
                                ease:"linear"
                            });
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:40,
                                z:0,
                                ease:"linear"
                            });
                        }
                    }
                    else{
                        if(camera.position.x !== 0 || camera.position.y !== 40 || camera.position.z !== 0){
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:40,
                                z:0,
                                ease:"linear"
                            });
                        }
                    }
                    setCurView(5);
                    
                    camera.lookAt(new THREE.Vector3(0,0,0));
                }}>
                    5
                </ViewBtn>
                <ViewBtn onClick={(e)=>{
                    e.stopPropagation();
                    let tl = gsap.timeline();
                    if(curView !== 6){
                        if(curView === 2){
                            tl.to(camera.position,{
                                duration:0.5,
                                x:-40,
                                y:0,
                                z:0,
                                ease:"linear"
                            });
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:0,
                                z:40,
                                ease:"linear"
                            });
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:-40,
                                z:0,
                                ease:"linear"
                            });
                        }
                        else{
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:0,
                                z:40,
                                ease:"linear"
                            });
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:-40,
                                z:0,
                                ease:"linear"
                            });
                        }
                    }
                    else{
                        if(camera.position.x !== 0 || camera.position.y !== -40 || camera.position.z !== 0){
                            tl.to(camera.position,{
                                duration:0.5,
                                x:0,
                                y:-40,
                                z:0,
                                ease:"linear"
                            });
                        }
                    }
                    setCurView(6);
                    // camera.position.set(0,-40,0);
                    camera.lookAt(new THREE.Vector3(0,0,0));
                }}>
                    6
                </ViewBtn>
                <ViewBtn
                    onClick={()=>{
                        // setClicked(true);
                        console.log(camera);
                        controlRef.current.reset();
                    }}
                >
                    7
                </ViewBtn>
            </ViewListContainer>
        </Html>
        
    );
}

export default ViewList;

const ViewListContainer = styled.div`
    width: 6rem;
    height:50%;
    border: 1px solid;
    position: absolute;
    right:2rem;
    top:30rem;
    z-index: 10;
    display: flex;
    flex-direction: column;
`;

const ViewBtn = styled.div`
    width:100%;
    height:10%;
    display:flex;
    justify-content: center;
    align-items:center;
`;