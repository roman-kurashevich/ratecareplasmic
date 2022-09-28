// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nf2Nv99ueYinsR5xWJBp2w
// Component: EvzDlzcJL-
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import AuthComponent from "../../AuthComponent"; // plasmic-import: VGRHqtCqGC/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_ratecare.module.css"; // plasmic-import: nf2Nv99ueYinsR5xWJBp2w/projectcss
import sty from "./PlasmicLogin.module.css"; // plasmic-import: EvzDlzcJL-/css

import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: OpqeVbJxX/icon
import Icon16PxCheckIcon from "./icons/PlasmicIcon__Icon16PxCheck"; // plasmic-import: wyb0uHagtq/icon
import Rectangle115Icon from "./icons/PlasmicIcon__Rectangle115"; // plasmic-import: 9H_iujjOB6/icon
import Group4195Icon from "./icons/PlasmicIcon__Group4195"; // plasmic-import: vL5tDYGfuP/icon
import Ellipse2Icon from "./icons/PlasmicIcon__Ellipse2"; // plasmic-import: RQkrkF-o9D/icon
import Ellipse3Icon from "./icons/PlasmicIcon__Ellipse3"; // plasmic-import: JaVMpU6HAL/icon

export type PlasmicLogin__VariantMembers = {};

export type PlasmicLogin__VariantsArgs = {};
type VariantPropType = keyof PlasmicLogin__VariantsArgs;
export const PlasmicLogin__VariantProps = new Array<VariantPropType>();

export type PlasmicLogin__ArgsType = {};
type ArgPropType = keyof PlasmicLogin__ArgsType;
export const PlasmicLogin__ArgProps = new Array<ArgPropType>();

export type PlasmicLogin__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"div">;
  controlPanel?: p.Flex<"div">;
  input?: p.Flex<"div">;
  label?: p.Flex<"div">;
  label2?: p.Flex<"div">;
  inputField?: p.Flex<"div">;
  hintMessage?: p.Flex<"div">;
  buttonContainer?: p.Flex<"div">;
  button?: p.Flex<"div">;
  iconCopyBig?: p.Flex<"div">;
  group286?: p.Flex<"div">;
  rectangle114?: p.Flex<"div">;
  text2?: p.Flex<"div">;
  iconSelectBig?: p.Flex<"div">;
  rectangle119?: p.Flex<"div">;
  avatar?: p.Flex<"div">;
  mk?: p.Flex<"div">;
  mk2?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  authComponent?: p.Flex<typeof AuthComponent>;
  rectangle121?: p.Flex<"div">;
  rectangle122?: p.Flex<"div">;
};

export interface DefaultLoginProps {}

