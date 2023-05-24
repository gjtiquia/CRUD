import { Button, FormLabel, TextField, FormControl, Autocomplete} from "@mui/material"
import { presetNames, presetLorry } from "../../../components/presetData"
interface ActiveSubsectionProps {
    OnDoneClicked: (formDataObject: FormDataObject) => void,
    OnCancelClicked: () => void
}

export interface FormDataObject {
    date: Date,
    name: string,
    lorry: string,
    c12: number,
    c12Tong: number,
    c14: number,
    c14Tong: number,
    a14c: number,
    a14cTong: number,
    c50: number,
    c50Tong: number,
    gasPayment: number,
    hutang: number,
    tongPayment: number,
    bayarHutang: number,
    pinjamTong: number,
    pulangTong: number,
    totalCashCollection: number
}

// const presetNames = ["000", "ah pek dima", "Baani Gas", "Cash", "Dunesh Kumar", "Eik Heng (Lima Kedai)", "Fuli", "Ganesan", "Glory Gas", "Hantu", "Jeffry B.Borha", "KEMPAS BABI", "KIONG", "Kota Jaya Gas", "Kumar", "Lim Soon Hin", "Maliga", "Mamat", "Md Amir", "MD NAZRI", "Nathan", "New Town (CAL)", "New Town (SUMMIT)", "Norazman", "PERLING", "public", "Sham", "shortage", "Syah gas", "Thalabathy", "TINAGARAN", "VINOD", "Voon (Abang)", "Voon (Adik)", "WKU6444", "YEE YEU WEI (I)"];

// const presetLorry = ["*NBG 8366", "*JJX 919", "*JEB 9452", "*JQS 8548", "*JDW 5576","000", "BQE 5908/52", "BQF 5908", "BQJ 5908", "JDJ 2361","JDK 6889", "JEM 9000","JFW5238", "JJE 7811", "JLU 5908", "JMT 9746", "JMU 4048", "JPT 947", "JQU 7099", "JQV 6730", "JQW 4137", "JQX9471", "JRA 3161","JRB 6132", "JRK 6132", "JRN 3192", "JRY 8965", "JRT 2519", "JSS 5908", "JTU 5908", "JTW 5908","JTP 5908", "JUA 9892", "JUB 5908", "JUH 5908", "MAB7861", "VDN 5908", "VDJ 5908", "VED 5908", "VEK 5908","VEQ 5908","VES 5908"]

