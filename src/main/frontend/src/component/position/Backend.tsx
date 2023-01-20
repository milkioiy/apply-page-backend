import React, { ChangeEvent } from 'react'
import { ButtonBox, Section, Button, Require, Article, InputTitle, TextAreaBox, InputBox, Banner, WordLength } from '../emotion/component'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, TestState } from '../../app/store';
import { saveCommon, saveIndex, view, saveBackEnd } from '../../features/fetcherSlice';
import { useEffect, useMemo } from 'react';
import axios from 'axios';

export default function Backend() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [difficultAndOvercoming, setDifficultAndOvercoming] = useState('');
    const [studyFramework, setStudyFramework] = useState('');
    const [importantGroup, setImportantGroup] = useState('');
    const [portfolioLink, setPortfolioLink] = useState('');
    const [buttonState, setButtonState] = useState(false);
    const [submitCount, setSubmitCount] = useState<number>(0);


    const userName = useSelector((state: TestState) => state.fetcher.userName);
    const userID = useSelector((state: TestState) => state.fetcher.userID);
    const userPhone = useSelector((state: TestState) => state.fetcher.userPhone);
    const userEmail = useSelector((state: TestState) => state.fetcher.userEmail);
    const userPosition = useSelector((state: TestState) => state.fetcher.userPosition);
    const userDepartment = useSelector((state: TestState) => state.fetcher.userDepartment);

    const userMotiv = useSelector((state: TestState) => state.fetcher.userMotiv);
    const userHardWork = useSelector((state: TestState) => state.fetcher.userHardWork);
    const userKeyWord = useSelector((state: TestState) => state.fetcher.userKeyWord);
    const userMostDeeplyWork = useSelector((state: TestState) => state.fetcher.userMostDeeplyWork);

    const userDifficultAndOvercoming = useSelector((state: TestState) => state.fetcher.userDifficultAndOvercoming);
    const userStudyFramework = useSelector((state: TestState) => state.fetcher.userStudyFramework);
    const userImportantGroup = useSelector((state: TestState) => state.fetcher.userImportantGroup);
    const userPortfolioLink = useSelector((state: TestState) => state.fetcher.userPortfolioLinkBack);

    useEffect(() => {
        if (!userName && !userID && !userPhone && !userEmail && !userPosition) {
            alert('잘못된 접근입니다!');
            navigate('/')
        }

        // 이전 값들을 저장하기 위해서 Redux 사용
        if (userDifficultAndOvercoming) {
            setDifficultAndOvercoming(userDifficultAndOvercoming);
        }

        if (userStudyFramework) {
            setStudyFramework(userStudyFramework);
        }

        if (userImportantGroup) {
            setImportantGroup(userImportantGroup);
        }

        if (userPortfolioLink) {
            setPortfolioLink(userPortfolioLink)
        }
    }, [])

    useMemo(() => {
        if (difficultAndOvercoming && studyFramework && importantGroup) {
            setButtonState(false)
        } else {
            setButtonState(true)
        }
        if (submitCount >= 1) {
            setButtonState(true);
        }
    }, [difficultAndOvercoming, studyFramework, importantGroup, submitCount])


    const Back = () => {
        setSubmitCount((prev) => (prev + 1))
        dispatch(saveBackEnd({ userDifficultAndOvercoming: difficultAndOvercoming, userStudyFramework: studyFramework, userImportantGroup: importantGroup, userPortfolioLinkBack: portfolioLink }));
        navigate('/common');
    }

    const TempSave = () => {
        setSubmitCount((prev) => (prev + 1))
        axios.post('/backendApplication', JSON.stringify({
            department: userDepartment,
            difficultAndOvercoming: difficultAndOvercoming,
            email: userEmail,
            hardWork: userHardWork,
            importantGroup: importantGroup,
            keyWord: userKeyWord,
            mostDeeplyWork: userMostDeeplyWork,
            motive: userMotiv,
            name: userName,
            passOrNot: true,
            phoneNumber: userPhone,
            portfolioFile: "",
            portfolioLink: portfolioLink,
            sid: userID,
            studyFramework: studyFramework,
        }),
            {
                headers: {
                    "Content-type": "application/json",
                }
            }
        )
            .then((res) => {
                console.log(res);
                dispatch(saveBackEnd({
                    userDifficultAndOvercoming: '',
                    userImportantGroup: '',
                    userPortfolioLink: '',
                    userStudyFramework: '',
                }));
                dispatch(saveCommon({
                    userMotiv: '',
                    userHardWork: '',
                    userKeyWord: '',
                    userMostDeeplyWork: '',
                }))
                dispatch(saveIndex({
                    userName: '',
                    userID: '',
                    userDepartment: '',
                    userEmail: '',
                    userPhone: '',
                    userPosition: '',
                }))
                navigate('/');
            })
    }

    const Submit = () => {
        setSubmitCount((prev) => (prev + 1))
        axios.post('/backendApplication', JSON.stringify({
            department: userDepartment,
            difficultAndOvercoming: difficultAndOvercoming,
            email: userEmail,
            hardWork: userHardWork,
            importantGroup: importantGroup,
            keyWord: userKeyWord,
            mostDeeplyWork: userMostDeeplyWork,
            motive: userMotiv,
            name: userName,
            passOrNot: true,
            phoneNumber: userPhone,
            portfolioFile: "",
            portfolioLink: portfolioLink,
            sid: userID,
            studyFramework: studyFramework,
        }),
            {
                headers: {
                    "Content-type": "application/json",
                }
            }
        )
            .then((res) => {
                console.log(res);
                dispatch(saveBackEnd({
                    userDifficultAndOvercoming: '',
                    userImportantGroup: '',
                    userPortfolioLink: '',
                    userStudyFramework: '',
                }));
                dispatch(saveCommon({
                    userMotiv: '',
                    userHardWork: '',
                    userKeyWord: '',
                    userMostDeeplyWork: '',
                }))
                dispatch(saveIndex({
                    userName: '',
                    userID: '',
                    userDepartment: '',
                    userEmail: '',
                    userPhone: '',
                    userPosition: '',
                }))
                navigate('/');
            })
    }

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "극복") {
            setDifficultAndOvercoming(event.target.value);
        }

        if (event.target.name === "경험") {
            setStudyFramework(event.target.value);
        }

        if (event.target.name === "팀워크") {
            setImportantGroup(event.target.value);
        }

        if (event.target.name === "포트폴리오") {
            setPortfolioLink(event.target.value);
        }
    }

    return (
        <Section>
            <Banner />
            <Article>
                <InputTitle>개발 관련 공부를 하며 개인적으로 힘들었던 경험과 그걸 극복했던 자신만의 방법이 있나요?<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" name="극복" onChange={handleChange} value={difficultAndOvercoming} />
                <WordLength>{difficultAndOvercoming.length}</WordLength>
            </Article>
            <Article>
                <InputTitle>웹 백앤드 프레임워크를 공부해보신적 있으신가요? 있으시다면 어디까지 공부해보셨나요?<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" name="경험" onChange={handleChange} value={studyFramework} />
                <WordLength>{studyFramework.length}</WordLength>
            </Article>
            <Article>
                <InputTitle>단체생활에서 가장 중요하다고 생각하는 것은 무엇인가요?<Require /> </InputTitle>
                <TextAreaBox placeholder="텍스트를 입력해주세요" name="팀워크" onChange={handleChange} value={importantGroup} />
                <WordLength>{importantGroup.length}</WordLength>
            </Article>
            <Article>
                <InputTitle>포트폴리오 링크가 있다면 첨부해주세요 </InputTitle>
                <InputBox type="text" placeholder="포트폴리오 링크를 입력해주세요" maxLength={200} name="포트폴리오" onChange={handleChange} value={portfolioLink} />
            </Article>
            <ButtonBox>
                <Button name="임시저장" onClick={TempSave}>{submitCount >= 1 ? `잠시만 기다려주세요...` : `임시저장`}</Button>
                <Button name="제출하기" onClick={Back} disabled={buttonState}>{submitCount >= 1 ? `잠시만 기다려주세요...` : `뒤로가기`}</Button>
                <Button name="제출하기" onClick={Submit} disabled={buttonState}>{submitCount >= 1 ? `잠시만 기다려주세요...` : `제출하기`}</Button>
            </ButtonBox>
        </Section>
    )
}