function PlasmicLogin__RenderFunc(props: {
  variants: PlasmicLogin__VariantsArgs;
  args: PlasmicLogin__ArgsType;
  overrides: PlasmicLogin__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            hasGap={true}
            className={classNames(projectcss.all, sty.header)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__iBc7T
              )}
            >
              {"RateCare"}
            </div>

            <p.Stack
              as={"div"}
              data-plasmic-name={"controlPanel"}
              data-plasmic-override={overrides.controlPanel}
              hasGap={true}
              className={classNames(projectcss.all, sty.controlPanel)}
            >
              {false ? (
                <div
                  data-plasmic-name={"input"}
                  data-plasmic-override={overrides.input}
                  className={classNames(projectcss.all, sty.input)}
                >
                  {false ? (
                    <div
                      data-plasmic-name={"label"}
                      data-plasmic-override={overrides.label}
                      className={classNames(projectcss.all, sty.label)}
                    >
                      <div
                        data-plasmic-name={"label2"}
                        data-plasmic-override={overrides.label2}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.label2
                        )}
                      >
                        {"Label"}
                      </div>
                    </div>
                  ) : null}

                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"inputField"}
                    data-plasmic-override={overrides.inputField}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.inputField)}
                  >
                    <SearchIcon
                      className={classNames(projectcss.all, sty.svg__uchB)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___1YcJ6
                      )}
                    >
                      {"Search"}
                    </div>

                    {false ? (
                      <Icon16PxCheckIcon
                        className={classNames(projectcss.all, sty.svg__iHoVb)}
                        role={"img"}
                      />
                    ) : null}
                  </p.Stack>

                  {false ? (
                    <div
                      data-plasmic-name={"hintMessage"}
                      data-plasmic-override={overrides.hintMessage}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.hintMessage
                      )}
                    >
                      {"Hint message"}
                    </div>
                  ) : null}
                </div>
              ) : null}
              {false ? (
                <div
                  data-plasmic-name={"buttonContainer"}
                  data-plasmic-override={overrides.buttonContainer}
                  className={classNames(projectcss.all, sty.buttonContainer)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.button)}
                  >
                    <div
                      data-plasmic-name={"iconCopyBig"}
                      data-plasmic-override={overrides.iconCopyBig}
                      className={classNames(projectcss.all, sty.iconCopyBig)}
                    >
                      <div
                        data-plasmic-name={"group286"}
                        data-plasmic-override={overrides.group286}
                        className={classNames(projectcss.all, sty.group286)}
                      >
                        <div
                          data-plasmic-name={"rectangle114"}
                          data-plasmic-override={overrides.rectangle114}
                          className={classNames(
                            projectcss.all,
                            sty.rectangle114
                          )}
                        />

                        <Rectangle115Icon
                          className={classNames(projectcss.all, sty.svg__eBbQ)}
                          role={"img"}
                        />
                      </div>
                    </div>

                    <div
                      data-plasmic-name={"text2"}
                      data-plasmic-override={overrides.text2}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text2
                      )}
                    >
                      {"Button"}
                    </div>

                    {false ? (
                      <div
                        data-plasmic-name={"iconSelectBig"}
                        data-plasmic-override={overrides.iconSelectBig}
                        className={classNames(
                          projectcss.all,
                          sty.iconSelectBig
                        )}
                      >
                        <Group4195Icon
                          className={classNames(projectcss.all, sty.svg__fllfi)}
                          role={"img"}
                        />
                      </div>
                    ) : null}
                    {false ? (
                      <div
                        data-plasmic-name={"rectangle119"}
                        data-plasmic-override={overrides.rectangle119}
                        className={classNames(projectcss.all, sty.rectangle119)}
                      />
                    ) : null}
                  </p.Stack>
                </div>
              ) : null}

              <div
                data-plasmic-name={"avatar"}
                data-plasmic-override={overrides.avatar}
                className={classNames(projectcss.all, sty.avatar)}
              >
                <Ellipse2Icon
                  className={classNames(projectcss.all, sty.svg__kgLh)}
                  role={"img"}
                />

                <div
                  data-plasmic-name={"mk"}
                  data-plasmic-override={overrides.mk}
                  className={classNames(projectcss.all, sty.mk)}
                >
                  <div
                    data-plasmic-name={"mk2"}
                    data-plasmic-override={overrides.mk2}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.mk2
                    )}
                  >
                    {"SR"}
                  </div>
                </div>
              </div>
            </p.Stack>
          </p.Stack>

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <AuthComponent
              data-plasmic-name={"authComponent"}
              data-plasmic-override={overrides.authComponent}
              className={classNames("__wab_instance", sty.authComponent)}
            />

            <div
              data-plasmic-name={"rectangle121"}
              data-plasmic-override={overrides.rectangle121}
              className={classNames(projectcss.all, sty.rectangle121)}
            >
              <Ellipse3Icon
                className={classNames(projectcss.all, sty.svg__y0CfV)}
                role={"img"}
              />

              <div
                data-plasmic-name={"rectangle122"}
                data-plasmic-override={overrides.rectangle122}
                className={classNames(projectcss.all, sty.rectangle122)}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "controlPanel",
    "input",
    "label",
    "label2",
    "inputField",
    "hintMessage",
    "buttonContainer",
    "button",
    "iconCopyBig",
    "group286",
    "rectangle114",
    "text2",
    "iconSelectBig",
    "rectangle119",
    "avatar",
    "mk",
    "mk2",
    "freeBox",
    "authComponent",
    "rectangle121",
    "rectangle122"
  ],
  header: [
    "header",
    "controlPanel",
    "input",
    "label",
    "label2",
    "inputField",
    "hintMessage",
    "buttonContainer",
    "button",
    "iconCopyBig",
    "group286",
    "rectangle114",
    "text2",
    "iconSelectBig",
    "rectangle119",
    "avatar",
    "mk",
    "mk2"
  ],
  controlPanel: [
    "controlPanel",
    "input",
    "label",
    "label2",
    "inputField",
    "hintMessage",
    "buttonContainer",
    "button",
    "iconCopyBig",
    "group286",
    "rectangle114",
    "text2",
    "iconSelectBig",
    "rectangle119",
    "avatar",
    "mk",
    "mk2"
  ],
  input: ["input", "label", "label2", "inputField", "hintMessage"],
  label: ["label", "label2"],
  label2: ["label2"],
  inputField: ["inputField"],
  hintMessage: ["hintMessage"],
  buttonContainer: [
    "buttonContainer",
    "button",
    "iconCopyBig",
    "group286",
    "rectangle114",
    "text2",
    "iconSelectBig",
    "rectangle119"
  ],
  button: [
    "button",
    "iconCopyBig",
    "group286",
    "rectangle114",
    "text2",
    "iconSelectBig",
    "rectangle119"
  ],
  iconCopyBig: ["iconCopyBig", "group286", "rectangle114"],
  group286: ["group286", "rectangle114"],
  rectangle114: ["rectangle114"],
  text2: ["text2"],
  iconSelectBig: ["iconSelectBig"],
  rectangle119: ["rectangle119"],
  avatar: ["avatar", "mk", "mk2"],
  mk: ["mk", "mk2"],
  mk2: ["mk2"],
  freeBox: ["freeBox", "authComponent", "rectangle121", "rectangle122"],
  authComponent: ["authComponent"],
  rectangle121: ["rectangle121", "rectangle122"],
  rectangle122: ["rectangle122"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  controlPanel: "div";
  input: "div";
  label: "div";
  label2: "div";
  inputField: "div";
  hintMessage: "div";
  buttonContainer: "div";
  button: "div";
  iconCopyBig: "div";
  group286: "div";
  rectangle114: "div";
  text2: "div";
  iconSelectBig: "div";
  rectangle119: "div";
  avatar: "div";
  mk: "div";
  mk2: "div";
  freeBox: "div";
  authComponent: typeof AuthComponent;
  rectangle121: "div";
  rectangle122: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogin__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogin__VariantsArgs;
    args?: PlasmicLogin__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogin__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLogin__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLogin__ArgProps,
          internalVariantPropNames: PlasmicLogin__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    controlPanel: makeNodeComponent("controlPanel"),
    input: makeNodeComponent("input"),
    label: makeNodeComponent("label"),
    label2: makeNodeComponent("label2"),
    inputField: makeNodeComponent("inputField"),
    hintMessage: makeNodeComponent("hintMessage"),
    buttonContainer: makeNodeComponent("buttonContainer"),
    button: makeNodeComponent("button"),
    iconCopyBig: makeNodeComponent("iconCopyBig"),
    group286: makeNodeComponent("group286"),
    rectangle114: makeNodeComponent("rectangle114"),
    text2: makeNodeComponent("text2"),
    iconSelectBig: makeNodeComponent("iconSelectBig"),
    rectangle119: makeNodeComponent("rectangle119"),
    avatar: makeNodeComponent("avatar"),
    mk: makeNodeComponent("mk"),
    mk2: makeNodeComponent("mk2"),
    freeBox: makeNodeComponent("freeBox"),
    authComponent: makeNodeComponent("authComponent"),
    rectangle121: makeNodeComponent("rectangle121"),
    rectangle122: makeNodeComponent("rectangle122"),

    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */
