import { SvgProps } from "react-native-svg";
import MicrophoneSvg from "./microphone.svg";
import CameraSvg from './camera.svg'
import PrivateSvg from "./private.svg"
import ScetchSvg from "./scetch.svg"
import PinnedFileSvg from "./pinned.svg"
import BtnSaveSvg from "./btnSave-icon.svg"
import React from "react";
import TtSvg from "./tt.svg"
import BSvg from "./b.svg"
import ISvg from "./i.svg"
import USvg from "./u.svg"
import MenuTextSvg from "./menuText.svg"
import TagsSvg from  "./tag.svg"
import SettingsNoteSvg from  "./settingsNotes.svg"
import AddUsersSvg from  "./addUsers.svg"
import OutputIconSvg from  "./Output.svg"
import DeleteSvg from "./delete.svg"
import ProfileSvg from  "./profile.svg"
import CorrectSvg from  "./correct.svg"
import LockSvg from "./lock.svg"
import TrashCanSvg from "./TrashCan.svg"
import GoogleSvg from "./google.svg"
import KeyLockSvg from "./keyLock.svg"
import UserSettingsSvg from  "./userSettingsIcon.svg"
import NotSettingsSvg from  "./NotSettingsIcon.svg"
import SecuredSvg from  "./Secured.svg"
import LogOutSvg from  "./LogOut.svg"
import MessageSvg from  "./Message.svg"
import HeartSvg from  "./Heart.svg"
import LogInSvg from  "./LogIn.svg"

type Icon = React.FC<SvgProps>

function icon(Component:Icon): Icon{
    return (props:SvgProps) => <Component {...props}/>
}

export const Lock = icon(LockSvg)
export const Microphone = icon(MicrophoneSvg)
export const Camera = icon(CameraSvg)
export const Private= icon(PrivateSvg)
export const Scetch= icon(ScetchSvg)
export const PinnedFile = icon(PinnedFileSvg)
export const BtnSaveIcon= icon(BtnSaveSvg)
export const Tt = icon(TtSvg)
export const B = icon(BSvg)
export const I = icon(ISvg)
export const U = icon(USvg)
export const MenuText = icon(MenuTextSvg)
export const Tags = icon(TagsSvg)
export const SettingsNote = icon(SettingsNoteSvg)
export const AddUsers = icon(AddUsersSvg)
export const OutputIcon = icon(OutputIconSvg)
export const Delete = icon(DeleteSvg)
export const Profile = icon(ProfileSvg)
export const Correct = icon(CorrectSvg)
export const TrashCan = icon(TrashCanSvg)
export const Google = icon(GoogleSvg)
export const KeyLock = icon(KeyLockSvg)
export const UserSettings = icon(UserSettingsSvg)
export const NotSettings = icon(NotSettingsSvg)
export const Secured = icon(SecuredSvg)
export const LogOut = icon(LogOutSvg)
export const Message = icon(MessageSvg)
export const Heart = icon(HeartSvg)
export const LogIn = icon(LogInSvg)