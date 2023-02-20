import { Modal, Box, Typography } from "@mui/material"
import React from "react"
import { Priority } from "../../../../helpers/types"

type Props = {
    open: boolean
    handleClose: () => void
    setPriority: (value: Priority) => void
}

function PriorityModal({ open, handleClose, setPriority }: Props) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex items-center text-center justify-center"
        >
            <Box className="h-auto w- bg-primary rounded-2xl px-20">
                <div className="flex text-center justify-center font-inter font-black text-xl text-secondary py-5">
                    SELECT PRIORITY
                </div>
                <div className="flex flex-col justify-center items-center gap-y-4 py-5">
                    <button
                        className="bg-secondary rounded-2xl font-inter font-black px-5 py-5 text-primary w-48 h-16 hover:opacity-80"
                        onClick={() => {
                            setPriority(Priority.LOW)
                            handleClose()
                        }}
                    >
                        LOW
                    </button>
                    <button
                        className="bg-secondary rounded-2xl font-inter font-black px-5 py-5 text-primary w-48 h-16 hover:opacity-80"
                        onClick={() => {
                            setPriority(Priority.MEDIUM)
                            handleClose()
                        }}
                    >
                        MEDIUM
                    </button>
                    <button
                        className="bg-secondary rounded-2xl font-inter font-black px-5 py-5 text-primary w-48 h-16 hover:opacity-80"
                        onClick={() => {
                            setPriority(Priority.HIGH)
                            handleClose()
                        }}
                    >
                        HIGH
                    </button>
                </div>
            </Box>
        </Modal>
    )
}

export default PriorityModal