export const ActiveSubsection = (props: ActiveSubsectionProps) => {

    // Called when the submit button is clicked
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // console.log("Submitted!");

        // Prevents default behavior of closing the form
        event.preventDefault();

        // Get the raw data from the form
        const data = new FormData(event.currentTarget)

        // Empty FormDataObject with default values
        const formDataObject: FormDataObject = {
            date: new Date(),
            name: "Default Name",
            lorry: "",
            c12: 0,
            c12Tong: 0,
            c14: 0,
            c14Tong: 0,
            a14c: 0,
            a14cTong: 0,
            c50: 0,
            c50Tong:0,
            gasPayment: 0,
            hutang: 0,
            tongPayment: 0,
            bayarHutang: 0,
            pinjamTong: 0,
            pulangTong: 0,
            totalCashCollection: 0
        }

        // Extract the raw data and convert it into a FormDataObject
        data.forEach((value, key) => {
            // Ignore empty fields
            if (value.toString().length === 0) return;

            // console.log(key, value)

            // key is the same as the name prop in the TextField
            switch (key) {
                case "date":
                    formDataObject.date = new Date(value.toString());
                    break;

                case "name":
                    formDataObject.name = value.toString();
                    break;

                case "lorry":
                    formDataObject.lorry = value.toString();
                    break;

                case "c12":
                    formDataObject.c12 = parseInt(value.toString());
                    break;

                case "c12Tong":
                    formDataObject.c12Tong = parseInt(value.toString());
                    break;

                case "c14":
                    formDataObject.c14 = parseInt(value.toString());
                    break;

                case "c14Tong":
                    formDataObject.c14Tong = parseInt(value.toString());
                    break;

                case "a14c":
                    formDataObject.a14c = parseInt(value.toString());
                    break;

                case "a14cTong":
                    formDataObject.a14cTong = parseInt(value.toString());
                    break;
                    
                case "c50":
                    formDataObject.c50 = parseInt(value.toString());
                    break;

                case "c50Tong":
                    formDataObject.c50Tong = parseInt(value.toString());
                    break;

                case "gasPayment":
                    formDataObject.gasPayment = parseInt(value.toString());
                    break;

                case "hutang":
                    formDataObject.hutang = parseInt(value.toString());
                    break;
                
                case "tongPayment":
                    formDataObject.tongPayment = parseInt(value.toString());
                    break;

                case "bayarHutang":
                    formDataObject.bayarHutang = parseInt(value.toString());
                    break;

                case "pinjamTong":
                    formDataObject.pinjamTong = parseInt(value.toString());
                    break;

                case "pulangTong":
                    formDataObject.pulangTong = parseInt(value.toString());
                    break;    

                // case "totalCashCollection":
                //     formDataObject.totalCashCollection = parseInt(value.toString())
                //     break;
            }
        });

        props.OnDoneClicked(formDataObject);
    }

    return (
        <div className="flex flex-col gap-4 ml-4 max-sm:justify-center max-sm:ml-0">

            <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-4 bg-slate-900 p-5 rounded-lg shadow-lg shadow-gray-900">
                    <div className="flex flex-col gap-2 ">
                        <FormLabel>Essential Data</FormLabel>
                        <div className="flex flex-col gap-4 max-sm:flex-col">
                            <div className="flex flex-row gap-4 max-sm:flex-col">
                                <TextField name="date" required={true} size="small" type="datetime-local" className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full"/>

                                <div>
                                    <FormControl variant="outlined" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full">
                                        <Autocomplete
                                            options={presetNames}
                                            renderInput={(params) => (
                                                <TextField {...params} required label="Name" size="small" />
                                            )}
                                            freeSolo //To allow you to input by yourself 
                                        />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl variant="outlined" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full">
                                        <Autocomplete
                                            options={presetLorry}
                                            renderInput={(params) => (
                                                <TextField {...params} required label="Lorry" size="small" />
                                            )}
                                            freeSolo //To allow you to input by yourself 
                                        />
                                    </FormControl>

                                    
                                </div>
                            </div>
                            <div className="flex gap-4 mt-6 max-sm:flex-col">
                                <TextField name="gasPayment" required={true} size="small" label="Gas Payment" type="number" className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                                <TextField name="hutang" required={true} size="small" label="Hutang" type="number" className=" w-48 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                                <TextField name="tongPayment" required={true} size="small" label="Tong Payment" type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                                <TextField name="bayarHutang" required={true} size="small" label="Bayar Hutang" type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                            </div>
                            <div className="flex gap-4 mt-1 max-sm:flex-col">
                                <TextField name="pinjamTong" required={true} size="small" label="Pinjam Tong" type="number" className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full "/>
                                <TextField name="pulangTong" required={true} size="small" label="Pulang Tong" type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <FormLabel>Non-essential Data</FormLabel>
                        <div className="flex gap-4 max-sm:flex-col">
                            <TextField name="c12" size="small" label="C12" type="number" className="w-60 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                            <TextField name="c12Tong" size="small" label="C12Tong" type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                            <TextField name="c14" size="small" required={true} label="C14" type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                            <TextField name="c14Tong" size="small" label="C14Tong" type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                        </div>
                        <div className="flex gap-4 mt-1 max-sm:flex-col">
                            <TextField name="a14c" size="small" label="14c" type="number" className=" w-60 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                            <TextField name="a14cTong" size="small" label="14cTong" type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                            <TextField name="c50" size="small" label="C50" type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                            <TextField name="c50Tong" size="small" label="C50Tong" type="number" className="w-48 shadow-sm shadow-indigo-900 max-sm:w-full"/>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-2 mb-4 max-sm:flex-col max-sm:mb-0">
                        <Button variant="contained" type="submit">Done</Button>
                        <Button onClick={props.OnCancelClicked}>Cancel</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}