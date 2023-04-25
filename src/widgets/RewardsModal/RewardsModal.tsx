import styles from "./RewardsModal.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { Modal } from "~shared/ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from "~store";
import { ModalsNames, setModalActive } from "~app/reducers/modals-slice";
import { StarIcon } from "~shared/resources/icons/StarIcon";
import React from "react";
import { Button, ThemeButton } from "~shared/ui/Button/Button";

interface RewardsModalProps {
    className?: string;
}

export const RewardsModal = ({ className }: RewardsModalProps) => {

    const rewardState = useAppSelector(state => state.modal[ModalsNames.REWARDS]);
    const dispatch = useAppDispatch();

    function OnClickCloseRewardsModalHandler() {
        dispatch(setModalActive({
            ModalName: ModalsNames.REWARDS,
            active: false
        }));
    }

    const reward = () => {
        return (
            <div className={styles.reward}>
                <div className={styles.rewardContent}>
                    <span className={styles.rewardName}>Whitelist for Focus DC Gen2</span>

                    <Button className={styles.button}
                            theme={ThemeButton.DEFAULT}
                    >
                        <span>Claim</span>

                        <span className={styles.starCountBtn}>
                            10
                            <StarIcon color={'#ffffff'}/>
                        </span>
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <Modal className={classNames(styles.RewardsModal, {}, [className])}
               modalActive={rewardState}
               setModalActive={OnClickCloseRewardsModalHandler}
        >
            <div className={styles.nav}>
                <span className={styles.title}>Rewards</span>
                <span className={styles.desc}>Collect stars to get rewards</span>
                <span className={styles.starCount}>
                    You have 14
                    <StarIcon />
                </span>
            </div>


            <div className={styles.rewardsWrapper}>
                {reward()}
                {reward()}
                {reward()}
                {reward()}
                {reward()}
                {reward()}
                {reward()}
                {reward()}
                {reward()}
                {reward()}
                {reward()}
                {reward()}
                {reward()}
                {reward()}
            </div>
        </Modal>
    );
};