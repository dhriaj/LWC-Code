import { LightningElement, track } from 'lwc';

const columns =[
    { label: "Name", fieldName: 'Name'},
{ label: "id of the Name", fieldName: 'Id'},]

export default class Imperative_Method extends LightningElement {


@track columns = columns;

}