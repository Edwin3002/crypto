import React from "react";
import { Box, styled } from "@mui/material";
import clsx from "clsx";

const StyledBox = styled(Box)(({ ellipsis }) => ({
  ...(ellipsis && {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  }),
  color: "#5F748D"
}));
export const H1 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={28}
      component="h1"
      fontWeight={600}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const H2 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={24}
      component="h2"
      fontWeight={600}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const H3 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={18}
      component="h3"
      fontWeight={600}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const H4 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={16}
      component="h4"
      fontWeight={600}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const H5 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={14}
      component="h5"
      lineHeight={1}
      fontWeight={600}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const H6 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={13}
      component="h6"
      fontWeight={600}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const Paragraph = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={14}
      component="p"
      fontWeight={500}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const Small = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={13}
      component="small"
      fontWeight={500}
      lineHeight={1.6}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const Span = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={14}
      component="span"
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};
export const Tiny = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      component="p"
      fontSize={13}
      fontWeight={500}
      lineHeight={1.65}
      ellipsis={ellipsis}
      // color="text.secondary"
      className={clsx({
        [className || ""]: true,
      })}
      {...others}
    >
      {children}
    </StyledBox>
  );
};

// create the next component receiving a bold text and a other from props
export const TextWithBoldPart = (props) => {
  const { boldPart, children, ...others } = props;

  return (
    <Paragraph lineHeight={2} {...others}>
      <Span sx={{ fontWeight: 505 }}>{boldPart}</Span>
      {children}
    </Paragraph>
  );
}
