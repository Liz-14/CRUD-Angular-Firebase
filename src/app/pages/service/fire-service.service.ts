import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {

  employees!: Observable<Employee[]>

  private employeesCollection: AngularFirestoreCollection<Employee>

  constructor(private afs: AngularFirestore) { 
    this.employeesCollection = afs.collection<Employee>('employees')
    this.getEmployees()
  }

  private getEmployees(): void{
    this.employees =  this.employeesCollection.snapshotChanges().pipe(
      map(actions => actions.map(el => el.payload.doc.data() as Employee)),
    )
  }

  onSave(employee: Employee, employeeId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = employeeId || this.afs.createId()
        const data = {id, ...employee}
        const result = await this.employeesCollection.doc(id).set(data)
        resolve(result)
      }catch (error: any) {
        reject(error.message)
      }
    })
  }

  onDelete(employeeId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.employeesCollection.doc(employeeId).delete()
        resolve(result)
      }catch (error: any) {
        reject(error.message)
      }
    })
  }
}
